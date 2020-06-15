import React, { useState, useEfeect } from "react";
import Image3 from "../challenge999.jpg";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
    },
  },
  dialog: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 14,
  },
  buttonArea: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    margin: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  },
}));

export default function ThirdSubmit() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className={classes.dialog}>
          <DialogTitle id="simple-dialog-title">
            <div className={classes.title}>참여해주셔서 감사합니다.</div>
            <div className={classes.buttonArea}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                className={classes.button}
              >
                닫기
              </Button>
            </div>
          </DialogTitle>
        </div>
      </Dialog>
      <img src={Image3} alt="no one" width="100%" />
    </div>
  );
}
