import { Music } from '../models/Music'

interface Props {
  music: Music
}

export const MusicItem = observer(({ music }: Props) => {
  const {
    title, artists, isLiked,
  } = music
  return <Stack direction="row" alignItems="center" spacing={2}>
    <Avatar variant="square">H</Avatar>
    <Stack>
      <Typography variant="subtitle2">
        <Link href="#" underline="hover" >{ title }</Link>
      </Typography>
      <Stack direction="row" alignItems="center" spacing={0.2}>
        <Avatar sx={{
          width: 14, height: 14, fontSize: '12px', mr: 0.5,
        }} variant="square"
        >E</Avatar>
        {
          artists.map((e, i, arr) => (
            <Typography key={e} variant="caption" fontSize={10}>
              <Link href="#" underline="hover" >{ e }</Link>
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
