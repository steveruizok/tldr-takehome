import { useEffect, useRef } from 'react'
import './App.css'
import { emojis } from './assets/emojis'

function App() {

  const emojiRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!emojiRef.current || !canvasRef.current) return; 

    const emoji = emojiRef.current;
    const canvas = canvasRef.current;

    const onMouseDown = () => {
      console.log('clicked');
    }

    emoji.addEventListener('mousedown', onMouseDown)

    const cleanup = () => {
      emoji.removeEventListener('mousedown', onMouseDown);
    }

    return cleanup;
  }, [])

  return (
    <>
    <main ref={canvasRef} className="Canvas"></main>
    <footer className="Footer">
    <span ref={emojiRef} className="emoji">&#128513;</span>
    {/* {emojis.map(emoji => (
    <span ref="emojiRef" className="emoji" title={`&#${emoji};`}>{String.fromCodePoint(emoji)}</span>))} */}
    </footer>
    </>
  )
}

export default App
