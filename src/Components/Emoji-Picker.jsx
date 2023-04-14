import React from "react";
export function EmojiPicker({
  selectedEmoji,
  setSelectedEmoji,
  handleEmojiClick,
  trash,
}) {
  const emojis = ["🌟", "🔥", "💝", "👍", "👎"];

  const handleTrashClick = () => {
    setSelectedEmoji(trash);
  };

  return (
    <div className="emoji-picker">
      <div>
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className={`emoji-btn ${selectedEmoji === emoji && " selected"}`}
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
      <div>
        <button
          className={`emoji-btn ${selectedEmoji === trash && " selected"}`}
          onClick={() => handleTrashClick(trash)}
        >
          {trash}
        </button>
      </div>
    </div>
  );
}
