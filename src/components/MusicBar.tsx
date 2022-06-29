import { MusicItem } from './MusicItem'
import { Music } from '../models/Music'
import { Config } from '../models/Config'

interface Props {
  music: Music,
  config: Config
}

const sliderSx = {
  '&.MuiSlider-dragging, &:hover': {
    '.MuiSlider-track': {
      backgroundColor: 'red',
      border: '1px solid red',
    },
    '.MuiSlider-thumb': {
      display: 'block',
      backgroundColor: 'red',
    },
  },
  '.MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
    display: 'none',
  },
}

export const MusicBar = observer(({ music, config }: Props) => {
  const { isPlaying } = music
  const { isShuffling, playingMode, volume } = config
  return <Paper square sx={{ px: 2 }}>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <MusicItem music={music}/>
      <Stack sx={{ flex: 0.5 }} alignItems="center">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack sx={{ position: 'relative' }} color={isShuffling ? 'error.main' : 'text.primary'} alignItems="center">
            <ShuffleIcon onClick={() => config.toogle('isShuffling')}/>
            { isShuffling && <CircleIcon sx={{ fontSize: 8, position: 'absolute', bottom: '-8px' }}/> }
          </Stack>
          <SkipPreviousIcon fontSize="large"/>
          <Box onClick={() => music.toogle('isPlaying')} sx={{ fontSize: 42, display: 'flex' }}>
            { isPlaying ? <PlayArrowIcon fontSize="inherit"/> : <PauseIcon fontSize="inherit"/> }
          </Box>
          <SkipNextIcon fontSize="large"/>
          <Stack sx={{ position: 'relative' }}
              color={playingMode % 3 === 0 ? 'error.main' : 'text.primary'} alignItems="center" onClick={() => config.set(['playingMode', playingMode + 1])}
          >
            { playingMode % 3 === 1 ? <LooksOneIcon /> : <LoopIcon/> }
            { playingMode % 3 === 0 && <CircleIcon sx={{ fontSize: 8, position: 'absolute', bottom: '-8px' }}/>}
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '100%' }}>
          <Typography variant="caption">
            0:00
          </Typography>
          <Slider
              size="small"
              defaultValue={70}
              sx={{ ...sliderSx }}
          />
          <Typography variant="caption">
            5:20
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <MicIcon />
        <QueueMusicIcon />
        <CastIcon />
        <Stack direction="row" spacing={0.5} alignItems="center">
          <VolumeDownIcon/>
          <Slider size="small" value={volume} onChange={(evt, v) => config.set(['volume', v])} min={0} max={100} sx={{ ...sliderSx, width: '120px' }}/>
        </Stack>
        <OpenInFullIcon />
      </Stack>
    </Stack>
  </Paper>
})
