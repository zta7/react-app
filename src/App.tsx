import { MusicBar } from './components/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
// import { TestReact } from './components/TestReact'

const music = new Music()
const config = new Config()

const App = () => {
  // const [visible] = useState(true)
  console.log(1)
  return <Box sx={{
    width: '100vw', height: '100vh', display: 'flex', flexFlow: 'column nowrap', overflow: 'hidden',
  }}
         >
    <Box sx={{ flex: '1 0 auto', display: 'flex' }}>
      <LeftDrawer />
      {/* {visible && <TestReact />} */}
      <Outlet />
    </Box>
    <Divider/>
    <MusicBar music={music} config={config}/>
  </Box>
}

export default App
