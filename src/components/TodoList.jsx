import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import QuoteCard from "./QuoteCard";
import Lofi from "../YoutubeLinks/Lofi";
import Rain from "../YoutubeLinks/Rain";
import Timer from "./Timer";
import colors from "../colours/colors";
import "./todolist.css";

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
    <Box sx={{ backgroundColor: colors.primary_white }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: colors.primary_white,
        }}
      >
        <Box
          sx={{
            backgroundColor: colors.primary_black,
            width: "20%",
            boxShadowz: 20,
            borderBottomRightRadius: "10px",
          }}
        >
          <h3
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
              borderBottomRightRadius: "10px",
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
            pt: 5,
            pl: 5,
            pr: 5,
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              boxShadow: 20,
              borderRadius: "1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.primary_green,
              pl: 5,
            }}
          >
            <Box sx={{ width: "50%" }}>
              <TodoForm addTodo={addTodo} />
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                <b className="heading" style={{ color: colors.primary_white }}>
                  Todos
                </b>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 25,
          p: 1,
          backgroundColor: colors.primary_green,
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 15,
        }}
      >
        <Box sx={{ width: "100%", p: 5 }}>
          <QuoteCard />
        </Box>
        <Box
          sx={{
            p: 5,
            width: "50%",
            color: colors.primary_gold,
          }}
        >
          <Timer />
        </Box>
      </Box>

      <Box
        sx={{
          p: 5,
          mt: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>MUSIC</h3>
        <Box
          sx={{
            boxShadow: 10,
            borderRadius: "10px",
            backgroundColor: colors.primary_green,
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Lofi />
            <Box sx={{ width: "10px" }}></Box>
            <Rain />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

{
  /* <Box
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
        </Box> */
}
