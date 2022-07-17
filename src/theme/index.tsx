import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FC } from 'react'

type Props = {
  children: any
}

export const MuiThemeProvider: FC<Props> = ({ children }) => {
  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: 'dark',
      },
    }),
    [],
  )
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
