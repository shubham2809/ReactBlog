import { makeStyles } from '@material-ui/core/styles';

const useNewPostStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '90%'
    },
    textField: {
        margin: theme.spacing(1)
    },
    dense: {
        marginTop: 20
    },
    menu: {
        width: 200
    },
    button: {
        alignSelf: 'end',
        textAlign: 'center',
        width: theme.spacing(20),
        height: theme.spacing(5),
        marginTop: theme.spacing(3)
    },
    category: {
        width: '50%',
        margin: theme.spacing(1)
    }
}));

export default useNewPostStyles;
