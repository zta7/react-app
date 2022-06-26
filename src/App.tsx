import { MusicBar } from './components/MusicBar'

const music = new Music()
const config = new Config()

const App = () => (
  <div className="App">
    <MusicBar music={music} config={config}/>
  </div>
)

export default App
