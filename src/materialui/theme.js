import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@mui/material/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
			secondary: purple[300],
		},
		secondary: {
			main: green[600],
			secondary: green[400],
		},
	},
	typography: {
		fontFamily: 'Carter One',
		fontSize: 14,
	},
});

export default theme;
