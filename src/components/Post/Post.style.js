import { makeStyles } from '@material-ui/core/styles';

const usePostStyles = makeStyles(theme => ({
    card: {
        width: theme.spacing(50),
        maxWidth: theme.spacing(70),
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(40)
        }
    },
    media: {
        height: 140
    },
    content: {
        whiteSpace: 'normal',
        textDecoration: 'none',
        '& a': {
            textDecoration: 'none'
        }
    },
    pos: {
        marginBottom: theme.spacing(1)
    }
}));

export default usePostStyles;
