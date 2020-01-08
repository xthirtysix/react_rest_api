import React, { Component } from "react";
import Spinner from "../Spinner";

import openDndService from "../../services/dndapi-service";

const withDetailes = (Wrapped, fn, getData) => {
  return class extends Component {
    dndApi = new openDndService();

    state = {
      item: ""
    };

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.currentValue !== prevProps.currentValue) {
        this.updateItem();
      }
    }

    updateItem() {
      const { currentValue } = this.props;

      if (!currentValue) {
        return;
      }

      getData(currentValue).then(item => {
        this.setState({
          item
        });
      });
    }

    render() {
      const { item } = this.state;
      const { currentValue } = this.props;

      if (!item) {
        return <Spinner />;
      }
      return (
        <Wrapped {...this.props} item={item} currentValue={currentValue}>
          {fn}
        </Wrapped>
      );
    }
  };
};

export default withDetailes;
