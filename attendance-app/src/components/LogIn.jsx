import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
// import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

export default function LogIn() {
  const [cookies, setCookie] = useCookies(["employee"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Store the data in a cookie
    setCookie("employee", JSON.stringify(data), { path: "/" });
    
    //redirect to success.html
    window.location.replace("/success.html");
    // Log the data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MDBInput
        {...register("employeeID", {
          required: "Employee ID is required",
          pattern: /\d+/,
        })}
        type="text"
        id="employeeID"
        label="Employee ID"
      />
      {errors.employeeID?.type === "required" && (
        <span className="text-danger" role="alert">
          Employee ID is required
        </span>
      )}
      {errors.employeeID?.type === "pattern" && (
        <span className="text-danger" role="alert">
          Please put numbers only!
        </span>
      )}
      <MDBInput
        {...register("fullName", {
          required: "Full Name is required",
          pattern: /^[A-Za-z]+$/i,
        })}
        type="text"
        id="fullName"
        label="Full name"
      />
      {errors.fullName?.type === "required" && (
        <span className="text-danger" role="alert">
          Full name is required
        </span>
      )}
      {errors.fullName?.type === "pattern" && (
        <span className="text-danger" role="alert">
          Please put alphabet only!
        </span>
      )}

      <MDBBtn type="submit" block>
        Time in
      </MDBBtn>
    </form>
  );
}
