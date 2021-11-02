import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak, deleteKontak, detailKontak } from "../../actions/kontakActions";

const ListKontak = () => {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult
  } = useSelector(state => state.KontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getlistkontak
    console.log("1.use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      console.log("5.masuk component did update");
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h1>List Kontak</h1>
      {getListKontakResult ? (
        getListKontakResult.map(kontak => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>Hapus</button> -
              <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p> Loading... </p>
      ) : getListKontakError ? (
        getListKontakError
      ) : (
        "Data Kosong"
      )}
    </div>
  );
};

export default ListKontak;
