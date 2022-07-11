import { createContext, RefObject } from 'react'
import SimpleBar from 'simplebar-react'
import { MusicBar } from './components/Bar/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
import { UserMenu } from './components/Menu/UserMenu'
// import { TestReact } from './components/TestReact'

const music = new Music()
const scrollAreaRef = createRef()
interface ContextProps {
  scrollAreaRef: RefObject<unknown>
}
const PageContext = createContext<ContextProps>({
  scrollAreaRef,
})

console.log(PageContext)

const App = () => {
  console.log('App')
  const headerHeight = 70
  return <Box className="app">
    <Stack className="navbar" direction="row">
      <LeftDrawer />
      <Divider orientation="vertical"/>
    </Stack>
    <Box className="main relative-position">
      <Box className="absolute-full" >
        <SimpleBar autoHide style={{ maxHeight: '100%' }} scrollableNodeProps={{ ref: scrollAreaRef }}>
          <Box sx={{ px: 4 }}>
            <Box sx={{
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
            <PageContext.Provider value={{ scrollAreaRef }}>
              <Outlet />
            </PageContext.Provider>
          </Box>
        </SimpleBar>
      </Box>
    </Box>
    <Box className="footer">
      <MusicBar music={music} />
    </Box>
  </Box>
}

export { PageContext }
export default App
