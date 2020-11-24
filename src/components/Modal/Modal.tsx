import React from "react";
import { createStyles, Fade, makeStyles, Modal as MaterialModal, Theme, Backdrop } from '@material-ui/core';
import ModalSignInBody from "./ModalSignInBody";
import ModalSignUpBody from "./ModalSignUpBody";
import ModalEditInfo from "./ModalEditInfo";

export type ModalType = '' | 'signIn' | 'signUp' | 'editInfo';

interface ModalProps {
    type: ModalType;
    isOpen: boolean;
    onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }),
);

const Modal: React.FC<ModalProps> = ({ isOpen, type, onClose }) => {
    const classes = useStyles();

    const body = React.useMemo(() => {
        if (type === 'signIn') {
            return <ModalSignInBody onClose={onClose}/>
        }
        if (type === 'signUp') {
            return <ModalSignUpBody onClose={onClose} />
        }
        if (type === 'editInfo') {
            return <ModalEditInfo onClose={onClose} />
        }
        return <div></div>;
    }, [type]);

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
