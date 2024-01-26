import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./todoList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
