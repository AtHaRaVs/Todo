import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ margin: 10 }}
          id="standard-basic"
          label="Whats on your mind"
          variant="outlined"
          onChange={handleChange}
          value={text}
        />
      </form>
    </ListItem>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.object,
};
