import { useEffect, useRef } from 'react'
import './App.css'
import { emojis } from './assets/emojis'

function App() {

  const emojiRef = useRef(null);
  const canvasRef = useRef(null);

  const isClicked = useRef(false);

  useEffect(() => {
    if (!emojiRef.current || !canvasRef.current) return; 

    const emoji = emojiRef.current;
    const canvas = canvasRef.current;

    const onMouseDown = (e) => {
      if (!isClicked.current) return isClicked.current = true
      else {isClicked.current = false}
    }
    const onMouseMove = (e) => {
      if (!isClicked.current) return;

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
  }, [])

  return (
    <>
    <main ref={canvasRef} className="Canvas">
    <span ref={emojiRef} className="emoji emoji--active">&#128513;</span>

</main>
    <footer className="Footer">
    {/* {emojis.map(emoji => (
    <span ref="emojiRef" className="emoji" title={`&#${emoji};`}>{String.fromCodePoint(emoji)}</span>))} */}
    </footer>
    </>
  )
}

export default App
