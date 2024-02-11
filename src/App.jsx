import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Navbar from "./components/Navbar";
import NewTodoList from "./components/newTodoList";
import Divider from "@mui/material/Divider";
import colors from "./colours/colors";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Divider
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: colors.primary_white,
        }}
      />
      <NewTodoList />
    </>
  );
}

export default App;
