import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'

const AppBar = () => {
  return (
    <>
      <Box
        sx={{
          height: theme => theme.trello.appHightBar,
          backgroundColor: 'gray',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeSelect />
      </Box>
    </>
  )
}

export default AppBar
