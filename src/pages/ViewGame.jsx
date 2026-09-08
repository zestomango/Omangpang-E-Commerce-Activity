import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';
import '../css/Register.css'; 

const ViewGame = () => {
  const { id } = useParams();
  const { getGameById } = useGameContext();
  const passedGame = getGameById(id);

  const gameData = {
    title: passedGame?.title || "Persona 5 Royal",
    headerImage: passedGame?.image || "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
    reviews: "4,521 Reviews",
    developer: passedGame?.developer || "ATLUS",
    publisher: passedGame?.publisher || "SEGA",
    description: passedGame?.description || "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways! Prepare for the award-winning RPG experience in this definitive edition of Persona 5 Royal, featuring a wealth of downloadable content included!",
    price: passedGame?.price || "₱2,995.00",
    thumbnails: passedGame?.thumbnails || [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_8e3c15383f9829f2da541fb0c2cc5be351bc29f1.600x338.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_40ba4ba99351e39b9779df3f58a8f158529e92b3.600x338.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_16a3fa99047970dcd765fc214ed03a116bc923ce.600x338.jpg",
    ]
  };

  const [activeImage, setActiveImage] = useState(gameData.thumbnails[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ padding: '3rem 2rem', color: '#c6d4df', minHeight: 'calc(100vh - 72px)', background: '#1b2838' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
        
        <div style={{ 
            flex: 1, 
            background: '#171a21', 
            padding: '2rem', 
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}>
            {/* Main Image */}
            <div style={{ width: '100%', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                {activeImage?.type === 'video' ? (
                    <video 
                        src={activeImage.url}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}
                    />
                ) : (
                    <img 
                        src={typeof activeImage === 'string' ? activeImage : activeImage?.url}
                        alt={gameData.title}
                        style={{ width: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}
                    />
                )}
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {gameData.thumbnails.map((thumb, idx) => {
                    const thumbUrl = typeof thumb === 'string' ? thumb : (thumb.thumbnail || thumb.url);
                    const isVideo = typeof thumb === 'object' && thumb.type === 'video';
                    const isActive = activeImage === thumb;
                    return (
                        <div 
                            key={idx}
                            onClick={() => setActiveImage(thumb)}
                            style={{ position: 'relative', cursor: 'pointer', flexShrink: 0 }}
                            onMouseOver={(e) => { if(!isActive) e.currentTarget.firstChild.style.borderColor = '#8f98a0' }}
                            onMouseOut={(e) => { if(!isActive) e.currentTarget.firstChild.style.borderColor = 'transparent' }}
                        >
                            <img 
                                src={thumbUrl}
                                alt="thumbnail"
                                style={{
                                    height: '110px',
                                    border: isActive ? '2px solid #ffffff' : '2px solid transparent',
                                    borderRadius: '2px',
                                    transition: 'border-color 0.2s ease',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                            {isVideo && (
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '50%', left: '50%', 
                                    transform: 'translate(-50%, -50%)', 
                                    pointerEvents: 'none',
                                    background: 'rgba(0,0,0,0.6)',
                                    borderRadius: '50%',
                                    width: '32px', height: '32px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '14px'
                                }}>
                                    ▶
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

        
        <div style={{ 
            width: '550px',
            background: '#171a21',
            padding: '2rem',
            borderRadius: '4px',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <img 
                src={gameData.headerImage} 
                alt={gameData.title} 
                style={{ width: '100%', borderRadius: '4px', marginBottom: '1.5rem', display: 'block', objectFit: 'cover' }} 
            />

            <h1 style={{ color: '#ffffff', fontSize: '2rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
                {gameData.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#66c0f4' }}>
                ★★★★☆ <span style={{ color: '#8f98a0', fontSize: '0.9rem' }}>{gameData.reviews}</span>
            </div>

            <div style={{ display: 'inline-block', background: '#a4d007', color: '#4c6b22', fontWeight: 'bold', padding: '0.2rem 0.5rem', borderRadius: '2px', fontSize: '0.8rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                {gameData.badge}
            </div>

            <div style={{ display: 'flex', gap: '1rem', color: '#8f98a0', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <span>DEVELOPER: <span style={{ color: '#66c0f4' }}>{gameData.developer}</span></span>
                <span>|</span>
                <span>PUBLISHER: <span style={{ color: '#66c0f4' }}>{gameData.publisher}</span></span>
            </div>

            <p style={{ color: '#c6d4df', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1rem' }}>
                {gameData.description}
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #323f4c', marginBottom: '2rem' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ color: '#8f98a0' }}>Price:</span>
                <span style={{ color: '#ffffff', fontSize: '1.8rem', fontWeight: 'bold' }}>{gameData.price}</span>
            </div>


            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ color: '#8f98a0' }}>Quantity:</span>
                <div style={{ display: 'flex', border: '1px solid #323f4c', borderRadius: '4px', overflow: 'hidden' }}>
                    <button 
                        style={{ background: '#323f4c', color: '#ffffff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                        -
                    </button>
                    <div style={{ background: '#1b2838', color: '#ffffff', padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {quantity}
                    </div>
                    <button 
                        style={{ background: '#323f4c', color: '#ffffff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
            </div>

            <button style={{
                width: '100%',
                padding: '1rem',
                border: 'none',
                borderRadius: '4px',
                background: 'linear-gradient(135deg, #2796c9 0%, #1b6389 100%)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(135deg, #3bb3eb 0%, #227ca8 100%)'}
            onMouseOut={(e) => e.target.style.background = 'linear-gradient(135deg, #2796c9 0%, #1b6389 100%)'}
            >
                Add to cart
            </button>
        </div>

      </div>
    </div>
  );
};

export default ViewGame;
