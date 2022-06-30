import { PlayList } from '../models/PlayList'

interface Props {
  playList: PlayList
}

const PauseIconProps = {
  sx: {
    color: 'success.main', mr: 1, borderRadius: 5, fontSize: 40,
  },
}

const PlayArrowIconProps = {
  sx: {
    color: 'success.main', mr: 1, borderRadius: 5, visibility: 'hidden', fontSize: 40,
  },
  className: 'PlayArrowIcon animate__fadeIn animate__fadeOut',
}

const CardSx = [
  {
    '&': {
      cursor: 'pointer',
      ':hover': {
        '.PlayArrowIcon': {
          visibility: 'visible',
        },
      },
    },
  },
]

export const PlayListCard = observer(({ playList }: Props) => {
  const {
    title, isPlaying,
  } = playList
  return <Stack
      direction="row" alignItems="center" justifyContent="space-between" component={Card} sx={CardSx}>
    <CardMedia
        component="img"
        sx={{ width: 90 }}
        image="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg"/>
    <Typography className={'ellipsis-2-lines break-all'} sx={{ px: 1, flexGrow: 1 }} >
      { title }
    </Typography>
    {
      isPlaying
        ? <PauseIcon {...PauseIconProps} onClick={() => playList.pause()} />
        : <PlayArrowIcon {...PlayArrowIconProps} onClick={() => playList.play()}/>

    }
  </Stack>
})
