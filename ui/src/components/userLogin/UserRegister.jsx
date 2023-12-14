import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState, Fragment } from 'react';
import AuthForm from './AuthForm';
import { userRegister } from '../../services/apiServices';
import Toaster from '../../utils/Toster';


export default function UserRegister() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRegister = async (formData) => {
        try {
            const response = await userRegister(formData);
            if (response) {
                Toaster("User registered successfully", 101, ["success"]);
            } else {
                Toaster("User registration failed", 102, ["error"]);
            }
        } catch (error) {
            Toaster("User registration failed", 103, ["error"]);
        }
        handleClose();
    };

    const fields = [
        { name: 'userName', type: 'text', placeholder: 'User Name' },
        { name: 'email', type: 'text', placeholder: 'Email Address' },
        { name: 'password', type: 'password', placeholder: 'Password' },
    ];


    return (
        <Fragment>
            <button className="text-red-600 hover:underline hover:underline-offset-4" onClick={handleClickOpen}>
                Signup
            </button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Sign up"}
                </DialogTitle>
                <DialogContent>
                    <AuthForm onSubmit={handleRegister} buttonText="Sign up" fields={fields} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}