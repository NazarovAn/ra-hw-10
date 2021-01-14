import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addService, changeServiceField, saveEditedService, clearServiceField, clearEditedServiceId } from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.props.editedServiceId) {
      const editedService = {
        id: this.props.editedServiceId,
        name: this.props.item.name,
        price: this.props.item.price,
      }

      this.props.onSaveEdit(editedService);
    } else {
      const { name, price } = this.props.item;
      this.props.onSave(name, price);
    }
    this.props.onClear();
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.props.onClear();
  }

  render() {
    const { item } = this.props;
    return (
    <form onSubmit={ this.handleSubmit }>
      <input className="services_input" name='name' onChange={ this.handleChange } placeholder="Название" value={ item.name } />
      <input className="services_input" name='price' onChange={ this.handleChange } placeholder="Цена" value={ item.price } />
      <button className="services_button" type='submit'>Save</button>
      <button className="services_button" type='submit' onClick={ this.handleCancel }>Cancel</button>
    </form>
  )}
}

ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
  editedServiceId: state.serviceEdit,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (name, price) => dispatch(addService({ name, price })),
    onSaveEdit: (service) => dispatch(saveEditedService(service)),
    onClear: () => {
      dispatch(clearServiceField());
      dispatch(clearEditedServiceId());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceAddClassBased);
