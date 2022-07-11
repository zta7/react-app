// import { useVirtualizer } from '@tanstack/react-virtual'
import { Fragment } from 'react'

const list = [
  ...Array.from({ length: 500 }, () => new Music()),
]

const GridColumnProps = {
  sx: {
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: '[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)',

    position: 'sticky',
    zIndex: 9999,
    top: 64,

    '&': {
      '> *': {
        minWidth: 0,
      },
    },
  },
}

const GridRowProps = {
  sx: {
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: '[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)',

    height: 56,
    '&': {
      '> *': {
        minWidth: 0,
      },
      '.MoreIcon': {
        display: 'none',
      },
      ':hover': {
        '.MoreIcon': {
          display: 'block',
        },
      },
    },
  },
}

export const LikedPage = () => {
  console.log('LikedPage')
  // const rowVirtualizer = useVirtualizer({
  //   count: 10000,
  //   getScrollElement: () => document.querySelector('.simplebar-content-wrapper'),
  //   estimateSize: () => 35,
  //   overscan: 5,
  // })
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: 192, height: 192 }}>
          <Avatar src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" variant="square" sx={{ width: '100%', height: '100%' }}>
            <FavoriteIcon />
          </Avatar>
        </Box>
        <Stack sx={{ alignSelf: 'end' }}>
          <Typography variant="caption">播放清单</Typography>
          <Typography variant="h2">已按赞的歌曲</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src="https://i.scdn.co/image/ab6775700000ee85926762014cb8aba33a574ade" sx={{ width: 24, height: 24 }}></Avatar>
            <Typography>Zta·426 首歌</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box sx={{ py: 3 }}>
        <PlayArrowIcon fontSize="large" sx={{ bgcolor: 'success.main', borderRadius: 12, p: 1.5 }}/>
      </Box>
      <Box {...GridColumnProps}>
        <Box><Typography textAlign="end">#</Typography></Box>
        <Box>
          <Typography noWrap>Title LongLongLongLongLongLo
            ngLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong
          </Typography>
        </Box>
        <Box><Typography noWrap>Alumb</Typography></Box>
        <Box><Typography noWrap>Create Date</Typography></Box>
        <Box><AccessTimeIcon /></Box>
      </Box>
      <Box>
        {
          list.map((music, i) => {
            const {
              title, artists, isLiked,
            } = music
            return <Box {...GridRowProps} key={i}>
              <Stack direction="row" alignItems="center" justifyContent="end">
                <Box>
                  <Typography>{ i + 1 }</Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar src="http://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" variant="square">
                </Avatar>
                <Stack sx={{ minWidth: 0 }}>
                  <Typography variant="subtitle2" noWrap>
                    { title }
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.2}>
                    <Avatar sx={{
                      width: 14, height: 14, fontSize: '12px', mr: 0.5,
                    }} variant="square">E</Avatar>
                    <Typography variant="caption" fontSize={10} noWrap>
                      {
                      artists.map((e, i2, arr) => (
                        <Fragment key={e}>
                          <>{ e }</>
                          {
                            i !== arr.length - 1
                            && <>,</>
                          }
                        </Fragment>
                      ))
                    }
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography noWrap>Let Me Love You (Sean Paul Remix)</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography noWrap>2022/06/06</Typography>
              </Stack>
              <Stack onClick={() => music.toogle('isLiked')} direction="row" alignItems="center" spacing={1}>
                { music.isLiked ? <FavoriteBorderIcon /> : <FavoriteIcon color="secondary"/> }
                <Typography>2:45</Typography>
                <MoreHorizIcon fontSize="small" className="MoreIcon"/>
              </Stack>
            </Box>
          })
        }
      </Box>
    </Box>
  )
}
