import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner";

const withData = View => {
  class Sub extends Component {
    constructor() {
      super();
      this.state = {
        itemList: [],
      };
    }

    componentDidMount() {
      const { getData } = this.props;

      getData().then(itemList => {
        this.setState({
          itemList,
        });
      });
    }

    render() {
      const { itemList } = this.state;
      const { currentValue, onChangeItem } = this.props;

      const data = itemList;

      if (!data) {
        return <Spinner />;
      }

      return (
        <View
          {...this.props}
          currentValue={currentValue}
          onChangeItem={onChangeItem}
          data={data}
        />
      );
    }
  }
  Sub.propTypes = {
    getData: PropTypes.func.isRequired,
    currentValue: PropTypes.string.isRequired,
    onChangeItem: PropTypes.func.isRequired,
  };

  return Sub;
};

export default withData;
