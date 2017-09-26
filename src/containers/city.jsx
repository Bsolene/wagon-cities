import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return (
      <h3 onClick={this.handleClick}>
        {this.props.city.name}
      </h3>
    );
  };

}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
