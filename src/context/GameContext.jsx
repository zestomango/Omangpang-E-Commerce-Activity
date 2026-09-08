import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([
    {
        "id": 1,
        "title": "Persona 5 Royal",
        "price": "₱2,995.00",
        "genre": "RPG, Anime",
        "developer": "ATLUS",
        "publisher": "SEGA",
        "description": "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways! Prepare for the award-winning RPG experience in this definitive edition of Persona 5 Royal, featuring a wealth of downloadable content included!",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg?t=1783356822",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256911919/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256911919/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_38d09e40dd56df43a1bb083dc94e27cb1360b526.1920x1080.jpg?t=1783356822",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_56f354736174fdb01b7b295b587ca72ca9254df7.1920x1080.jpg?t=1783356822",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_cfa96c0c9a983689b48cc679ddc63cfe373c2b9a.1920x1080.jpg?t=1783356822"
        ]
    },
    {
        "id": 2,
        "title": "Persona 4 Revival",
        "price": "₱995.00",
        "genre": "RPG, Anime",
        "developer": "ATLUS",
        "publisher": "SEGA",
        "description": "A coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders.",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2963950/e83b7da1c2e9ddbed1a27038bd86e9714b2aa893/header.jpg?t=1787883430",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256785003/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256785003/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963950/553029204f0bef1ba1bfd1542091b299fd8b9075/ss_553029204f0bef1ba1bfd1542091b299fd8b9075.1920x1080.jpg?t=1787883430",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963950/8a7ca2c4bcee42c742d4435d43bb965dea1a3b33/ss_8a7ca2c4bcee42c742d4435d43bb965dea1a3b33.1920x1080.jpg?t=1787883430",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963950/7273be1b6a0a1e762f56983a676e4235fc7bad49/ss_7273be1b6a0a1e762f56983a676e4235fc7bad49.1920x1080.jpg?t=1787883430"
        ]
    },
    {
        "id": 3,
        "title": "Persona 3 Reload",
        "price": "₱3,495.00",
        "genre": "RPG, Anime",
        "developer": "ATLUS",
        "publisher": "SEGA",
        "description": "Step into the shoes of a transfer student thrust into an unexpected fate when entering the hour 'hidden' between one day and the next.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256997092/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256997092/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 4,
        "title": "Hollow Knight",
        "price": "₱490.00",
        "genre": "Action, Indie",
        "developer": "Team Cherry",
        "publisher": "Team Cherry",
        "description": "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256681021/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256681021/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Hollow Knight Silksong",
        "price": "₱490.00",
        "genre": "Action, Indie",
        "developer": "Team Cherry",
        "publisher": "Team Cherry",
        "description": "Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom ruled by silk and song!",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256868511/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256868511/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 6,
        "title": "Celeste",
        "price": "₱490.00",
        "genre": "Action, Indie",
        "developer": "Extremely OK Games, Ltd.",
        "publisher": "Extremely OK Games, Ltd.",
        "description": "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256705608/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256705608/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 7,
        "title": "Undertale",
        "price": "₱320.00",
        "genre": "RPG, Indie",
        "developer": "tobyfox",
        "publisher": "tobyfox",
        "description": "UNDERTALE! The RPG game where you don't have to destroy anyone.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg",
        "thumbnails": [
            {
                "type": "video",
                "url": "https://steamcdn-a.akamaihd.net/steam/apps/256658091/movie480_vp9.webm",
                "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256658091/movie_full.jpg"
            },
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 8,
        "title": "Geometry Dash",
        "price": "₱130.00",
        "genre": "Action, Casual",
        "developer": "RobTop Games",
        "publisher": "RobTop Games",
        "description": "Jump and fly your way through danger in this rhythm-based action platformer!",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1775300400",
        "thumbnails": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 9,
        "title": "Trails in the Sky",
        "price": "₱600.00",
        "genre": "RPG, Adventure",
        "developer": "Nihon Falcom",
        "publisher": "XSEED Games",
        "description": "Hailed as one of the largest, longest and most meticulously detailed turn-based JRPG series of all time, this first chapter sets the stage...",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3375780/header.jpg?t=1777572632",
        "thumbnails": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/251150/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/251150/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/251150/ss_3.1920x1080.jpg"
        ]
    },
    {
        "id": 10,
        "title": "Sonic Generations",
        "price": "₱995.00",
        "genre": "Action, Platformer",
        "developer": "SEGA",
        "publisher": "SEGA",
        "description": "Celebrate 20 years of Sonic the Hedgehog in Sonic Generations! The definitive experience for Sonic fans new and old.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/header.jpg",
        "thumbnails": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/ss_1.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/ss_2.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/ss_3.1920x1080.jpg"
        ]
    }
]);

  const getGameById = (id) => {
    return games.find(g => g.id === parseInt(id));
  };

  return (
    <GameContext.Provider value={{ games, getGameById }}>
      {children}
    </GameContext.Provider>
  );
};
