import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterServices, clearFilter, updateFilteredList } from '../actions/actionCreators';

class ServiceFilterClassBased extends Component {
  constructor(props) {
    super(props);
    this.delayTimer = null;
  }

  handleChange = (event) => {
    const criteria = event.target.value;    
    clearTimeout(this.delayTimer);

    if (criteria.length > 0) {
      this.delayTimer = setTimeout(() => this.props.onFilter(event.target.value, this.props.initialList), 500);
    } else {
      this.props.onClear();
    }
  }

  componentDidUpdate() {
    this.props.onUpdate(this.props.initialList, this.props.isFiltered);
  }
  
  render() {
    return (
      <input className="services_input" placeholder="Поиск услуги" onChange={ this.handleChange } />
    )
  }
}

ServiceFilterClassBased.propTypes = {
  initialList: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  initialList: state.serviceList,
  isFiltered: state.serviceFilter.isFiltered,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (value, list) => dispatch(filterServices(value, list)),
    onClear: () => dispatch(clearFilter()),
    onUpdate: (list, isFiltered) => {
      if (isFiltered) {
        dispatch(updateFilteredList(list));
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceFilterClassBased);
