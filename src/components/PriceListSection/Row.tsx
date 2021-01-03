import React, { useMemo, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Box, Collapse, IconButton, Typography} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Service} from "../../redux/modules/Services/types";
import {makeStyles} from "@material-ui/core/styles";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    lastRow: {
        '&:last-child > *': {
            borderBottom: 'unset',
        },
    }
});


interface Props {services: Service[], category: string}

const Row: React.FC<Props> = ({ category, services }) => {
    const classes = useRowStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell align="left" style={{width: '20px'}}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left" style={{width: '180px'}}>
                    {category}
                </TableCell>
                <TableCell />
                <TableCell />
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table aria-label="purchases" style={{padding: 0}}>
                                <TableBody>
                                    {services.map((service) => (
                                        <TableRow key={service.name} className={classes.lastRow}>
                                            <TableCell align="left" style={{width: '30px'}}/>
                                            <TableCell align="left" style={{width: '180px'}}/>
                                            <TableCell>
                                                {service.name}
                                            </TableCell>
                                            <TableCell align="right">{`${service.price} zł`}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default Row;
