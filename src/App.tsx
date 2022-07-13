import { createContext } from 'react'
import SimpleBar from 'simplebar-react'
import { MusicBar } from './components/Bar/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
import { UserMenu } from './components/Menu/UserMenu'
// import { TestReact } from './components/TestReact'

const music = new Music()
const simplebarRef = createRef<SimpleBar>()
// eslint-disable-next-line max-len
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
  return (
    <Box className="app">
      <Stack className="navbar" direction="row">
        <LeftDrawer />
        <Divider orientation="vertical"/>
      </Stack>
      <Box className="main" sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 0,
        boxShadow: 0,
        zIndex: 9999,
        position: 'sticky',
        top: 0,
        height: headerHeight,
      }}>
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
      </Box>
      <Box className="main relative-position">
        <Box className="absolute-full" >
          <SimpleBar style={{ maxHeight: '100%' }} ref={simplebarRef}>
            <SimplebarRefContext.Provider value={simplebarRef}>
              <Box>
                {
                  mounted && <Outlet />
                }
              </Box>
            </SimplebarRefContext.Provider>
          </SimpleBar>
        </Box>
      </Box>
      <Box className="footer">
        <MusicBar music={music} />
      </Box>
    </Box>)
}

export { SimplebarRefContext }
export default App
