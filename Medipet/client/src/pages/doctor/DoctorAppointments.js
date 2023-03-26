import React, { useEffect, useState } from "react";
import Layout from '../../components/Layout';
import axios from "axios";
import { Table,message } from "antd";
import moment from "moment";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { useDispatch } from "react-redux";

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const dispatch = useDispatch();

    const getAppointments = async () => {
        try {
          //dispatch(showLoading());
          const res = await axios.get("/api/v1/doctor/doctor-appointments", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          //dispatch(hideLoading());
          if (res.data.success) {
            setAppointments(res.data.data);
          }
        } catch (error) {
          //dispatch(hideLoading());
          console.log(error)
        }
      };
      useEffect(() => {
        getAppointments();
      },[]);

       const handleStatus = async (record, status) => {
        try {
          //dispatch(showLoading());
          const res = await axios.post(
            "/api/v1/doctor/update-status",
            { appointmentId : record._id, status: status },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          //dispatch(hideLoading());
          if (res.data.success) {
            message.success(res.data.message);
            getAppointments();
          }
        } catch (error) {
          message.error("Error changing doctor account status");
          //dispatch(hideLoading());
        }
      };

    const columns = [
        {
            title: "Id",
            dataIndex: "_id",
        },
        // {
        //   title: "Doctor",
        //   dataIndex: "name",
        //   render: (text, record) => (
        //     <span>
        //       {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        //     </span>
        //   ),
        // },
        // {
        //   title: "Phone",
        //   dataIndex: "phone",
        //   render: (text, record) => (
        //     <span>
        //       {record.doctorInfo.phone} 
        //     </span>
        //   ),
        // },
        {
          title: "Date & Time",
          dataIndex: "date",
          render: (text, record) => (
            <span>
              {moment(record.date).format("DD-MM-YYYY")} &nbsp; {moment(record.time).format("HH:mm")}
            </span>
          ),
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title:'Actions',
            dataIndex:'actions',
            render :  (text,record) => (
                <div className="d-flex">
                    {record.status === "pending" && (
                        <div className="d-flex">
                            <button className="btn btn-success" onClick={() => handleStatus(record,'approved')}>Approve</button>
                            <button className="btn btn-danger ms-2" onClick={() => handleStatus(record,'reject')}>Reject</button>
                        </div>
                    )}
                </div>
            )
        }
      ];

  return (
    <Layout>
    <h1 className="page-title">Appointments</h1>
<hr />
<Table columns={columns} dataSource={appointments} />
   </Layout>
  )
}

export default DoctorAppointments