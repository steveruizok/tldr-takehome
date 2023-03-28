import './App.css'
import { emojis } from './assets/emojis'

function App() {

  return (
    <>
    <main className="Canvas"></main>
    <footer className="Footer">
    {emojis.map(emoji => (
    <span className="emoji" title={`&#${emoji};`}>{String.fromCodePoint(emoji)}</span>))}
    </footer>
    </>
  )
}

export default App
