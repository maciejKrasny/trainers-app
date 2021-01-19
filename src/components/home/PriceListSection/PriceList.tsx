import React, {useEffect, useMemo} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {PriceListContainer} from "./PriceListSection.styled";
import {useDispatch, useSelector} from "react-redux";
import {Service} from "../../../redux/modules/Services/types";
import Row from "./Row";
import {CircularProgress} from "@material-ui/core";
import * as serviceThunks from "../../../redux/modules/Services/thunks";
import {useHttpErrorHandler} from "../../../utils/hooks/useHttpErrorHandler";

interface PriceListProps {
    userId: string;
}

const PriceList: React.FC<PriceListProps> = ({ userId }) => {
    const dispatch = useDispatch();
    const { services, pending } = useSelector(state => state.services);

    const userServices = useMemo(() => {
        return services.reduce<{[key: string]: Service[]}>((acc, service) => {
            if (acc[service.category]) {
                acc[service.category] = [...acc[service.category], service];
            } else {
                acc[service.category] = [service];
            }
            return acc;
        }, {});
    }, [userId, services]);

    const handler = useHttpErrorHandler();

    useEffect(() => {
        dispatch(serviceThunks.fetchServices(userId, handler));
    }, [userId])

    if (pending) {
        return (
            <PriceListContainer style={{alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress/>
            </PriceListContainer>
            )
    }

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
