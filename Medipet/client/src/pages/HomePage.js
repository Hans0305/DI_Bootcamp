import React,{useEffect, useState} from "react";
import axios from "axios";
import Layout from './../components/Layout';
import { Col,Row } from 'antd'
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
    //login user data
    const getUserData = async () => {
        try {
          const res = await axios.get("/api/v1/user/getAllDoctors", 
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
          );
          if (res.data.success) {
            setDoctors(res.data.data);
          }
        } catch (error) {
          console.log(error);
        }
    };

useEffect(() => {
        getUserData();
 }, []);

  return (   
      <Layout>
        <Row gutter={20}>
        {doctors && doctors.map((doctor) => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <DoctorList doctor={doctor} />
          </Col>
        ))}
      </Row>
        </Layout>
  
  );
};

export default HomePage;