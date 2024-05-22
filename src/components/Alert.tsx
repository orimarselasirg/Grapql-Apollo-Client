import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
    ref: React.Ref<unknown>,
  ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  title: string
  dialog: string
  closeButton: string
  open: boolean
  setOpen: (bool: boolean) => void
}

export const AlertComponent = ({closeButton, open=false, dialog, title, setOpen}: Props) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/home");
    }, 300);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           {dialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{closeButton}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
