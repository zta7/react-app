import { MusicBar } from './components/Bar/MusicBar'
import { LeftDrawer } from './components/LeftDrawer'
import { UserMenu } from './components/Menu/UserMenu'
// import { TestReact } from './components/TestReact'

const music = new Music()

const App = () => {
  console.log('App')
  const headerHeight = 70
  return <Box className="app">
    <Stack className="navbar" direction="row">
      <LeftDrawer />
      <Divider orientation="vertical"/>
    </Stack>
    <Box className="main relative-position" sx={{ overflowY: 'auto' }}>
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
      <Box className="relative-position">
        <Outlet />
        {/* <Box sx={{ height: headerHeight }} /> */}
      </Box>
    </Box>
    <Box className="footer">
      <MusicBar music={music} />
    </Box>
  </Box>
}

export default App
