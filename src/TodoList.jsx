import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import QuoteCard from "./QuoteCard";
import Grid from "@mui/system/Unstable_Grid";
import YoutubeIntegration from "./YoutubeLinks/Lofi";
import Rain from "./YoutubeLinks/Rain";
import Timer from "./Timer";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), text: text, completed: false }];
    });
  };

  return (
    <Box
      sx={{
        m: 3,
        height: 800,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Todos
        <Divider sx={{ width: "100%", mt: 3 }} />
        <TodoForm addTodo={addTodo} />
      </Typography>
      <Box
        sx={{
          m: 3,
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <List
          sx={{
            mt: 3,
            width: "50%",
            height: "500px",
            maxWidth: "50%",
            maxHeight: "500px",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "0.5em",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "darkgray",
              outline: "1px solid slategrey",
            },
            bgcolor: "background.paper",
          }}
        >
          {todos.map((todo) => (
            <>
              <TodoItem
                todo={todo}
                key={todo.id}
                remove={removeTodo}
                toggle={toggleTodo}
              />
              <Divider sx={{ width: "100%" }} />
            </>
          ))}
        </List>
        <Box
          sx={{
            mt: 3,
            ml: 3,
            width: "50%",
            height: "500px",
            maxWidth: "50%",
            maxHeight: "500px",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gridGap: "8px",
          }}
        >
          <Grid>
            <Grid xs={100}>
              <QuoteCard />
            </Grid>
            <Grid xs={100}>
              <YoutubeIntegration />
            </Grid>
            <Grid xs={100}>
              <Rain />
            </Grid>
            <Grid xs={100}>
              <Timer />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {

//       })}
//     </List>
//   );
// }
