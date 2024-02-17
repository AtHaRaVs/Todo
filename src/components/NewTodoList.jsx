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
import colors from "../colours/colors";
import "./todolist.css";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function NewTodoList() {
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
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.primary_black,
          width: "20%",
          boxShadowz: 20,
        }}
      >
        <h3
          className="heading"
          style={{
            color: colors.primary_white,
            paddingLeft: "10px",
          }}
        >
          Today
        </h3>
        <Divider
          sx={{ width: "100%", mt: 3, backgroundColor: colors.primary_gold }}
        />
        <List
          sx={{
            pl: 1,
            mt: 1,
            height: "600px",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "0.5em",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "darkgray",
              outline: "1px solid slategrey",
            },
            bgcolor: colors.primary_black,
            color: colors.primary_white,
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
            </>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          p: 1,
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
            fontFamily: "sans-serif",
          }}
        >
          <b>Todos</b>
          <Divider sx={{ width: "100%", mt: 3 }} />
          <TodoForm addTodo={addTodo} />
        </Typography>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "100%", p: 2 }}>
            <QuoteCard />
          </Box>
          <Box sx={{ width: "100%", p: 2 }}>
            <Timer />
          </Box>
          <Box sx={{ width: "100%", p: 2 }}>
            <YoutubeIntegration />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
