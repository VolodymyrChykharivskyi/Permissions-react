import React from "react";
import Table from "../Table/Table";
import {connect} from "react-redux";
import Title from "../Title/Title";
import Button from "../Button/Button";
import styles from "./PermissionSection.module.css";

const PermissionSection = ({permissionsData}) => {

  const setLocalStorage = () => {
    const permissions = permissionsData.map(item => {
      return {
        section: item.id,
        permission: {
          view: item.view,
          edit: item.edit,
          remove: item.remove
        }
      }
    })
    localStorage.setItem("permissions", JSON.stringify(permissions));
  }

  return (
    <div className={styles.PermissionSection}>
      <Title title='Permission'/>
      <Table/>
      <div className={styles.Button}>
        <Button action={setLocalStorage}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    permissionsData: state.permissions.permissions
  }
}

export default connect(mapStateToProps)(PermissionSection);
