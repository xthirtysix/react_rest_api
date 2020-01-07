import React, { Component } from 'react';
import openDndService from '../../services/dndapi-service';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton';
import './ItemDetailes.css';

const Record = ({ item, field, label }) => {
  return (
    <div className="card-text mb-1">
      <h5 className="d-inline">{label}</h5>
      <span>{item[field]}</span>
    </div>
  );
};

export {
  Record
};

export default class ItemDetailes extends Component {
  dndApi = new openDndService();

  state = {
    item: ''
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentValue !== prevProps.currentValue) {
      this.updateItem();
    };
  };

  updateItem() {
    const { currentValue, getData } = this.props;

    console.log(currentValue);
    if (!currentValue) {
      return;
    };

    getData(currentValue)
      .then((item) => {
        this.setState({
          item
        });
      });
  };

  render() {
    const { item: { name }, item } = this.state;

    if (!item) {
      return <Spinner />
    };

    return (
      <section className="card card-race flex-grow-1 mb-3">
        <div className="d-flex flex-wrap p-2">
          <div className="card-body">
            <img
              className="card-img float-right"
              src={`img/${name}.png`}
              width="130"
              height="190"
              alt={`${name} view`} />
            <h3 className="card-title">{name}</h3>
            <div>
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, { item });
                })
              }
            </div>
          </div>
        </div>
        <ErrorButton />
      </section>
    );
  };
};