import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#42a5f5'
        },
        secondary: {
            main: '#0288d1'
        },
        error: {
            main: red.A400
        }
    }
})
