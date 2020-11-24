import { Button, CircularProgress, Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BodyContainer, LoadingBody } from "./Modal.styled";
import * as authorizationThunk from '../../redux/modules/Authorization/thunks';

interface ModalSignInBodyProps {
    onClose: () => void;
}

const ModalSignInBody: React.FC<ModalSignInBodyProps> = ({ onClose }) => {
    const { authorizationUsers, pending, currentAuthorizationUser } = useSelector(state => state.authorizationUsers);
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        validate: values => {
            const user = authorizationUsers.find(authorizationUser =>
                authorizationUser.login === values.login && authorizationUser.password === values.password
            );
            if (!user) {
                return {
                    login: 'Nieprawidłowa nazwa użytkownika lub hasło',
                };
            }
        },

        onSubmit: () => handleOnSubmit(),
    });

    const { values, handleChange, handleSubmit, errors } = formik;
    const dispatch = useDispatch();

    const handleOnSubmit = () => {
        const user = authorizationUsers.find(authorizationUser =>
            authorizationUser.login === values.login && authorizationUser.password === values.password
        );
        if (user) {
            dispatch(authorizationThunk.saveCurrentAuthorizationUser(user));
        }
    }

    useEffect(() => {
        if (currentAuthorizationUser && !pending) {
            onClose();
        }
    }, [currentAuthorizationUser, pending])

    return (
        <BodyContainer onSubmit={handleSubmit}>
            {errors.login && <Alert severity="error">Błędna nazwa użytkownika lub hasło</Alert>}
            <TextField
                id="login"
                label="Nazwa użytkownika"
                value={values.login}
                onChange={handleChange}
            />
            <TextField
                id="password"
                label="Hasło"
                onChange={handleChange}
                value={values.password}
                margin="normal"
                type="password"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Zaloguj się</Button>
            {pending && (
                <LoadingBody>
                    <CircularProgress color="primary" />
                </LoadingBody>
            )}
        </BodyContainer>
    )
};

export default ModalSignInBody;
