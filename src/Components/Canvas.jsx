import React from "react";
import { useState } from "react";

export function Canvas({
  selectedEmoji,
  trash,
  rotation,
  setRotation,
  offset,
  randomRotation,
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [stickers, setStickers] = useState([]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX - offset, y: clientY - offset });
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

  const handleDelete = (index) => {
    if (selectedEmoji === trash) {
      setStickers(stickers.filter((_, stickerIndex) => stickerIndex !== index));
    }
  };

  return (
    <div
      className={`canvas ${selectedEmoji === trash ? " delete-mode" : ""}`}
      onClick={handleCanvasClick}
      onMouseMove={handleMouseMove}
    >
      {selectedEmoji !== trash && (
        <span
          className="cursor-emoji"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {selectedEmoji}
        </span>
      )}
      {stickers.map((sticker, index) => (
        <span
          key={index}
          onClick={() => handleDelete(index)}
          className="sticker"
          style={{
            left: sticker.x - offset,
            top: sticker.y - offset,
            transform: `rotate(${sticker.rotation}deg)`,
          }}
        >
          {sticker.emoji}
        </span>
      ))}
    </div>
  );
}
