const ContactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact];
    case 'DELETE_CONTACT':
      return [...state.filter((item) => item.id !== action.id)];
    default:
      return state;
  }
};
export default ContactReducer;
