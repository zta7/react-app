import { MusicBar } from './components/Bar/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
import { UserMenu } from './components/Menu/UserMenu'
// import { TestReact } from './components/TestReact'

const music = new Music()
const config = new Config()

const App = () => {
  // const [visible] = useState(true)
  // const navigate = useNavigate()
  // const location = useLocation()
  console.log('App')
  // console.log(location)
  return <Box sx={{
    width: '100vw', height: '100vh', overflow: 'hidden',
  }}>
    <Box sx={{
      display: 'flex', position: 'fixed', bottom: 90, top: 0, left: 0, right: 0,
    }}>
      <LeftDrawer />
      <Container maxWidth={false} sx={{ transform: 'translateX(0)' }}>
        <AppBar position="fixed" sx={{
          height: 60, boxShadow: 0, display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'space-between', py: 0,
        }} color="inherit" component={CardContent} >
          <Box>
            <IconButton disableRipple
                sx={{ p: 0, mr: 1 }} >
              <Icon fontSize="large">keyboard_arrow_left</Icon>
            </IconButton>
            <IconButton disableRipple
                sx={{ p: 0 }} >
              <Icon fontSize="large">keyboard_arrow_right</Icon>
            </IconButton>
          </Box>
          <Box>
            {/* <TextField
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
                variant="outlined"/> */}
          </Box>
          <Box>
            <UserMenu />
          </Box>
        </AppBar>
        <Box sx={{
          overflowY: 'auto', position: 'fixed', left: 0, right: 0, bottom: 0, top: 60,
        }}>
          <Outlet />
        </Box>
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
