import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <>
      <Box
        sx={{
          height: theme =>
            `calc(100vh - ${theme.trello.appHightBar} - ${theme.trello.appHightBoardBar})`,
          backgroundColor: 'blue',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Content
      </Box>
    </>
  )
}

export default BoardContent
