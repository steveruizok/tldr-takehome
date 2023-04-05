import { EmojiPicker } from "./Components/Emoji-Picker";
import { Canvas } from "./Components/Canvas";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [rotation, setRotation] = useState(0);

  const trash = "🗑";

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setRotation(randomRotation());
  };

  const handleSpaceBar = (e) => {
    if (e.key === "Spacebar") {
      setRotation(randomRotation());
    }
  };

  const randomRotation = () => {
    const min = -15;
    const max = 15;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="App" onKeyDown={handleSpaceBar}>
      <Canvas
        selectedEmoji={selectedEmoji}
        trash={trash}
        rotation={rotation}
        setRotation={setRotation}
        randomRotation={randomRotation}
        offset={offset}
      />

      <EmojiPicker
        selectedEmoji={selectedEmoji}
        setSelectedEmoji={setSelectedEmoji}
        handleEmojiClick={handleEmojiClick}
        trash={trash}
      />
    </div>
  );
}

export default App;
