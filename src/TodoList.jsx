import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import QuoteCard from "./QuoteCard";

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
    <Box sx={{ m: 3 }}>
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
            maxWidth: 360,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
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
            width: "50%",
            m: 3,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <QuoteCard />
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
