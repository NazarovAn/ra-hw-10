import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeService, getEditedServiceId, changeServiceField, clearServiceField, clearEditedServiceId } from '../actions/actionCreators';

class ServiceListClassBased extends Component {
  handleRemove = (id) => {
    if (this.props.editedServiceId === id) {
      this.props.onClear();  
    }
    this.props.removeService(id);
  }

  handleEdit = (service) => {
    this.props.editService(service);
  }

  render() {
    const { items } = this.props;

    return (
      <ul className="pd_1" >
        {items.map((service) => {
          const { id, name, price } = service;
          return (
            <li key={ id }>
              <span>{ name } { price }</span>&nbsp;
              <button className="services_button" onClick={ () => this.handleRemove(id) }>X</button>
              <button className="services_button" onClick={ () => this.handleEdit(service) }>Edit</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.serviceList,
  editedServiceId: state.serviceEdit,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeService: (id) => dispatch(removeService(id)),
    editService: (service) => {
      const { id, name, price } = service;
      dispatch(getEditedServiceId(id));
      dispatch(changeServiceField('name', name));
      dispatch(changeServiceField('price', price));
    },
    onClear: () => {
      dispatch(clearServiceField());
      dispatch(clearEditedServiceId());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceListClassBased);
