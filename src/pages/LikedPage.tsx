const list = [
  ...Array.from({ length: 100 }, () => new Music()),
]

console.log(list)

export const LikedPage = () => {
  console.log('LikedPage')
  return (
    <TableContainer>
      <Table stickyHeader sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {/* <ButtonBase sx={{
              bgcolor: 'success.main', color: 'white', borderRadius: 10, p: 1,
            }}>
              <PlayArrowIcon fontSize="large"/>
            </ButtonBase> */}
          </TableRow>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Alumb</TableCell>
            <TableCell align="left">Create Date</TableCell>
            <TableCell align="right">
              <AccessTimeIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, i) => (
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="left">1</TableCell>
              <TableCell align="left">2</TableCell>
              <TableCell align="left">3</TableCell>
              <TableCell align="right">4</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)
}
