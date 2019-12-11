import React, { Component } from 'react';
import Spinner from '../Spinner';

export default class List extends Component {
  state = {
    itemList: []
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  };

  renderItems(array) {
    return array.map((item) => {
      const { name } = item;
      const subname = this.props.renderItem(item);
      const label = subname ? `(${subname})` : '';

      return (
        <option key={name} value={name}>
          {name} {label}
        </option>
      );
    });
  };

  render() {
    const { itemList } = this.state;
    const { currentValue, onChangeItem } = this.props;

    const items = this.renderItems(itemList);

    if (!itemList) {
      return <Spinner />
    };

    return (
      <select className="custom-select mb-1" value={currentValue} onChange={onChangeItem} >
        {items}
      </select>
    );
  };
};
