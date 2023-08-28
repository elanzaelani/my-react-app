import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title="Login" type = "login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
