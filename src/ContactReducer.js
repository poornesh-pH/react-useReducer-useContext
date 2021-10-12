const ContactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        ...action.contact,
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contact: action.contact,
      };
    default:
      return state;
  }
};
export default ContactReducer;
