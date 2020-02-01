import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./layouts/Header";
import Content from "./layouts/Content";

const useStyles = makeStyles(() => ({
  app: {
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>
        <CssBaseline />
        <Header />
        <Content />
      </div>
    </Router>
  );
};

export default App;
