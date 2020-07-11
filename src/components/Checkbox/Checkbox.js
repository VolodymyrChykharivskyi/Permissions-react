import React from "react";
import {connect} from "react-redux";
import {changePermission, chooseAllPermission} from "../../redux/permissionsReducer";

const Checkbox =
  ({checked, description, sectionName, changePermission, chooseAllPermission, disabled = false, action}) => {
  const id = sectionName + description + action;

  const onChangeHandler = () => {
    if (sectionName === 'sections') {
      chooseAllPermission(sectionName, action)
      return;
    }
    changePermission(sectionName, action);
  }

  return (
    <span>
      <label htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} onChange={onChangeHandler} disabled={disabled}/>
        <span>{description}</span>
      </label>
    </span>
  );
}

export default connect(null, {changePermission, chooseAllPermission})(Checkbox);
