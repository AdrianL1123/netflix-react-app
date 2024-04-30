import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", mb: 10 }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "red", flexGrow: 1 }}
        >
          Netflix
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Movies
        </Button>
        <Button color="inherit" component={Link} to="/shows">
          TV Shows
        </Button>
      </Toolbar>
    </AppBar>
  );
}
