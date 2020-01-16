import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner";

import OpenDndService from "../../services/dndapi-service";

const withDetailes = Wrapped => {
  class Sub extends Component {
    dndApi = new OpenDndService();

    constructor() {
      super();
      this.state = {
        item: "",
      };
    }

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate({ currentValue: previousValue }) {
      const { currentValue } = this.props;
      if (currentValue !== previousValue) {
        this.updateItem();
      }
    }

    updateItem() {
      const { currentValue, getData } = this.props;

      if (!currentValue) {
        return;
      }

      getData(currentValue).then(item => {
        this.setState({
          item,
        });
      });
    }

    render() {
      const { item } = this.state;

      if (!item) {
        return <Spinner />;
      }
      return <Wrapped {...this.props} item={item} />;
    }
  }

  Sub.propTypes = {
    currentValue: PropTypes.string.isRequired,
    getData: PropTypes.func.isRequired,
  };

  return Sub;
};

export default withDetailes;
