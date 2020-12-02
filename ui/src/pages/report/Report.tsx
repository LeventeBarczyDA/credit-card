import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import Ledger from "@daml/ledger";
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { ContractId } from "@daml/types";
import { CreditCard, CreditCardApplication, DeclinedApplication, RequestNewCard  } from "@daml.js/cc-precook-0.0.1/lib/CreditCard";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";

export default function Report() {
  const classes = useStyles();
  const party = useParty();
  const ledger : Ledger = useLedger();
  const creditCards = useStreamQuery(CreditCard).contracts;
  const ccApps = useStreamQuery(CreditCardApplication).contracts;
  const ccDeclines = useStreamQuery(DeclinedApplication).contracts;

  type InputFieldsForApplication = Omit<CreditCardApplication, "owner">;
  const defaultApplicationProps : InputDialogProps<InputFieldsForApplication> = {
    open: false,
    title: "New Asset",
    defaultValue: {
      underwriter: "",
      name: "",
      ccType: "Perks",
      currency: "USD",
    },
    fields: {
      underwriter: {
        label: "Underwriter",
        type: "text"
      },
      name: {
        label: "Name",
        type: "text"
      },
      ccType: {
        label: "Card Rewards",
        type: "selection",
        items: ["Points", "CashBack", "Perks"]
      },
      currency: {
        label: "Currency",
        type: "selection",
        items: ["USD", "CHF", "GBP", "EUR", "CAD", "MXN", "AUD", "JPY"]
      }
    },
    onClose: async function() {}
  };
  const [applicationProps, setApplicationProps] = useState(defaultApplicationProps);
  function showApplication() {
    async function onClose(state : InputFieldsForApplication | null) {
      setApplicationProps({ ...defaultApplicationProps, open: false});
      if (!state) return;
      const withOwner = { ...state, owner:party};
      await ledger.create(CreditCardApplication, withOwner);
    };
    setApplicationProps({...defaultApplicationProps, open: true, onClose});
  };

  async function justRequestCard(declinedId: ContractId<DeclinedApplication>) {
    await ledger.exercise(
      DeclinedApplication.RequestNewCard,
      declinedId, {});
  }

  return (
    <>
      <InputDialog { ...applicationProps } />
      <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showApplication()}>
        Apply For a Credit Card!
      </Button>
      <h1>Applications</h1>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell key={0} className={classes.tableCell}>Underwriter</TableCell>
            <TableCell key={1} className={classes.tableCell}>Name</TableCell>
            <TableCell key={2} className={classes.tableCell}>Type</TableCell>
            <TableCell key={3} className={classes.tableCell}>Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ccApps.map(a => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={0} className={classes.tableCell}>{a.payload.underwriter}</TableCell>
              <TableCell key={1} className={classes.tableCell}>{a.payload.name}</TableCell>
              <TableCell key={2} className={classes.tableCell}>{a.payload.ccType}</TableCell>
              <TableCell key={3} className={classes.tableCell}>{a.payload.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h1>Declined Applications</h1>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell key={0} className={classes.tableCell}>Underwriter</TableCell>
            <TableCell key={1} className={classes.tableCell}>Name</TableCell>
            <TableCell key={2} className={classes.tableCell}>Consider...</TableCell>
            <TableCell key={3} className={classes.tableCell}>Currency</TableCell>
            <TableCell key={4} className={classes.tableCell}>Reason</TableCell>
            <TableCell key={5} className={classes.tableCell}>Re-apply</TableCell>         
          </TableRow>
        </TableHead>
        <TableBody>
          {ccDeclines.map(a => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={0} className={classes.tableCell}>{a.payload.underwriter}</TableCell>
              <TableCell key={1} className={classes.tableCell}>{a.payload.name}</TableCell>
              <TableCell key={2} className={classes.tableCell}>{a.payload.suggestedCcType}</TableCell>
              <TableCell key={3} className={classes.tableCell}>{a.payload.currency}</TableCell>
              <TableCell key={4} className={classes.tableCell}>{a.payload.reason}</TableCell>
              <TableCell key={5} className={classes.tableCellButton}>
                <Button 
                  color="primary" 
                  size="small" 
                  className={classes.choiceButton} 
                  variant="contained" 
                  disabled={a.payload.owner !== party} 
                  onClick={() => justRequestCard(a.contractId)}
                >Request</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h1>Approved Credit Cards</h1>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell key={0} className={classes.tableCell}>Underwriter</TableCell>
            <TableCell key={1} className={classes.tableCell}>Name</TableCell>
            <TableCell key={2} className={classes.tableCell}>Type</TableCell>
            <TableCell key={3} className={classes.tableCell}>Currency</TableCell>
            <TableCell key={4} className={classes.tableCell}>Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {creditCards.map(a => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={0} className={classes.tableCell}>{a.payload.underwriter}</TableCell>
              <TableCell key={1} className={classes.tableCell}>{a.payload.name}</TableCell>
              <TableCell key={2} className={classes.tableCell}>{a.payload.ccType}</TableCell>
              <TableCell key={3} className={classes.tableCell}>{a.payload.currency}</TableCell>
              <TableCell key={4} className={classes.tableCell}>{a.payload.limit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
