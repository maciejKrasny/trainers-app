import { Button, CircularProgress, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import CitySelect from "../Selects/CitySelect";
import SpecializationsSelect from "../Selects/SpecializationsSelect";
import { BodyContainer, LoadingBody, SelectContainer } from "./Modal.styled";
import * as authorizationThunks from '../../redux/modules/Authorization/thunks';
import * as userThunks from '../../redux/modules/Users/thunks';

interface ModalSignUpBodyProps {
    onClose: () => void;
}

const ModalSignUpBody: React.FC<ModalSignUpBodyProps> = ({ onClose }) => {
    const { currentAuthorizationUser, pending } = useSelector(state => state.authorizationUsers);
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            city: '',
            name: '',
            nrPhone: 48,
            email: '',
            surname: '',
            specializations: [],
            description: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => handleSignUp()
    });

    const { values, handleChange, handleSubmit, errors } = formik;

    const handleOnChangeSpecializations = (value: string[]) => {
        handleChange({
            target: {
                name: 'specializations',
                value: value,
            }
        })
    }

    const dispatch = useDispatch();
    const handleOnChangeCity = (_: React.ChangeEvent<{}>, newValue: any) => {
        handleChange({
            target: {
                name: 'city',
                value: newValue,
            }
        })
    }

    const handleSignUp = () => {
        const { city, specializations, login, surname, password, name, description, nrPhone, email } = values;
        dispatch(userThunks.addUser({
            city,
            email,
            name,
            nrPhone,
            shortDescription: description,
            specializations,
            surname,
        }));

        dispatch(authorizationThunks.addAuthorizationUser({
            login,
            password,
        }));
        onClose();
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
            <TextField
                id="name"
                label="Imię"
                onChange={handleChange}
                value={values.name}
                margin="normal"
            />
            <TextField
                id="surname"
                label="Nazwisko"
                onChange={handleChange}
                value={values.surname}
                margin="normal"
            />
            <TextField
                id="nrPhone"
                label="Nr telefonu"
                onChange={handleChange}
                value={values.nrPhone}
                type="number"
                margin="normal"
            />
            <TextField
                id="email"
                label="E-mail"
                onChange={handleChange}
                value={values.email}
                margin="normal"
            />
            <SelectContainer>
                <CitySelect id="city" onChange={handleOnChangeCity} value={values.city} />
            </SelectContainer>
            <SelectContainer>
                <SpecializationsSelect id="specializations" onChange={handleOnChangeSpecializations} value={values.specializations} />
            </SelectContainer>
            <SelectContainer>
                <TextField id="description" style={{ width: '100%' }} value={values.description} onChange={handleChange} multiline variant="outlined" label="Opis" />
            </SelectContainer>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Zarejestruj się</Button>
            {pending && (
                <LoadingBody>
                    <CircularProgress color="primary" />
                </LoadingBody>
            )}
        </BodyContainer>
    )
};

export default ModalSignUpBody;
