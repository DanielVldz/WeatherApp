import { Alert, Button, Grid, TextField, Typography } from '@mui/material'
import '../../styles.css'
import { Google } from '@mui/icons-material'

export const LoginPage = () => {
  return (
    <Grid 
      container
      className='background-image'
    >
      <Grid 
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid 
          container
          className='box-shadow'
          //xs={ 4 } // solo puede usarse xs en grid item
          sx={{ backgroundColor: 'white', padding: 3, borderRadius: 5, width: '400px', height: '200px' }}
        >
          <Grid item xs={ 4 }>
          <img 
            src='../src/assets/WeatherIcon.png'
            alt='Weather Icon'
            style={{
              marginLeft: '10px',
              width: '65%', // Reduce el ancho a la mitad
              height: 'auto', // Ajusta la altura de forma proporcional
            }}
          />
          </Grid>
          <Grid item xs={ 8 }>
            <Typography variant='h4'>Weather App</Typography>
            <Typography sx={{ mb: 5 }}>Sign In with Google</Typography>

            <Button 
              variant="outlined" 
              size='large'
              startIcon={<Google />}
            >
              Sign In
            </Button> 
          </Grid>
          
          

        </Grid>
        
      </Grid>
     
               
    </Grid>
    
  )
}
