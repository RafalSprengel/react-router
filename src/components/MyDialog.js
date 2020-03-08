import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ResponsiveDialog({ handleDialog }) {
  return (
    <div>
      <Dialog
        open
        onClose={handleDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Check your login data"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            User name or password is incorrect!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}