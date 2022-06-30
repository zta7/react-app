// @ts-nocheck
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      eslintrc: {
        enabled: true, // <-- this
      },
      dts: './src/auto-imports.d.ts',
      imports: [
        'react', 'mobx', 'mobx-react-lite', 'react-router-dom',
        {
          '@mui/material': [
            'Avatar', 'Typography', 'Stack', 'Chip', 'Icon', 'LinearProgress', 'Slider', 'Box', 'Badge', 'Paper', 'Container', 'Drawer', 'List', 'AppBar', 'Divider', 'Button', 'Grid',
            'Card', 'CardContent', 'CardActions', 'CardHeader', 'CardMedia', 'CardActionArea',
            'ListItem', 'ListItemAvatar', 'ListItemButton', 'ListItemIcon', 'ListItemText',
            'Fade',
            ['Link', 'MuiLink'],
          ],
          '@mui/icons-material': [
            ['FavoriteBorder', 'FavoriteBorderIcon'],
            ['Favorite', 'FavoriteIcon'],
            ['SkipNext', 'SkipNextIcon'],
            ['SkipPrevious', 'SkipPreviousIcon'],
            ['Pause', 'PauseIcon'],
            ['PlayArrow', 'PlayArrowIcon'],
            ['Shuffle', 'ShuffleIcon'],
            ['Loop', 'LoopIcon'],
            ['Mic', 'MicIcon'],
            ['QueueMusic', 'QueueMusicIcon'],
            ['Cast', 'CastIcon'],
            ['VolumeOff', 'VolumeOffIcon'],
            ['VolumeUp', 'VolumeUpIcon'],
            ['VolumeDown', 'VolumeDownIcon'],
            ['OpenInFull', 'OpenInFullIcon'],
            ['Circle', 'CircleIcon'],
            ['LooksOne', 'LooksOneIcon'],
            ['Home', 'HomeIcon'],
            ['Search', 'SearchIcon'],
            ['VideoLibrary', 'VideoLibraryIcon'],
            ['AddCircle', 'AddCircleIcon'],
            ['Album', 'AlbumIcon'],
            ['Downloading', 'DownloadingIcon'],
          ],
        },
      ],
      dirs: ['./src/models/'],
    }),
  ],
})
