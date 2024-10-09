import Box from '@mui/material/Box'
const BoardBar = () => {
  return (
    <>
      <Box
        sx={{
          height: theme => theme.trello.appHightBoardBar,
          backgroundColor: 'green',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>
    </>
  )
}

export default BoardBar
