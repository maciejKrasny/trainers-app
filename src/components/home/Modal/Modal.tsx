import React from "react";
import {Backdrop, createStyles, Fade, makeStyles, Modal as MaterialModal} from '@material-ui/core';
import {Service} from "../../../redux/modules/Services/types";
import ModalReportBody from "./ModalReportBody";
import ModalSignUpBody from "./ModalSignUpBody";
import ModalSignInBody from "./ModalSignInBody";

export type ModalType = '' | 'report' | 'signIn' | 'signUp';

interface ModalProps {
    type: ModalType;
    isOpen: boolean;
    service?: Service;
    onClose: () => void;
    reportType?: 'POST' | 'EVENT' | 'COMMENT' | 'REVIEW';
    reportId?: string;
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

const Modal: React.FC<ModalProps> = ({ isOpen, type, onClose, service, reportId, reportType }) => {
    const classes = useStyles();
    const body = React.useMemo(() => {
        if (type === 'signIn') {
            return <ModalSignInBody onClose={onClose}/>
        }
        if (type === 'signUp') {
            return <ModalSignUpBody onClose={onClose} />
        }
        if (type === 'report') {
            return <ModalReportBody type={reportType} id={reportId} onClose={onClose} />
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
