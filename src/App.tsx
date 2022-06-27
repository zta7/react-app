import { MusicBar } from './components/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
const music = new Music()
const config = new Config()

const App = () => (
  <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
    <LeftDrawer />
    <MusicBar music={music} config={config}/>
  </Box>
)

export default App
