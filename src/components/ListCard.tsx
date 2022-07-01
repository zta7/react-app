// eslint-disable-next-line import/no-extraneous-dependencies
import { SystemProps } from '@mui/system'
import { GenricList } from '../models/GenricList'

type Direction = 'row' | 'column'

interface Props {
  item: GenricList
  direction?: Direction
}

const PauseIconProps = (direction : Direction) => {
  const sx = {
    boxShadow: 3, bgcolor: 'white', color: 'success.main', borderRadius: 5, fontSize: 40,
  } as SystemProps

  if (direction === 'row') sx.alignSelf = 'center'
  else if (direction === 'column') {
    sx.position = 'absolute'
    sx.right = 4
    sx.bottom = 4
  }

  return {
    sx,
  }
}

const PlayArrowIconProps = (direction : Direction) => {
  const sx = {
    boxShadow: 3,
    bgcolor: 'white',
    color: 'success.main',
    borderRadius: 5,
    opacity: 0,
    fontSize: 40,
    transition: 'all .25s ease-in-out',
  } as SystemProps
  const className = 'PlayArrowIcon'

  if (direction === 'row') sx.alignSelf = 'center'
  else if (direction === 'column') {
    sx.position = 'absolute'
    sx.right = 4
    sx.bottom = -10
  }

  return {
    sx,
    className,
  }
}

const CardProps = (direction :Direction) => {
  const sx = {
    transition: 'all .25s ease-in-out',
    position: 'relative',
    pr: 1,
    '&': {
      cursor: 'pointer',
      ':hover': {
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        '.PlayArrowIcon': {
          opacity: 1,
          bottom: 4,
        },
      },
    },
  } as SystemProps

  if (direction === 'column') sx.p = 2

  return {
    sx,
  }
}

const CardMediaProps = (direction : Direction) => {
  if (direction === 'column') {
    return {
      sx: { aspectRatio: '1/1', width: '100%' },
    }
  }
  return {
    sx: { width: 70, height: 70 },
  }
}

const CardBoxProps = (direction : Direction) => {
  const sx = {
    flexGrow: 1,
    overflow: 'hidden',
  } as SystemProps

  if (direction === 'row') {
    Object.assign(sx, {
      px: 2,
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
    })
  }
  if (direction === 'column') {
    Object.assign(sx, {
      pt: 2,
      pb: 1,
    })
  }

  return {
    sx,
  }
}

export const ListCard = observer(({ item, direction = 'row' }: Props) => {
  const {
    title, subtitle, isPlaying,
  } = item
  const IconBox = () => (isPlaying
    ? <PauseCircleIcon {...PauseIconProps(direction)} onClick={() => item.pause()} />
    : <PlayCircleIcon {...PlayArrowIconProps(direction)} onClick={() => item.play()}/>)

  return <Stack
      direction={direction} alignItems="stretch" justifyContent="space-between" component={Card} {...CardProps(direction)}>
    <Box sx={{ position: 'relative' }}>
      <CardMedia
          component="img"
          {...CardMediaProps(direction)}
          image="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" />
      {
        direction === 'column' && <IconBox/>
      }
    </Box>
    <Box {...CardBoxProps(direction)}>
      <Typography className={subtitle ? 'ellipsis break-all' : 'ellipsis-2-lines break-all'} >
        { title }
      </Typography>
      {
        subtitle && <Typography className={'ellipsis'} variant="caption" sx={{ display: 'block' }}>
          { subtitle }
        </Typography>
      }
    </Box>
    { direction === 'row' && <IconBox/>}
  </Stack>
})
