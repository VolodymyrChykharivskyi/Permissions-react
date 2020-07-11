import React from "react";
import styles from './TableItem.module.css';
import Checkbox from "../Checkbox/Checkbox";

const TableItem = (props) => {
  let {view, edit, remove, id: sectionName} = props.state;

  return (
    <div className={styles.TableItem}>
      <div>
        {sectionName[0].toUpperCase() + sectionName.slice(1)}
      </div>
      <div>
        {
          sectionName === 'sections' ?
            <div className={styles.actionsAll}>
              <Checkbox
                checked={view}
                description='Check all'
                sectionName={sectionName}
                action='view'
              />
              <Checkbox
                checked={edit}
                description='Check all'
                sectionName={sectionName}
                action='edit'
                disabled={!view}
              />
              <Checkbox
                checked={remove}
                description='Check all'
                sectionName={sectionName}
                action='remove'
                disabled={!edit}
              />
            </div>
            : <div className={styles.actions}>
              <Checkbox
                checked={view}
                description='View'
                sectionName={sectionName}
                action='view'
              />
              <Checkbox
                checked={edit}
                description='Edit'
                sectionName={sectionName}
                action='edit'
                disabled={!view}
              />
              <Checkbox
                checked={remove}
                description='Remove'
                sectionName={sectionName}
                action='remove'
                disabled={!edit}
              />
            </div>
        }
      </div>
    </div>
  );
}

export default TableItem;
