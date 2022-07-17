import { createContext } from 'react'
import SimpleBar from 'simplebar-react'
// import { createTheme, ThemeProvider } from '@mui/material'
import { MusicBar } from './components/Bar/MusicBar'
// import { BgBox } from './components/Box/BgBox'
import { LeftDrawer } from './components/LeftDrawer'
import { UserMenu } from './components/Menu/UserMenu'
import { Music } from './models/Music'
import { MuiThemeProvider } from './theme'
// import { TestReact } from './components/TestReact'

const music = new Music()
const simplebarRef = createRef<SimpleBar>()
const SimplebarRefContext = createContext(simplebarRef)

const App = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const location = useLocation()

  useEffect(() => {
    if (simplebarRef.current) {
      const scrollEl = simplebarRef.current.getScrollElement()
      scrollEl.scrollTop = 0
    }
  }, [location])

  const headerHeight = 64
  // const theme = useMemo(
  //   () => createTheme({
  //     palette: {
  //       mode: 'dark',
  //     },
  //   }),
  //   [],
  // )

  return (
    <MuiThemeProvider>
      <Box className="app">
        <Stack className="navbar" direction="row" sx={{ minHeight: 0 }}>
          <LeftDrawer />
          <Divider orientation="vertical"/>
        </Stack>
        <Paper className="main relative-position" square>
          <Box className="absolute-full" >
            <SimpleBar style={{ maxHeight: '100%' }} ref={simplebarRef}>
              <SimplebarRefContext.Provider value={simplebarRef}>
                <CardContent sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: 0,
                  zIndex: 9999,
                  position: 'sticky',
                  top: 0,
                  height: headerHeight,
                }}>
                  <Box>
                    <Icon fontSize="large" sx={{ bgcolor: 'red', borderRadius: 5, mr: 1 }}>keyboard_arrow_left</Icon>
                    <Icon fontSize="large" sx={{ bgcolor: 'red', borderRadius: 5 }}>keyboard_arrow_right</Icon>
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
                </CardContent>
                <Box>
                  {
                  mounted && <Outlet />
                }
                </Box>
              </SimplebarRefContext.Provider>
            </SimpleBar>
          </Box>
        </Paper>
        <Box className="footer">
          <MusicBar music={music} />
        </Box>
      </Box>
    </MuiThemeProvider>
  )
}

export { SimplebarRefContext }
export default App
