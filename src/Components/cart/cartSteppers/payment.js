import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 400
  }
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}
const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99)
];
const invoiceSubtotal = subtotal(rows);

const Payment = () => {
  const classes = useStyles();

  return (
    <div className="PaymentAndShipment">
      <div className="Slip">
        <div>
          <h1>Receipt</h1>
          <p>
            <span>Name : </span> AbdulBasit
          </p>
          <p>
            <span>Dated : </span>12 may 2019
          </p>
          <p>
            <span>Contact Number : </span> 03xxxxxxxx
          </p>
          <p>
            <span>Address : </span> Gulshan e iqbal
          </p>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={2} />
                  <TableCell colSpan={1}>Subtotal</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
      <div className="Shipment">
        <div>
          <h1>Shipment</h1>
          <p>Shipment Duration can be vary from 2 to 4 days</p>
          <h1>Payment</h1>
          <p>Cash On Delivery</p>
          <h1>Refund Policy</h1>
          <p>Products can be refund within 3 working days.</p>
          <p />{" "}
        </div>
      </div>
    </div>
  );
};
export default Payment;
