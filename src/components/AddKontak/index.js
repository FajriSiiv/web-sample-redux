import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak, updateKontak } from "../../actions/kontakActions";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const { AddKontakResult, detailKontakResult, updateKontakResult } = useSelector(
    state => state.KontakReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (id) {
      //update
      dispatch(updateKontak({ nama: nama, nohp: nohp, id: id }));
    } else {
      //add kontak

      dispatch(addKontak({ nama: nama, nohp: nohp }));
    }
  };

  useEffect(() => {
    if (AddKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [AddKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4> {id ? "Edit Kontak" : "Tambah Kontak"} </h4>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="nama"
          placeholder="Nama.."
          value={nama}
          onChange={e => setNama(e.target.value)}
        />
        <input
          type="text"
          name="nphp"
          placeholder="Nohp.."
          value={nohp}
          onChange={e => setNohp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
