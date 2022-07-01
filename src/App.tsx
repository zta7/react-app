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
      <Container maxWidth={false} sx={{ transform: 'translateX(0)' }}>
        <AppBar position="fixed" sx={{
          height: 60, boxShadow: 0, display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', py: 0,
        }} color="inherit" component={CardContent} >
          <TextField
              size="small"
              color="primary"
              focused
              InputProps={{
                startAdornment: (
                  <SearchIcon />
                ),
                endAdornment: (
                  <CloseIcon sx={{ cursor: 'pointer' }}/>
                ),
              }}
              variant="outlined"/>
          <Box sx={{ alignSelf: 'end' }}>123</Box>
        </AppBar>
        <Box sx={{
          overflowY: 'scroll', position: 'fixed', left: 0, right: 0, bottom: 0, top: 60,
        }}>
          <Outlet />
        </Box>
        {/* <TextField
            size="small"
            color={undefined}
            focused
            InputProps={{
              startAdornment: (
                <SearchIcon />
              ),
              endAdornment: (
                <CloseIcon sx={{ cursor: 'pointer' }}/>
              ),
            }}
            variant="outlined"/> */}
      </Container>
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
