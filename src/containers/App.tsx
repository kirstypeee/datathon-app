import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { IStoreState, ICarerSummary } from "../types";
import { getCarers } from "../actions/carers";
import Home from "src/components/upload";
import AppBar from "src/components/app-bar";
import "./App.css";
import Charts from "src/components/charts";

interface IDispatchProps {
  actions: {
    getCarers: () => any;
  };
}
interface IProps {
  carers: ICarerSummary[];
}

class App extends React.Component<IProps & IDispatchProps, {}> {
  public componentWillMount = async () => {
    const { actions } = this.props;
    await Promise.all([actions.getCarers()]);
  };

  public render() {
    const { carers } = this.props;
    return (
      <div id="root">
        <AppBar />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => <Home {...props} carers={carers} />}
          />
        </Switch>
        <Charts />
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  const { carers } = state;
  return { carers };
}

function mapDispatchToProps(dispatch: Dispatch<any>): any {
  return {
    actions: bindActionCreators(
      {
        getCarers
      },
      dispatch
    )
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App) as any
);
