import { Music } from '../models/Music'

interface Props {
  music: Music
}

export const MusicItem = observer(({ music }: Props) => {
  const {
    title, artists, isLiked,
  } = music
  return <Stack direction="row" alignItems="center" spacing={2}>
    <Box sx={{ position: 'relative' }}>
      <Icon sx={{
        position: 'absolute', right: 0, top: 0, zIndex: 9999,
      }}>expand_less</Icon>
      <Avatar src="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" variant="square"
          sx={{ width: 55, height: 55 }}>
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
})
