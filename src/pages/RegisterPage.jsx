import React, { useRef, useState } from "react";
import { schemaRegister } from "../schemas/registerSchema";
import { yupToFormError } from "../utils/yupToFormError";
import LoginPage from "./LoginPage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();

  const styles = {
    textError: "bg-white text-red-500 font-medium",
  };

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const hdlChange = (evt) => {
    // setForm({ ...form, [evt.target.name]: evt.target.value });
    const { name, type, value, checked } = evt.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const refs = {
    username: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await axios.post(
        "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/register",
        form
      );
      console.log(res);
      navigate("/");
      alert("Register Success !");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-dvh">
      <form
        onSubmit={hdlSubmit}
        className="bg-pink-600 shadow-lg text-white flex flex-col justify-center items-center w-[30%] h-auto p-6 rounded-3xl gap-4"
      >
        <h1 className="flex w-[100%] font-bold text-3xl">Register</h1>
        <input
          className="input input-primary w-[100%] text-gray-700"
          type="username"
          name="username"
          value={form.username}
          placeholder="username"
          onChange={hdlChange}
          ref={refs.username}
        />
        <p className={styles.textError}>{errors.username}</p>
        <input
          className="input input-primary w-[100%] text-gray-700"
          type="password"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={hdlChange}
          ref={refs.password}
        />
        <p className={styles.textError}>{errors.password}</p>
        <input
          className="input input-primary w-[100%] text-gray-700"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          placeholder="confirm your password"
          onChange={hdlChange}
          ref={refs.confirmPassword}
        />
        <p className={styles.textError}>{errors.confirmPassword}</p>
        <div className="flex flex-col w-full gap-2">
          <button
            className="btn w-[100%]"
            type="submit"
            // onClick={() => navigate("/")}
          >
            Create Account
          </button>
          <Link to="/" className="hover:underline">
            Have an account already
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
