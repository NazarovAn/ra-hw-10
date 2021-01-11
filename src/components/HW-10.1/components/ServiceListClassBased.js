import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeService } from '../actions/actionCreators';

class ServiceListClassBased extends Component {
  handleRemove = (id) => {
    this.props.removeService(id);
  }

  render() {
    const { items } = this.props;

    return (
      <ul className="pd_1" >
        {items.map(({ id, name, price }) => {
          return (
            <li key={ id }>
              { `${ name } ${ price }` }
              <button className="services_button" onClick={ () => this.handleRemove(id) }>X</button>
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
      price: PropTypes.number,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.seviceList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeService: id => dispatch(removeService(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceListClassBased);
