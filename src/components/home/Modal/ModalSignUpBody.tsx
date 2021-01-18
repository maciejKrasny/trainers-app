import {
    Button,
    CircularProgress,
    Collapse,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {useFormik} from "formik";
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import CitySelect from "../Selects/CitySelect";
import SpecializationsSelect from "../Selects/SpecializationsSelect";
import {BodyContainer, LoadingBody, SelectContainer} from "./Modal.styled";
import * as authorizationThunk from '../../../redux/modules/Authorization/thunks';

interface ModalSignUpBodyProps {
    onClose: () => void;
}

const ModalSignUpBody: React.FC<ModalSignUpBodyProps> = ({ onClose }) => {
    const { authorization, pending } = useSelector(state => state.authorizationUsers);
    const formik = useFormik({
        initialValues: {
            email: '',
            type: 'TRAINER',
            password: '',
            city: '',
            name: '',
            nrPhone: 48,
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
    const handleOnChangeCity = (newValue: string) => {
        handleChange({
            target: {
                name: 'city',
                value: newValue,
            }
        })
    }

    const handleOnChangeType = (newValue: string) => {
        handleChange({
            target: {
                name: 'type',
                value: newValue,
            }
        })
    }

    useEffect(() => {
        if (authorization?.token && !pending) {
            onClose();
        }
    }, [authorization?.token, pending])

    const handleSignUp = () => {
        const { city, specializations, surname, password, name, description, nrPhone, email, type } = values;
        dispatch(authorizationThunk.register({
            password,
            type,
            city,
            name,
            phone: nrPhone,
            email,
            description,
            specializations,
            lastName: surname,
            firstName: name,
        }));
    }

    useEffect(() => {
        if (authorization && !pending) {
            onClose();
        }
    }, [authorization, pending])

    return (
        <BodyContainer onSubmit={handleSubmit} >
            <Typography variant="h4">Rejestracja</Typography>
            {errors.email && <Alert severity="error">Błędna nazwa użytkownika lub hasło</Alert>}
            <TextField
                id="email"
                label="E-mail"
                onChange={handleChange}
                value={values.email}
                margin="normal"
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
            <Typography style={{marginTop: '0.5rem'}} variant="body2" color="textSecondary">Typ</Typography>
             <RadioGroup style={{display: 'flex', flexDirection: 'row'}} aria-label="quiz" name="quiz" value={values.type} onChange={event => handleOnChangeType(event.target.value)}>
                    <FormControlLabel value="TRAINER" control={<Radio />} label="Trener" />
                    <FormControlLabel value="USER" control={<Radio />} label="Użytkownik" />
                </RadioGroup>
                <Collapse in={values.type === 'TRAINER'}>
                    <div>
                    <TextField
                        id="nrPhone"
                        label="Nr telefonu"
                        onChange={handleChange}
                        value={values.nrPhone}
                        type="number"
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
                    </div>
                </Collapse>
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