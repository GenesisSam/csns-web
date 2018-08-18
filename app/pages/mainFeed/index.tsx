import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import currentUserDenomalizer from "common/denormalizer/currentUser";
import { IAppState } from "app/rootReducers";
import CompactCard from "common/components/compactCard";

const styles = require("./mainFeed.scss");

function mapStateToProps(state: IAppState) {
  return {
    currentUser: currentUserDenomalizer(state.currentUser, state.entities),
  };
}

interface IProps extends ReturnType<typeof mapStateToProps> {}

class Main extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className={styles.container}>
        <CompactCard testImageCount={1} />

        <CompactCard testImageCount={2} />

        <CompactCard testImageCount={3} />

        <CompactCard testImageCount={4} />
        <CompactCard testImageCount={5} />
        <CompactCard testImageCount={6} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
