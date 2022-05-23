import React, { useEffect } from "react";
import "./loginpage.scss";
import { Banner2 } from "../../Assets/Banner2";
import Banner from "../../Components/Banner/Banner";
import { Outlet, useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
 
  return (
    <div className="app__login-page">
      
       <Outlet/>
      <Banner />
    </div>
  );
};

export default LoginPage;

