import React, { useMemo, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PriceListContainer, StyledButton, StyledCreateIcon } from "./PriceListSection.styled";
import { User } from "../../../redux/modules/Users/types";
import { useSelector } from "react-redux";
import { Service } from "../../../redux/modules/Services/types";
import Row from "./Row";

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
        return services.filter(service => service.owner === user?.id).reduce<{[key: string]: Service[]}>((acc, service) => {
            if (acc[service.category]) {
                acc[service.category] = [...acc[service.category], service];
            } else {
                acc[service.category] = [service];
            }
            return acc;
        }, {});
    }, [user, services]);

    return (
        <PriceListContainer>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Kategoria</TableCell>
                            <TableCell>Usługa</TableCell>
                            <TableCell align="right">Cena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(userServices).map(([category, services]) => (
                         <Row category={category} services={services}  />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PriceListContainer>
    )
};

export default PriceList;
