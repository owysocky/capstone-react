import React from "react";
import Error404 from "./Error404";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
