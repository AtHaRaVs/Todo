import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PropTypes from "prop-types";
import colors from "../colours/colors";
import { color } from "framer-motion";

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
          inputProps={{
            style: {
              color: colors.primary_gold, // Change text color
            },
          }}
          InputLabelProps={{
            style: {
              color: colors.primary_gold, // Change label color
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: colors.primary_gold, // Change border color
              },
              "&:hover fieldset": {
                borderColor: colors.primary_gold, // Change hover border color
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.primary_gold, // Change focused border color
              },
            },
          }}
        />
      </form>
    </ListItem>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.object,
};
