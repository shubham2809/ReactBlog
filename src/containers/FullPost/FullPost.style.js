import { makeStyles } from '@material-ui/core/styles';

const useFullPostStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2)
    },
    pos: {
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(4)
    }
}));

export default useFullPostStyles;
