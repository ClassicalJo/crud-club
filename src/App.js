import React from 'react';
import Components from "./components"
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    background: "white",
  }
})

function App() {
  let classes = useStyles()
  return (
    <Router>
      <Container className={classes.root}>
        <Components.Header />
        <Switch>
          <Route path="/form">
            <Components.Form />
          </Route>
          <Route path="/list">
            <Components.List />
          </Route>
          <Route path="/">
            <Components.Main />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
