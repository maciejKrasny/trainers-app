import { Button, CircularProgress, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BodyContainer, LoadingBody } from "./Modal.styled";
import * as serviceThunks from '../../redux/modules/Services/thunks';
import { Service } from "../../redux/modules/Services/types";

interface ModalEditServiceProps {
    onClose: () => void;
    service?: Service;
}

const ModalEditService: React.FC<ModalEditServiceProps> = ({ onClose, service }) => {
    const { currentAuthorizationUser, pending } = useSelector(state => state.authorizationUsers);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: 0,
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => handleOnSubmit()
    });

    const { values, handleChange, handleSubmit, setValues } = formik;

    const dispatch = useDispatch();

    const handleOnSubmit = () => {
        const { price, name } = values;

        if (service) {
            dispatch(serviceThunks.editService({
                id: service.id,
                owner: service.owner,
                name: name,
                price: price,
                category: service.category,
            }));
        } else {
            dispatch(serviceThunks.addService({
                owner: currentAuthorizationUser?.userId || -1,
                name: name,
                price: price,
                category:  '',
            }));
        }

        onClose();
    }

    useEffect(() => {
        console.log('a', service)
        if (service) {
            setValues({
                name:  service.name,
                price: service.price,
            })
        }

    }, [currentAuthorizationUser, service]);
    return (
        <BodyContainer onSubmit={handleSubmit}>
            <TextField
                id="name"
                label="Nazwa"
                variant="outlined"
                multiline
                onChange={handleChange}
                value={values.name}
                margin="normal"
            />
            <TextField
                id="price"
                label="Cena"
                onChange={handleChange}
                value={values.price}
                margin="normal"
                type="number"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Zatwierdź</Button>
            {pending && (
                <LoadingBody>
                    <CircularProgress color="primary" />
                </LoadingBody>
            )}
        </BodyContainer>
    )
};

export default ModalEditService;
