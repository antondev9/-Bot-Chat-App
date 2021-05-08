import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { FaEllipsisH } from "react-icons/fa";
import store from "../../redux/store";
import { DeleteMessage } from "../../redux/chat/actions";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function MessageOptions(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const showContent = (id) => {
    return (
      <div>
        <h6
          className="text-option"
          onClick={(event) => {
            event.preventDefault();
            store.dispatch(DeleteMessage(id));
          }}
        >
          Delete
        </h6>
      </div>
    );
  };

  return (
    <div>
      <FaEllipsisH onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography className={classes.typography}>
          {showContent(props.id)}
        </Typography>
      </Popover>
    </div>
  );
}
