// const list1 = []
const list1 = [
  { icon: <HomeIcon />, label: 'Home' },
  { icon: <SearchIcon />, label: 'Search' },
  { icon: <VideoLibraryIcon />, label: 'Your Library' }
]
const list2 = [
  { icon: <AddCircleIcon/>, label: 'Create Playlist' },
  { icon: <FavoriteIcon/>, label: 'Liked Songs' },
  { icon: <AlbumIcon/>, label: 'Your Episode' }
]

export const LeftDrawer = () => {
  return <Drawer variant='persistent' open
    sx={{
      width: 200,
      // flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 200,
      },
    }}
  >
  <List sx={{ p: 0 }}>
    {
      list1.map(item => {
        return <ListItem key={ item.label } >
          <ListItemIcon>
            { item.icon }
          </ListItemIcon>
          <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700, fontSize: 14 }} />
        </ListItem>
      })
    }
    <div style={{ height: '20px' }}></div>
    {
      list2.map(item => {
        return <ListItem key={ item.label }>
          <ListItemIcon>
            { item.icon }
          </ListItemIcon>
          <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700, fontSize: 14 }} />
        </ListItem>
      })
    }
    <Divider variant='middle'/>
  </List>
</Drawer>
}