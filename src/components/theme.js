import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({

    palette: {
        primary: {
            main: '#ff7000'
        },
        secondary: {
            main: '#009900',
        }
    },
    absCenterDiv: {
        top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
})