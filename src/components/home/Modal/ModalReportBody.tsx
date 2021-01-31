import React from 'react';
import {BodyContainer, SelectContainer} from "./Modal.styled";
import {Button, TextField, Typography} from "@material-ui/core";
import ReportCategorySelect from "../Selects/ReportCategorySelect";

interface ModalReportBodyProps {
    onClose?: () => void;
}

const ModalReportBody: React.FC<ModalReportBodyProps> = () => {
    return (
        <BodyContainer>
            <Typography style={{marginBottom: '1rem'}} variant="h4">Zgłoszenie</Typography>
            <ReportCategorySelect transparent={false} />
            <SelectContainer>
                <TextField id="description" style={{ width: '100%' }} value={''} onChange={() => {}} multiline variant="outlined" label="Opis" />
            </SelectContainer>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Wyślij</Button>
        </BodyContainer>
    );
}

export default ModalReportBody;