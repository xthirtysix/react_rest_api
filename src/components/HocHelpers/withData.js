import React, { Component } from "react";
import Spinner from "../Spinner";

const withData = (View) => {
  return class extends Component {
    state = {
      itemList: []
    };

    componentDidMount() {
      this.props.getData().then(itemList => {
        this.setState({
          itemList
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
  };
};

export default withData;
