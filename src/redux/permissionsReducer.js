const CHANGE_PERMISSION = "CHANGE-PERMISSION";
const CHOOSE_ALL_PERMISSIONS = "CHOOSE-ALL-PERMISSIONS";

const initState = {
  permissions: [
    {id: 'sections', view: false, edit: false, remove: false},
    {id: 'calendar', view: false, edit: false, remove: false},
    {id: 'profile', view: false, edit: false, remove: false},
    {id: 'property', view: false, edit: false, remove: false},
    {id: 'contacts', view: false, edit: false, remove: false},
  ],
};

const syncRelatedActions = (item, action) => {
  if (action === 'view') {
    item.edit = false;
    item.remove = false;
  } else if (action === 'edit') {
    item.remove = false;
  }
  return {
    ...item
  }
}

const changeForAllPermissions = (tempState, action) => {
  let actionValue = tempState.permissions
    .filter(item => item.id !== "sections")
    .every(el => el[action]) ? true : false;

  return {
    ...tempState,
    permissions: tempState.permissions.map(item => {
      if (item.id === "sections") {

        // When disable permission
        if (!actionValue) {
          item = syncRelatedActions(item, action);
        }

        return {
          ...item,
          [action]: actionValue
        }
      }
      return item;
    })
  };
}

const permissionsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_PERMISSION:
      let temp = {
        ...state,
        permissions: state.permissions.map(item => {
          if (item.id === action.permission) {
            let actionValue = !item[action.action];

            // When disable permission
            if (!actionValue) {
              item = syncRelatedActions(item, action.action);
            }

            return {
              ...item,
              [action.action]: actionValue
            }
          }
          return item;
        }),
      }
      temp = changeForAllPermissions(temp, action.action);

      return {
        ...temp
      };
    case CHOOSE_ALL_PERMISSIONS:
      let idx = state.permissions.findIndex(element => element.id === action.permission)
      let actionValue = (state.permissions[idx][action.action]) ? false : true;

      return {
        ...state,
        permissions: state.permissions.map(item => {

          // When disable permission
          if (!actionValue) {
            item = syncRelatedActions(item, action.action);
          }

          return {
            ...item,
            [action.action]: actionValue
          }
        })
      }
    default:
      return state;
  }
}

export const changePermission = (permission, action) => {
  return {
    type: CHANGE_PERMISSION,
    permission,
    action
  }
}

export const chooseAllPermission = (permission, action) => {
  return {
    type: CHOOSE_ALL_PERMISSIONS,
    permission,
    action
  }
}

export default permissionsReducer;
