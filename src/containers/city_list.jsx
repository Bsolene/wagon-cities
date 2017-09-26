import React, { Component } from 'react';
import City from './city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    return (this.props.cities.map((city) => {
      return (
        <City
        key={city.slug}
        city={city}
        />
      );
    }))
  };

  render() {
    return (
      <div className="list-group-item">
        {this.renderList()}
      </div>
    );
  };

}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

