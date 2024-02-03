import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#EB3936" }}
        enableColorOnDark
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ textAlign: "center", fontWeight: 300, color: "black" }}
          >
            Do one thing that S U C K everyday
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
