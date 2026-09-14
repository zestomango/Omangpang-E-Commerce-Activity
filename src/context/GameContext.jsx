import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [games, setGames] = useState([
    {
        "id": 1,
        "title": "Persona 5 Royal PS5",
        "price": "₱2,995.00",
        "genre": "RPG, Anime",
        "developer": "ATLUS",
        "publisher": "SEGA",
        "description": "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways! Prepare for the award-winning RPG experience in this definitive edition of Persona 5 Royal, featuring a wealth of downloadable content included!",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg?t=1783356822",
        "thumbnails": [
            "https://m.media-amazon.com/images/I/819o7LKSYsL._AC_UF1000,1000_QL80_.jpghttps://m.media-amazon.com/images/I/819o7LKSYsL._AC_UF1000,1000_QL80_.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_38d09e40dd56df43a1bb083dc94e27cb1360b526.1920x1080.jpg?t=1783356822",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_56f354736174fdb01b7b295b587ca72ca9254df7.1920x1080.jpg?t=1783356822",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_cfa96c0c9a983689b48cc679ddc63cfe373c2b9a.1920x1080.jpg?t=1783356822"
        ]
    },
    {
        "id": 2,
        "title": "Persona 4 Revival PS5",
        "price": "₱995.00",
        "genre": "RPG, Anime",
        "developer": "ATLUS",
        "publisher": "SEGA",
        "description": "A coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders.",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2963950/e83b7da1c2e9ddbed1a27038bd86e9714b2aa893/header.jpg?t=1787883430",
        "thumbnails": [
            "https://m.media-amazon.com/images/I/81TppnErrTL._AC_UF894,1000_QL80_.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963950/553029204f0bef1ba1bfd1542091b299fd8b9075/ss_553029204f0bef1ba1bfd1542091b299fd8b9075.1920x1080.jpg?t=1787883430",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963950/8a7ca2c4bcee42c742d4435d43bb965dea1a3b33/ss_8a7ca2c4bcee42c742d4435d43bb965dea1a3b33.1920x1080.jpg?t=1787883430",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963950/7273be1b6a0a1e762f56983a676e4235fc7bad49/ss_7273be1b6a0a1e762f56983a676e4235fc7bad49.1920x1080.jpg?t=1787883430"
        ]
    },
    {
        "id": 3,
        "title": "Persona 3 Reload PS5",
        "price": "₱3,495.00",
        "genre": "RPG, Anime",
        "developer": "ATLUS",
        "publisher": "SEGA",
        "description": "Step into the shoes of a transfer student thrust into an unexpected fate when entering the hour 'hidden' between one day and the next.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg",
        "thumbnails": [
            "https://m.media-amazon.com/images/I/81XeA4hpk+L._AC_SL1500_.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_f51fc26c627816bbd87011ca278b1fbbda2d6bc8.1920x1080.jpg?t=1764776430",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_8182ac626d22010c5e93e0bdfbd7b2d89860657a.1920x1080.jpg?t=1764776430",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_c123d3e9360f030e6600db27311586d033f65ff7.1920x1080.jpg?t=1764776430"
        ]
    },
    {
        "id": 4,
        "title": "Hollow Knight Nintendo Switch 2",
        "price": "₱490.00",
        "genre": "Action, Indie",
        "developer": "Team Cherry",
        "publisher": "Team Cherry",
        "description": "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
        "thumbnails": [
            "https://media.gamestop.com/i/gamestop/10174149-be099b16.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_62e10cf506d461e11e050457b08aa0e2a1c078d0.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_47f3523dbea462aff2ca4bc9f605faaf80a792b2.1920x1080.jpg?t=1776125684"
        ]
    },
    {
        "id": 5,
        "title": "Hollow Knight Silksong Nintendo Switch 2",
        "price": "₱490.00",
        "genre": "Action, Indie",
        "developer": "Team Cherry",
        "publisher": "Team Cherry",
        "description": "Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom ruled by silk and song!",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg",
        "thumbnails": [
            "https://m.media-amazon.com/images/I/71VIZBr9DjL._AC_UF894,1000_QL80_.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/26950369fe4b03c2268620eb9815c8a246aa0b06/ss_26950369fe4b03c2268620eb9815c8a246aa0b06.1920x1080.jpg?t=1776125736",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/09ccaa6c16f158f9df8298feb5d196098506a028/ss_09ccaa6c16f158f9df8298feb5d196098506a028.1920x1080.jpg?t=1776125736",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/856e33e755a0b9a785c645d116036516ea08812b/ss_856e33e755a0b9a785c645d116036516ea08812b.1920x1080.jpg?t=1776125736"
        ]
    },
    {
        "id": 6,
        "title": "Celeste Nintendo Switch",
        "price": "₱490.00",
        "genre": "Action, Indie",
        "developer": "Extremely OK Games, Ltd.",
        "publisher": "Extremely OK Games, Ltd.",
        "description": "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
        "thumbnails": [
            "https://www.shop-justforgames.us/cdn/shop/files/celeste-nintendo-switch-fangamer-380562_grande.png?v=1745855464",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_03bfe6bd5ddac7f747c8d2aa1a4f82cfd53c6dcb.1920x1080.jpg?t=1714089525",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_4b0f0222341b64a37114033aca9994551f27c161.1920x1080.jpg?t=1714089525",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_832ef0f27c3d6efdaa4b5d1cc896dce0999bc9e8.1920x1080.jpg?t=1714089525"
        ]
    },
    {
        "id": 7,
        "title": "Undertale Nintendo Switch",
        "price": "₱320.00",
        "genre": "RPG, Indie",
        "developer": "tobyfox",
        "publisher": "tobyfox",
        "description": "UNDERTALE! The RPG game where you don't have to destroy anyone.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg",
        "thumbnails": [
            "https://m.media-amazon.com/images/I/61Rbg4J7UJL._AC_SL1500_.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_6ded97a2c98473ac1e8a2b3c1419d93fb31b1186.1920x1080.jpg?t=1757349115",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_b9ec4c53a8ed37f764649c970757c0a1f4948ec1.1920x1080.jpg?t=1757349115",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_9025a366676c26046b1d08e94ab1a73406aa11db.1920x1080.jpg?t=1757349115"
        ]
    },
    {
        "id": 8,
        "title": "Geometry Dash PS5",
        "price": "₱130.00",
        "genre": "Action, Casual",
        "developer": "RobTop Games",
        "publisher": "RobTop Games",
        "description": "Jump and fly your way through danger in this rhythm-based action platformer!",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1775300400",
        "thumbnails": [
            "https://i.redd.it/how-would-you-react-if-the-game-came-to-console-v0-s3dfxiiys8ec1.jpg?width=1522&format=pjpg&auto=webp&s=4247999c001eb37802e10e4af11dd5651007891b",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_05cb182b93131a5faf0516232a7ad27c83f2c0e8.1920x1080.jpg?t=1775300400",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_0e841fa6622be28851d8aa9624bb0d727c533029.1920x1080.jpg?t=1775300400",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_8b81e998c1cf04d55aa4c40d2de8a933257c93e1.1920x1080.jpg?t=1775300400"
        ]
    },
    {
        "id": 9,
        "title": "Trails in the Sky Nintendo Switch 2",
        "price": "₱600.00",
        "genre": "RPG, Adventure",
        "developer": "Nihon Falcom",
        "publisher": "XSEED Games",
        "description": "Hailed as one of the largest, longest and most meticulously detailed turn-based JRPG series of all time, this first chapter sets the stage...",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3375780/header.jpg?t=1777572632",
        "thumbnails": [
            "https://s.pacn.ws/1/p/1d6/trails-in-the-sky-1st-chapter-885117.7.jpg?v=t1mvy1",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3375780/ss_64b82bed57876005ea52cb38f045e1244e1526f4.1920x1080.jpg?t=1777572632",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3375780/cce5437178465d4d930e475dd69dd379c77dba4b/ss_cce5437178465d4d930e475dd69dd379c77dba4b.1920x1080.jpg?t=1777572632",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3375780/0b0c14124beade271d8ecf516b4492ee839830c5/ss_0b0c14124beade271d8ecf516b4492ee839830c5.1920x1080.jpg?t=1777572632"
        ]
    },
    {
        "id": 10,
        "title": "Sonic Generations Xbox 360",
        "price": "₱995.00",
        "genre": "Action, Platformer",
        "developer": "SEGA",
        "publisher": "SEGA",
        "description": "Celebrate 20 years of Sonic the Hedgehog in Sonic Generations! The definitive experience for Sonic fans new and old.",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/header.jpg",
        "thumbnails": [
            "https://store-images.s-microsoft.com/image/apps.41135.65073350744326613.2438d22a-cff2-4322-9aee-cf908b18399e.5b53a790-a792-416f-bdff-eac7ad7fe85c",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/ss_ddeb53d017933cd4d044f1d25384252fd741f69a.1920x1080.jpg?t=1762752644",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/ss_f25e6c424073bac81756fe00bdac2b9dba216e89.1920x1080.jpg?t=1762752644",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/71340/ss_b678e5f9b8f9aced858c690ad1b87605f0fd2271.1920x1080.jpg?t=1762752644"
        ]
    }
]);

  const getGameById = (id) => {
    return games.find(g => g.id === parseInt(id));
  };

    const addToCart = (game, quantity) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === game.id);

            if (existingItem) {
                return currentItems.map(item => (
                    item.id === game.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                ));
            }

            return [...currentItems, { ...game, quantity }];
        });
    };

    const removeFromCart = (gameId) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === gameId);
            if (existingItem && existingItem.quantity > 1) {
                return currentItems.map(item => 
                    item.id === gameId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return currentItems.filter(item => item.id !== gameId);
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

  return (
        <GameContext.Provider value={{ games, getGameById, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </GameContext.Provider>
  );
};
