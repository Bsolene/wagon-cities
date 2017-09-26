import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {

  if (props.selectedCity) {
    return(
      <div className="active-city">
        <h3>{props.selectedCity.name}</h3>
        <p>{props.selectedCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`} />
      </div>
    )
  } else {
    return (
      <div className="active-city">
        <h3>No city selected yet </h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
