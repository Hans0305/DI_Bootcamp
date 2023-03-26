import React from 'react';
import Layout from "../components/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { message,Tabs } from 'antd';
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const NotificationPage = () => {
    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //handle read notification
    const handleMarkAllRead = async ()=>{
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/get-all-notification", {userId : user._id} , {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (res.data.success) {
              message.success(res.data.message);
              //dispatch(setUser(res.data.data));
            } else {
              message.error(res.data.message);
            }
          } catch (error) {
            dispatch(hideLoading());
            message.error("Something went wrong");
          }
    };
    // handle delete notification
    const handleDeletekAllRead= async()=>{
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/delete-all-notification", {userId : user._id} , {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (res.data.success) {
              message.success(res.data.message)
              //dispatch(setUser(res.data.data));
            } else {
              message.error(res.data.message);
            }
          } catch (error) {
            dispatch(hideLoading());
            message.error("Something went wrong");
          }
    };
  return (
    <Layout>
      <h1 className="page-title">Notifications</h1>
      <hr />

      <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <div className="d-flex justify-content-end">
          <h4 className="p-2 text-primary" styles = {{cursor:"pointer"}} onClick={handleMarkAllRead} >
          Mark as Read
            </h4>
          </div>

          {user?.notification.map((notificationMgs) => (
            <div className="card p-2 mt-2" >
                <div className="card-text" onClick={()=>navigate(notificationMgs.onClickPath)}>
                    {notificationMgs.message}
                    </div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="seen" key={1}>
          <div className="d-flex justify-content-end">
            <h4 className="p-2 text-primary" styles = {{cursor:"pointer"}} onClick={handleDeletekAllRead}>
                Delete All Notifications
            </h4>
          </div>
          {user?.seennotification.map((notificationMgs) => (
            <div className="card p-2 mt-2" >
                <div className="card-text" onClick={()=>navigate(notificationMgs.onClickPath)}>
                    {notificationMgs.message}
                    </div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  )
}

export default NotificationPage