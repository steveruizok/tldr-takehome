import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [stickers, setStickers] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
  const [rotation, setRotation] = useState(0);



  const offset = 18;
  const emojis = ['🌟', '🔥', '💝', '👍', '👎']
  const trash = '🗑';

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setRotation(randomRotation());
  };

  const handleCanvasClick = (event) => {
    if (selectedEmoji !== trash) {
      const { clientX, clientY } = event;
      const newSticker = {
        emoji: selectedEmoji,
        x: clientX,
        y: clientY,
        rotation: rotation,
      };
      setStickers([...stickers, newSticker]);
    }
    setRotation(randomRotation());
  };

  const randomRotation = () => {
    const min = -15;
    const max = 15;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX - offset, y: clientY - offset});
  };

  const handleTrashClick = () => {
    setSelectedEmoji(trash);
  }
  const handleDelete = (index) => {
    if (selectedEmoji === trash){
      setStickers(stickers.filter((_, stickerIndex) => stickerIndex !== index));
    }
  }

  const handleSpaceBar = (e) => {
    if (e.key === 'Spacebar'){
      setRotation(randomRotation());
    }
  }

  return (
    <div className="App" onKeyDown={handleSpaceBar}>
    <div
    className="canvas" 
    onClick={handleCanvasClick} 
    onMouseMove={handleMouseMove}>
    {selectedEmoji !== trash && (
          <span
            className="cursor-emoji"
            style={{ left: cursorPosition.x, top: cursorPosition.y, transform: `rotate(${rotation}deg)`}}
          >
            {selectedEmoji}
          </span>
        )}
      {stickers.map((sticker, index) => (
        <span
          key={index}
          onClick={() => handleDelete(index)}
          className="sticker"
          style={{ left: sticker.x - offset, top: sticker.y - offset, transform: `rotate(${sticker.rotation}deg)`}}
        >
          {sticker.emoji}
        </span>
      ))}
    </div>
    <div className="emoji-picker">
      <div>
        {emojis.map((emoji, index) => (
        <button
          key={index}
          className={`emoji-btn${selectedEmoji === emoji ? ' selected' : ''}`}
          onClick={() => handleEmojiClick(emoji)}
        >
          {emoji}
        </button>
      ))}
      </div>
      <div>
      <button className={`emoji-btn${selectedEmoji === trash ? ' selected' : ''}`} onClick={() => handleTrashClick(trash)}>
        {trash}
      </button> 
      </div>
      
    </div>
  </div>
  )
}

export default App
