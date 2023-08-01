import { Logout, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({ drawerWidth = 320 }) => {
  return (
    <AppBar 
        position="fixed" 
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px` }
        }}

    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'> WeatherApp </Typography>
                <IconButton color='error'>
                    <Logout />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
