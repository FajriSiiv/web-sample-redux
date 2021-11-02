import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";
export const getListKontak = () => {
  return dispatch => {
    //loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    });

    //get API
    axios({
      method: "get",
      url: "https://redux--11.herokuapp.com/api",
      timeout: 120000
    })
      .then(res => {
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false
          }
        });
      })
      .catch(err => {
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message
          }
        });
      });
  };
};

export const addKontak = data => {
  return dispatch => {
    //loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    });

    //get API
    axios({
      method: "post",
      url: "https://redux--11.herokuapp.com/api",
      timeout: 120000,
      data: data
    })
      .then(res => {
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false
          }
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message
          }
        });
      });
  };
};

export const deleteKontak = id => {
  return dispatch => {
    //loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    });

    //get API
    axios({
      method: "delete",
      url: "https://redux--11.herokuapp.com/api" + id,
      timeout: 120000
    })
      .then(res => {
        console.log("3.masuk reducer add kontak api");
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false
          }
        });
      })
      .catch(err => {
        console.log("3.masuk error reducer add kontak api", err.message);
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message
          }
        });
      });
  };
};

export const detailKontak = data => {
  return dispatch => {
    dispatch({
      type: "DETAIL_KONTAK",
      payload: {
        data: data
      }
    });
  };
};

export const updateKontak = data => {
  return dispatch => {
    //loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    });

    //get API
    axios({
      method: "put",
      url: "https://redux--11.herokuapp.com/api" + data.id,
      timeout: 120000,
      data: data
    })
      .then(res => {
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false
          }
        });
      })
      .catch(err => {
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message
          }
        });
      });
  };
};
