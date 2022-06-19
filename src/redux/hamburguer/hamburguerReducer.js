import { TOGGLE_HAMBURGUER_HIDDEN} from "./hamburguerActions";

const INITIAL_STATE = {
  hidden: false,
};

const hamburguerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_HAMBURGUER_HIDDEN:
      return {
        ...state,
        hidden: action.payload,
      };


    default:
      return state;
  }
};

export default hamburguerReducer;
