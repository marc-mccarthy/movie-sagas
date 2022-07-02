import { createMuiTheme } from '@material-ui/core/styles'
import { purple, green } from '@mui/material/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
            secondary: purple[500],
        },
        secondary: {
            main: green[500],
            secondary: green[500],
        },
    },
    typography: {   
        fontFamily: 'Carter One',
        fontSize: 14,
    },
});

export default theme;