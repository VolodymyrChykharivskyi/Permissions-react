import React from "react";
import styles from "./Table.module.css";
import TableItem from "../TableItem/TableItem";
import {connect} from "react-redux";

const Table = ({permissions}) => {
  return (
    <div className={styles.Table}>
      {
        permissions.map(item => {
            return (
              <TableItem
                key={item.id}
                state={item}
              />
            );
          }
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    permissions: state.permissions.permissions
  }
}

export default connect(mapStateToProps)(Table);
