import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant={"h5"} color={"inherit"}>{ props.title || "Duplica" }</Typography>
    </Toolbar>
  </AppBar>;

export default Header;
