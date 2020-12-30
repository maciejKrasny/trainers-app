import React, { useMemo, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PriceListContainer, StyledButton, StyledCreateIcon } from "./PriceListSection.styled";
import { User } from "../../redux/modules/Users/types";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { Service } from "../../redux/modules/Services/types";

const rows = [
    {
        id: 1,
        services: 'Siłownia z trenerem',
        price: 300
    },
    {
        id: 2,
        services: 'Siłownia z trenerem',
        price: 300
    },
    {
        id: 3,
        services: 'Siłownia z trenerem',
        price: 300
    },
]

interface PriceListProps {
    user?: User;
}

const PriceList: React.FC<PriceListProps> = ({ user }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [curService, setCurService] = useState<Service>();
    const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers);
    const isCurrentUser = user?.id === currentAuthorizationUser?.userId;
    const { services } = useSelector(state => state.services);

    const userServices = useMemo(() => {
        return services.filter(service => service.owner === user?.id);
    }, [user, services]);

    return (
        <PriceListContainer>
            {isCurrentUser && <StyledButton variant="contained" color="primary" onClick={() => setIsEditModalOpen(true)}>Dodaj</StyledButton>}
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            {isCurrentUser && <TableCell padding="checkbox"></TableCell>}
                            <TableCell>Usługa</TableCell>
                            <TableCell align="right">Cena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userServices.map((service) => (
                            <TableRow key={service.id}>
                                {isCurrentUser && <TableCell padding="checkbox"><StyledCreateIcon onClick={() => {
                                    setIsEditModalOpen(true);
                                    setCurService(service);
                                }}
                                /></TableCell>}
                                <TableCell component="th" scope="row">
                                    {service.name}
                                </TableCell>
                                <TableCell align="right">
                                    {`${service.price}zł`}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal type="editService" onClose={() => {
                setIsEditModalOpen(false);
                if (services) {
                    setCurService(undefined);
                }
            }}
                isOpen={isEditModalOpen}
                service={curService}
            />
        </PriceListContainer>
    )
};

export default PriceList;
