import { MusicBar } from './components/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
// import { TestReact } from './components/TestReact'

const music = new Music()
const config = new Config()

const App = () => {
  // const [visible] = useState(true)
  console.log(1)
  return <Box sx={{
    width: '100vw', height: '100vh', overflow: 'hidden',
  }}>
    <Box sx={{
      display: 'flex', position: 'fixed', bottom: 90, top: 0, left: 0, right: 0,
    }}>
      <LeftDrawer />
      <Outlet />
    </Box>
    <Box sx={{
      height: 90, position: 'fixed', left: 0, bottom: 0, right: 0,
    }}>
      <Divider />
      <MusicBar music={music} config={config} />
    </Box>
  </Box>
}

export default App
