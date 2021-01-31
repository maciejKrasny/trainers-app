import React, {useState} from 'react';
import {BodyContainer, LoadingBody, SelectContainer} from "./Modal.styled";
import {Button, CircularProgress, TextField, Typography} from "@material-ui/core";
import ReportCategorySelect from "../Selects/ReportCategorySelect";
import kyClient from "../../../api/kyClient";
import {useFormik} from "formik";
import * as yup from "yup";
import {Alert} from "@material-ui/lab";

interface ModalReportBodyProps {
    onClose?: () => void;
    type?: 'POST' | 'EVENT' | 'COMMENT' | 'REVIEW',
    id?: string;
}

const reportSchema = yup.object({
    category: yup.string().required(),
    description: yup.string().required(),
}).defined();

const ModalReportBody: React.FC<ModalReportBodyProps> = ({ type, id, onClose}) => {
    const [pending, setPending] = useState(false);

    const formik = useFormik({
        initialValues: {
            category: '',
            description: '',
            type: type,
            id: id,
        },
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: () => handleOnReport(),
        validate: (values) => {
            const erros: any = {};
            if (!reportSchema.isValidSync(values)) {
                erros.category = 'error';
            }
            return erros;
        }

    });

    const { values, handleChange, handleSubmit, errors } = formik;

    const handleOnReport = () => {
        setPending(true);
        try {
            kyClient.post('report', { json: values})
        } catch (e) {

        } finally {
            setPending(false);
        }
    }

    const handleOnChange = (key: string, value: string) => {
        handleChange({
            target: {
                name: key,
                value: value,
            }
        })
    }

    return (
        <BodyContainer onSubmit={handleSubmit}>
            <Typography style={{marginBottom: '1rem'}} variant="h4">Zgłoszenie</Typography>
            {errors.category && <Alert severity="error">Uzupełnij pola poprawnie</Alert>}
            <ReportCategorySelect transparent={false} value={values.category} onChange={(value) => handleOnChange('category', value)}/>
            <SelectContainer>
                <TextField id="description" style={{ width: '100%' }} value={values.description} onChange={(event) => handleOnChange('description', event.target.value)} multiline variant="outlined" label="Opis" />
            </SelectContainer>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Wyślij</Button>
            {pending && (
                <LoadingBody>
                    <CircularProgress color="primary" />
                </LoadingBody>
            )}
        </BodyContainer>
    );
}

export default ModalReportBody;