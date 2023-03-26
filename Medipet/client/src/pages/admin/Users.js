import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import { Table } from "antd";


const Users = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  //getUsers
  const getUsers = async () => {
    try {
      //dispatch(showLoading());
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //dispatch(hideLoading());
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
      //dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (record , text) => (
        <span>{record.isDoctor ? 'Yes' : 'No'}</span>
      )
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block</button>
        </div>
      ),
    },
  ];


  return (
    <Layout>
      <h1 className="text-center m-3">Users List</h1>
      <hr />
      <Table columns={columns} dataSource={users}/>
    </Layout>
  )
};



export default Users

/*const Users = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    const getUsers = async () => {
        try {
          dispatch(showLoading());
          const res = await axios.get("/api/v1/admin/getAllUsers", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          dispatch(hideLoading());
          if (res.data.success) {
            setUsers(res.data.data);
          }
        } catch (error) {
          dispatch(hideLoading());
        }
      };
    
      useEffect(() => {
        getUsers();
      }, []);

      const columns = [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Doctor",
          dataIndex: "isDoctor",
          render: (record , text) => (
            <span>{record.isDoctor ? 'Yes' : 'No'}</span>
          )
        },
        {
          title: "Actions",
          dataIndex: "actions",
          render: (text, record) => (
            <div className="d-flex">
              <button className="btn btn-danger">Block</button>
            </div>
          ),
        },
      ];

  return (
    <Layout>
      <h1 className="page-header">Users List</h1>
      <hr />
      <Table columns={columns} dataSource={users}/>
    </Layout>
  )
}

export default Users*/