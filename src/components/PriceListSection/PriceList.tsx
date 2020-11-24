import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PriceListContainer, StyledButton, StyledCreateIcon } from "./PriceListSection.styled";

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

const PriceList: React.FC = () => {
    return (
        <PriceListContainer>
            <StyledButton variant="contained" color="primary">Dodaj</StyledButton>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox"></TableCell>
                            <TableCell>Usługa</TableCell>
                            <TableCell align="right">Cena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell padding="checkbox"><StyledCreateIcon onClick={() => console.log('edit')}/></TableCell>
                                <TableCell component="th" scope="row">
                                    {row.services}
                                </TableCell>
                                <TableCell align="right">
                                    {`${row.price}zł`}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PriceListContainer>
    )
};

export default PriceList;
