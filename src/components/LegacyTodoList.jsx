import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import QuoteCard from "./QuoteCard";
import YoutubeIntegration from "../YoutubeLinks/Lofi";
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
            border: "1px solid #EB3936",
            borderRadius: "5px",
            p: 2,
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
            display: "flex",
            flexDirection: "column",
            border: "1px solid #EB3936",
            borderRadius: "5px",
            p: 2,
          }}
        >
          <Box>
            <Timer />
          </Box>
          <hr />
          <Box>
            <QuoteCard />
          </Box>
          <hr />
          <Box sx={{ flexGrow: "1" }}>
            <YoutubeIntegration />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

{
  /*   
            </Grid>
            <Grid xs={12}>
              
            </Grid>
            <Grid xs={12}> */
}

{
  /* <Grid>
            <Grid xs={100}>
              <QuoteCard />
            </Grid>
            <Grid xs={100}>
              <Timer />
            </Grid>
          </Grid>
          <Grid
            sx={{ gridColumn: "span 2", gridRow: "span 2", maxWidth: "100%" }}
          >
            <YoutubeIntegration />
          </Grid> */
}
