import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Navbar from "./components/Navbar";

import Divider from "@mui/material/Divider";
import colors from "./colours/colors";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Divider
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: colors.primary_gold,
        }}
      />
      <TodoList />
    </>
  );
}

export default App;
