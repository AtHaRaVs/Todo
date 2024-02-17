import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import colors from "../colours/colors";
import "./todolist.css";
import { ClassNames } from "@emotion/react";

export default function TodoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const removeTodo = () => {
    remove(todo.id);
  };
  const toggleTodo = () => {
    toggle(todo.id);
  };
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
          <DeleteIcon style={{ color: colors.primary_green }} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggleTodo}
            style={{ color: colors.primary_green }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={
            <Typography noWrap>
              <div className="allListItems ">{todo.text}</div>
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  remove: PropTypes.func,
  toggle: PropTypes.func,
};
