import React, { useState, useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import Axios from "axios";

export default props => {
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState([]);

  const getAllLeads = async () => {
    Axios.get("http://5dedb71ab3d17b00146a1c03.mockapi.io/api/contact/users")
      .then(data => {
        setLeads(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getAllLeads();
  }, []);
  if (loading) {
    return (
      <MainLayout>
        <div>
          <h3 className="loading">Loading....</h3>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>All leads or contacts</h1>
      <table border="1" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>SN</th>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>subject</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(({ name, phone, email, subject, status }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{subject}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
};
