import { SystemProps } from '@mui/system'
import { PlayList } from '../models/PlayList'

interface Props {
  playList: PlayList
  direction: string
}

const PauseIconProps = {
  sx: {
    color: 'success.main', mr: 1, borderRadius: 5, fontSize: 40,
  },
}

const PlayArrowIconProps = {
  sx: {
    color: 'success.main', mr: 1, borderRadius: 5, opacity: 0, fontSize: 40, transition: 'all .25s ease-in-out',
  },
  className: 'PlayArrowIcon animate__fadeIn animate__fadeOut',
}

const CardProps = (direction: string) => {
  const sx = {
    transition: 'all .25s ease-in-out',
    '&': {
      cursor: 'pointer',
      ':hover': {
        bgcolor: 'text.primary',
        color: 'white',
        boxShadow: 2,
        '.PlayArrowIcon': {
          opacity: 1,
        },
      },
    },
  } as SystemProps

  if (direction === 'column') sx.p = 2

  return {
    sx,
  }
}

const CardMediaProps = (direction: string) => {
  if (direction === 'column') {
    return {
      sx: { aspectRatio: '1/1', width: '100%' },
    }
  }
  return {
    sx: { width: 70, height: 70 },
  }
}

const CardBoxProps = (direction: string) => {
  const sx = {
    flexGrow: 1,
  } as SystemProps

  if (direction === 'row') sx.px = 2
  if (direction === 'column') sx.py = 2; sx.alignSelf = 'start'

  return {
    sx,
  }
}

export const PlayListCard = observer(({ playList, direction = 'column' }: Props) => {
  const {
    title, subtitle, isPlaying,
  } = playList
  return <Stack
      direction={direction} alignItems="center" justifyContent="space-between" component={Card} {...CardProps(direction)}>
    <CardMedia
        component="img"
        {...CardMediaProps(direction)}
        image="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg"/>

    <Box {...CardBoxProps(direction)}>
      <Typography className={'ellipsis-2-lines break-all'} >
        { title }
      </Typography>
      {
        subtitle && <Typography className={'ellipsis'} variant="caption">
          { subtitle }
        </Typography>
      }
    </Box>
    {/* {
      isPlaying
        ? <PauseIcon {...PauseIconProps} onClick={() => playList.pause()} />
        : <PlayArrowIcon {...PlayArrowIconProps} onClick={() => playList.play()}/>

    } */}
  </Stack>
})
