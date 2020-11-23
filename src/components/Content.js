import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableData } from '../data/TableData';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#26282e',
        color: theme.palette.common.white,

    },
    body: {
        fontSize: 12,
        color: theme.palette.common.white,
        backgroundColor: '#26282e'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
    }
}))(TableRow);

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const Content = (props) => {
    const classes = useStyles();
    return (
        <div className="content">
            <div className="content-header">
                <h1>THE DAVESTER</h1>
                <img src={process.env.PUBLIC_URL + '/IMG_0888 (1).jpg'}/>
            </div>
            <div className="content-table">
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Track</StyledTableCell>
                                <StyledTableCell className="table-text" align="right">Artist</StyledTableCell>
                                <StyledTableCell align="right">Album</StyledTableCell>
                                <StyledTableCell align="right">Length</StyledTableCell>
                                <StyledTableCell align="right">Likes</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TableData.map((row) => (
                                <StyledTableRow key={row.title} onClick={() => {props.ee.emit('foo', {row})}}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell className="table-text" align="right">{row.artist}</StyledTableCell>
                                    <StyledTableCell align="right">{row.album}</StyledTableCell>
                                    <StyledTableCell align="right">{row.length}</StyledTableCell>
                                    <StyledTableCell align="right">{row.likes}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Content