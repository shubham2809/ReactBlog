import { useState } from 'react';

export default function useSnackBar() {
    // snackbar state
    const [open, setOpen] = useState(false);

    function onDelete() {
        setOpen(true);
    }
    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return [open, onDelete, handleClose];
}
