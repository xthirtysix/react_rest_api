import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

const withData = View => {
  class Sub extends Component {
    constructor() {
      super();
      this.state = {
        itemList: [],
        loading: true,
        error: false,
      };
    }

    componentDidMount() {
      const { getData } = this.props;

      getData()
        .then(itemList => {
          this.setState({
            itemList,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }

    render() {
      const { itemList, loading, error } = this.state;
      const { currentValue, onChangeItem } = this.props;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorMessage />;
      }

      return (
        <View
          {...this.props}
          currentValue={currentValue}
          onChangeItem={onChangeItem}
          data={itemList}
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
