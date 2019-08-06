import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5)
    },
    warning: {
        backgroundColor: '#FFA000'
    },
    success: {
        backgroundColor: '#22bb33'
    }
}));

export default function SnackBar({ open, handleClose, variant, message }) {
    const classes = useStyles();

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent
                    className={classes[variant]}
                    message={<span>{message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </Snackbar>
        </div>
    );
}
