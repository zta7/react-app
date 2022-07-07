import { rootContext } from 'src/store'
import { Music } from 'src/models/Music'

interface Props {
  music: Music
}

// const CoverProps = {
//   sx: {
//     position: 'relative', transition: 'all .25s ease-in-out',
//   },
// }

export const MusicItem = observer(({ music }: Props) => {
  const {
    title, artists, isLiked,
  } = music
  const $store = useContext(rootContext)
  return (
    <Stack direction="row" alignItems="center" spacing={2}
        sx={{ transform: !$store.a ? 'translateX(-72px)' : 'translateX(0)', transition: 'all .25s ease-in-out' }}>
      <Box sx={{ position: 'relative' }} >
        <Icon sx={{
          position: 'absolute', right: 0, top: 0, zIndex: 9999,
        }} className="hvr-grow" onClick={(evt) => $store.toogle('a', evt)}>expand_less</Icon>
        <Avatar src="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" variant="square"
            sx={{ height: '100%', aspectRatio: '1/1' }}>
        </Avatar>
      </Box>
      <Stack>
        <Typography variant="subtitle2" noWrap>
          <span>{ title }</span>
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.2}>
          <Avatar sx={{
            width: 14, height: 14, fontSize: '12px', mr: 0.5,
          }} variant="square">E</Avatar>
          {
          artists.map((e, i, arr) => (
            <Typography key={e} variant="caption" fontSize={10} noWrap>
              <span>{ e }</span>
              {
                i !== arr.length - 1
                && <span>,</span>
              }
            </Typography>
          ))
        }

        </Stack>
      </Stack>
      <div onClick={() => music.toogle('isLiked')}>
        {
        isLiked ? <FavoriteBorderIcon /> : <FavoriteIcon color="secondary"/>
      }
      </div>
    </Stack>
  )
})
