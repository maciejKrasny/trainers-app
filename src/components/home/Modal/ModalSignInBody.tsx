import {Button, CircularProgress, Snackbar, TextField, Typography} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BodyContainer, LoadingBody } from "./Modal.styled";
import * as authorizationThunk from '../../../redux/modules/Authorization/thunks';
import {setError} from "../../../redux/modules/Authorization/actions";
import * as yup from "yup";

interface ModalSignInBodyProps {
    onClose: () => void;
}

const singInUserSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(1).required(),
}).defined();

const ModalSignInBody: React.FC<ModalSignInBodyProps> = ({ onClose }) => {
    const { authorization, pending, error } = useSelector(state => state.authorizationUsers);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: () => handleOnSubmit(),
        validate: (values) => {
            const erros: any = {};
            if (!singInUserSchema.isValidSync(values)) {
                erros.email = 'error';
            }
            return erros;
        }

    });

    const { values, handleChange, handleSubmit, errors } = formik;
    const dispatch = useDispatch();

    const handleOnSubmit = () => {
        dispatch(authorizationThunk.login(values))
    }

    useEffect(() => {
        if (authorization?.token && !pending) {
            onClose();
        }
    }, [authorization?.token, pending])

    return (
        <BodyContainer onSubmit={handleSubmit}>
            <Typography style={{marginBottom: '1rem'}} variant="h4">Logowanie</Typography>
            {(error || errors.email) && <Alert severity="error">Błędna email lub hasło</Alert>}
            <TextField
                id="email"
                label="Email"
                value={values.email}
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