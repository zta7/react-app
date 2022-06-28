import { RouterProps } from "react-router";

// const list1 = []
const list1 = [
  // { icon: <HomeIcon />, label: 'Home', id: 'a1', to: '/home', link: (props: any) => {
  //   const { to } = props
  //   console.log(to)
  //   return useMemo(
  //     () =>
  //       forwardRef<HTMLAnchorElement, Omit<any, 'to'>>(function Link(
  //         LinkProps,
  //         ref,
  //       ) {
  //         return <NavLink ref={ref} to={to} {...LinkProps } />;
  //       }),
  //     [to],
  //   );
  // }},
  { icon: <SearchIcon />, label: 'Search', id: 'a2', link: <NavLink to='/home2' /> },
  // { icon: <VideoLibraryIcon />, label: 'Your Library', id: 'a3', link: (props: any) => <NavLink to='/home3' {...props}/> }
]
const list2 = [
  { icon: <AddCircleIcon/>, label: 'Create Playlist', id: 'b1', },
  { icon: <FavoriteIcon/>, label: 'Liked Songs', id: 'b2' },
  { icon: <AlbumIcon/>, label: 'Your Episode', id: 'b3' }
]

const list3 = [
  {  label: '2021年你的最爱歌曲', id: 'c1'  },
  {  label: 'Asmr Licking', id: 'c2'},
  {  label: 'Long Long Long Long Long Long Long Long Long Long Long Long', id: 'c3' }
]

const itemButtonSx = {
  '&:hover': { 
    background: 'none',
    color: 'grey'
  } 
}

const listSx = {
  minWidth: 50,
  maxWidth: 200,
  p: 0,
}

const textSx = {
  fontWeight: 700, 
  fontSize: 14,
  overflow: 'hidden',
  // whiteSpace: 'nowrap',
  noWrap: true,
  textOverflow: 'ellipsis'
}

export const LeftDrawer = () => {
  return <Stack direction="row">
  <List sx={{ ...listSx }} dense>
    {
      list1.map(item => {
        return <ListItemButton key={ item.id } disableRipple>
            <ListItemIcon sx={{ minWidth: 40 }}>
              { item.icon }
            </ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ ...textSx  }} />
        </ListItemButton>
      })
    }
    <Box sx={{ height: 20 }}></Box>
    {
      list2.map(item => {
        return <ListItemButton key={ item.id } disableRipple>
          <ListItemIcon sx={{ minWidth: 40 }}>
            { item.icon }
          </ListItemIcon>
          <ListItemText primary={item.label} primaryTypographyProps={{ ...textSx }}/>
          {/* <DownloadingIcon sx={{ fontSize: 16 }}/> */}
        </ListItemButton>
      })
    }
    <Divider variant='middle'/>
    {
      list3.map(item => {
        return <ListItemButton key={ item.id } disableRipple>
          <ListItemText primary={item.label} primaryTypographyProps={{ ...textSx  }} />
        </ListItemButton>
      })
    }
  </List>
  <Divider orientation='vertical' flexItem/>
</Stack>
}