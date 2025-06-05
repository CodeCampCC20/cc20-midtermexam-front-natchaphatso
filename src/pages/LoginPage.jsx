import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [inputError, setInputError] = useState(formData);

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setInputError((prev) => ({ ...prev, [name]: "" }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await axios.post(
        "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login",
        formData
      );
      console.log(res);
      toast.success("Login Successful !");
      alert("Login Successful !");
      navigate("/todolists");
    } catch (err) {
      toast.error("Login Invalid !");
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        const err = err.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(err);
      }
    }
  };

  return (
    <div className=" flex justify-center items-center h-dvh">
      <form
        onSubmit={hdlSubmit}
        className="bg-pink-600 shadow-lg text-white flex flex-col justify-center items-center w-[30%] h-auto p-6 rounded-3xl gap-6"
      >
        <h1 className="flex w-[100%] font-bold text-3xl">Velkommen !</h1>
        <input
          className="input input-primary w-[100%] text-gray-700"
          type="username"
          name="username"
          error={inputError.username}
          value={formData.username}
          placeholder="username"
          onChange={hdlChange}
          required
        />
        <input
          className="input input-primary w-[100%] text-gray-700"
          type="password"
          name="password"
          error={inputError.password}
          value={formData.password}
          placeholder="password"
          onChange={hdlChange}
          required
        />
        <div className="flex flex-col w-full gap-2">
          <button className="btn w-[100%]" type="submit" required>
            LOG IN
          </button>
          <Link to="/register" className="hover:underline">
            Didn't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
