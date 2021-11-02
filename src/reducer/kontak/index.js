import {
  GET_LIST_KONTAK,
  ADD_KONTAK,
  DELETE_KONTAK,
  DETAIL_KONTAK,
  UPDATE_KONTAK
} from "../../actions/kontakActions";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  AddKontakResult: false,
  AddKontakLoading: false,
  AddKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  detailKontakResult: false,

  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false
};

const KontakReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMessage
      };
    case ADD_KONTAK:
      return {
        ...state,
        AddKontakResult: action.payload.data,
        AddKontakLoading: action.payload.loading,
        AddKontakError: action.payload.errorMessage
      };
    case DELETE_KONTAK:
      return {
        ...state,
        deleteKontakResult: action.payload.data,
        deleteKontakLoading: action.payload.loading,
        deleteKontakError: action.payload.errorMessage
      };

    case DETAIL_KONTAK:
      return {
        ...state,
        detailKontakResult: action.payload.data
      };

    case UPDATE_KONTAK:
      return {
        ...state,
        updateKontakResult: action.payload.data,
        updateKontakLoading: action.payload.loading,
        updateKontakError: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default KontakReducer;
