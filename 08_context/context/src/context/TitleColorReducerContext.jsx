export const titleColorReducer = (state, action) => {
  switch(action.type) {
    case "RED":
      return { ...state, color: "red" };
      case "BLUE":
        return { ...state, color: "blue" };
        default:
          return state;
  }
};