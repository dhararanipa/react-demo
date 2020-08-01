export const text = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE':
      return action.text;
    case 'CHANGE':
      return {};
    default:
      return state;
  }
};

export default text
