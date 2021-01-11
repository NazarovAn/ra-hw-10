import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSave(this.props.item.name, this.props.item.price);
  }

  render() {
    const { item } = this.props;

    return (
    <form onSubmit={ this.handleSubmit }>
      <input className="services_input" name='name' onChange={ this.handleChange } value={ item.name } />
      <input className="services_input" name='price' onChange={ this.handleChange } value={ item.price } />
      <button className="services_button" type='submit'>Save</button>
    </form>
  )}
}

ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (name, price) => dispatch(addService(name, price)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceAddClassBased);
