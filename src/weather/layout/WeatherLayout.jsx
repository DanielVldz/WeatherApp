import { Box } from '@mui/material'
import { NavBar } from '../components/NavBar';

const drawerWidth = 320;

export const WeatherLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex' }}>
        
        <NavBar drawerWidth={ drawerWidth } />

        {/* Sidebar drawerWidth */}

        <Box component='main' sx={{ flexGrow: 1, p: 3}}>
            {/* Toolbar */}
            { children }
        </Box>
    </Box>
  )
}
