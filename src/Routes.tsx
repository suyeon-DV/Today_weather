import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

function Routes() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
