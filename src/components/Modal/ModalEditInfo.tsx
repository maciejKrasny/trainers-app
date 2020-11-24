import { Button, CircularProgress, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import CitySelect from "../Selects/CitySelect";
import SpecializationsSelect from "../Selects/SpecializationsSelect";
import { BodyContainer, LoadingBody, SelectContainer } from "./Modal.styled";
import * as userThunks from '../../redux/modules/Users/thunks';

interface ModalEditInfoProps {
    onClose: () => void;
}

interface FormProps {
    city?: string;
    nrPhone?: number,
    email?: string,
    specializations?: string[],
    description?: string,
}

const ModalEditInfo: React.FC<ModalEditInfoProps> = ({ onClose }) => {
    const { currentAuthorizationUser, pending } = useSelector(state => state.authorizationUsers);
    const { users } = useSelector(state => state.users);
    const editUser = users.find(user => user.id === currentAuthorizationUser?.userId);

    const formik = useFormik<FormProps>({
        initialValues: {
            city: '',
            nrPhone: undefined,
            email: '',
            specializations: [],
            description: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => handleOnSubmit()
    });

    const { values, handleChange, handleSubmit, setValues } = formik;

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

    const handleOnSubmit = () => {
        const { city, specializations, description, nrPhone, email } = values;
        const editUser = users.find(user => user.id === currentAuthorizationUser?.userId);

        dispatch(userThunks.editUser({
            id: editUser?.id || -1,
            city: city || '',
            email: email || '',
            name: editUser?.name || '',
            nrPhone: nrPhone || -1,
            shortDescription: description || '',
            specializations: specializations || [],
            surname: editUser?.surname || '',
        }));
        onClose();
    }

    useEffect(() => {
        const editUser = users.find(user => user.id === currentAuthorizationUser?.userId);
        console.log(editUser)
        setValues({
            city: editUser?.city,
            nrPhone: editUser?.nrPhone,
            email: editUser?.email,
            specializations: editUser?.specializations || [],
            description: editUser?.shortDescription,
        })
    }, [currentAuthorizationUser, users]);
    return (
        <BodyContainer onSubmit={handleSubmit}>
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
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Zatwierdź</Button>
            {pending && (
                <LoadingBody>
                    <CircularProgress color="primary" />
                </LoadingBody>
            )}
        </BodyContainer>
    )
};

export default ModalEditInfo;
