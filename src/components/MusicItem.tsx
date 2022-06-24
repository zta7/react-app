import { Music } from "../models/Music"

export const MusicItem = ({ title }: Music) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar variant='square'>H</Avatar>
      <Typography variant="caption">
        {title}
      </Typography>
    </Stack>
  )
}