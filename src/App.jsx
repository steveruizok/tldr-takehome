import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [stickers, setStickers] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})

  const emojiRef = useRef(null);
  const canvasRef = useRef(null);

  const offset = 18;

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleCanvasClick = (event) => {
    if (selectedEmoji) {
      const { clientX, clientY } = event;
      const newSticker = {
        emoji: selectedEmoji,
        x: clientX,
        y: clientY,
      };
      setStickers([...stickers, newSticker]);
    }
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX - offset, y: clientY - offset });
  };

  const handleTrashClick = (event) => {
    setSelectedEmoji(null);
  }
  const handleDelete = (index) => {
    if (selectedEmoji === null){
      setStickers(stickers.filter((_, stickerIndex) => stickerIndex !== index));
    }
  }

  return (
    <div className="App">
    <div ref={canvasRef} className="canvas" onClick={handleCanvasClick} onMouseMove={handleMouseMove}>
    {selectedEmoji && (
          <span
            className="cursor-emoji"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
          >
            {selectedEmoji}
          </span>
        )}
      {stickers.map((sticker, index) => (
        <span
          ref={emojiRef}
          key={index}
          onClick={() => handleDelete(index)}
          className="sticker"
          style={{ left: sticker.x - offset, top: sticker.y - offset}}
        >
          {sticker.emoji}
        </span>
      ))}
    </div>
    <div className="emoji-picker">
      {emojis.map((emoji, index) => (
        <button
          key={index}
          className={`emoji-btn${selectedEmoji === emoji ? ' selected' : ''}`}
          onClick={() => handleEmojiClick(emoji)}
        >
          {emoji}
        </button>
      ))}
      <button onClick={handleTrashClick}>
        🗑
      </button>
    </div>
  </div>
  )
}

export default App
