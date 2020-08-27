import React, { Fragment, useState } from 'react';
import NavBar from '../Components/NavBar';
import Form from '../Components/Form';
import { useHistory } from 'react-router-dom';
import userJSON from '../base-de-datos/userData.json';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {

    const Users = userJSON;
    const history = useHistory();

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };


    const handleInputEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const handleInputPassword = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleAuthUser = (e) => {
        const authUser = Users.filter((u) => {
            if (u.email == emailValue && u.password == passwordValue) {
                return true;
            } else {
                return setOpen(true);
            }
        })
        if (authUser.length > 0) {
            history.push("/playlist/" + authUser[0].uuid)
        }
    };

    return (
        <Fragment>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">Usuario incorrecto, ingresa uno válido</Alert>
            </Snackbar>
            <NavBar justify="center" />
            <Form
                onclick={handleAuthUser}
                handleInputEmail={handleInputEmail}
                handleInputPassword={handleInputPassword}
            />
        </Fragment>
    )
}

export default Login;