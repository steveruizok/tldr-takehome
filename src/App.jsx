import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {

  const emojiRef = useRef(null);
  const canvasRef = useRef(null);

  const [selected, setSelected] = useState(false);


  const emojis = ['🌟', '🔥', '💝', '👍', '👎']

  const handleCursorMove = (event) => {
    const { clientX, clientY } = event;
  }

  useEffect(() => {

    const emoji = emojiRef.current;
    const canvas = canvasRef.current;

    const onMouseDown = (e) => {
      if(!selected) return setSelected(true);
      else {setSelected(false)};
    }
    const onMouseMove = (e) => {
      if (!selected) return;
      emoji.style.position = 'absolute';
      emoji.style.top = `${e.clientY}px`;
      emoji.style.left = `${e.clientX}px`;
    }

    emoji.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mousemove', onMouseMove)

    const cleanup = () => {
      emoji.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove)
    }

    return cleanup;
  }, [selected])

  return (
    <>
    <main ref={canvasRef} className="Canvas" onMouseMove={handleCursorMove}>
    
    </main>
    <footer className="Footer">
    <span ref={emojiRef} className="emoji">&#128513;</span>

    {emojis.map((emoji) => (
      <button className='emoji-btn'>
        {emoji}
      </button>
    ))}
    </footer>
    </>
  )
}

export default App
