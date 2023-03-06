import React, { Fragment } from "react";
import  PropTypes  from "prop-types";

const SelectOption = ({value, label}) =>{

    return(
  <Fragment>
<option value={value}>{label}</option>
  </Fragment>
    );
}

SelectOption.propTypes ={
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

SelectOption.defaultProps = {
  value: '',
  placeholder: ''

};

export default SelectOption;