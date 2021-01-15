import React from "react";
import { createStyles, Fade, makeStyles, Modal as MaterialModal, Theme, Backdrop } from '@material-ui/core';
import ModalSignInBody from "./ModalSignInBody";
import ModalSignUpBody from "./ModalSignUpBody";
import ModalEditInfo from "./ModalEditInfo";
import ModalEditService from "./ModalEditService";
import { Service } from "../../../redux/modules/Services/types";
import ModalReportBody from "./ModalReportBody";

export type ModalType = '' | 'signIn' | 'signUp' | 'report';

interface ModalProps {
    type: ModalType;
    isOpen: boolean;
    service?: Service;
    onClose: () => void;
}

const useStyles = makeStyles(() =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }),
);

const Modal: React.FC<ModalProps> = ({ isOpen, type, onClose, service }) => {
    const classes = useStyles();
    const body = React.useMemo(() => {
        if (type === 'signIn') {
            return <ModalSignInBody onClose={onClose}/>
        }
        if (type === 'signUp') {
            return <ModalSignUpBody onClose={onClose} />
        }
        if (type === 'report') {
            return <ModalReportBody onClose={onClose} />
        }
        return <div></div>;
    }, [type, service]);

    return (
        <MaterialModal
            className={classes.modal}
            open={isOpen}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={isOpen}>
                {body}
            </Fade>
        </MaterialModal>
    )
};

export default Modal;
