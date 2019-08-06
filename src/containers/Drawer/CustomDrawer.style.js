import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useDrawerStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    toolbar: theme.mixins.toolbar,
    toolitems: {
        fontSize: '14px',
        color: '#000000',
        textDecoration: 'none'
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(10)
    },
    clearFilterActive: {
        color: '#0080ff',
        textDecoration: 'underline'
    },
    clearFilter: {
        fontSize: '8px;',
        textAlign: 'center'
    }
}));

export default useDrawerStyles;
