import Inputs from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/loginuser";
import { useState } from "react";

const validationSchema = yup.object({
  email: yup.string().email("ایمیل نامعتبر").required("ایمیل ضروری است."),
  password: yup.string().required("پسورد نزاشتی که ! :)"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      console.log(data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
      console.log(error.response.data.message);
      console.log("salam haji update shod ro netylify");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className=" login">
      <form onSubmit={formik.handleSubmit}>
        <Inputs formik={formik} name="email" label="ایمیل" />
        <Inputs
          formik={formik}
          name="password"
          label="رمزعبور"
          type="password"
        />

        <button
          className={formik.isValid ? "button" : "button disabled"}
          type="submit"
        >
          ورود
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="push-paragraph">
          هنوز ثبت‌نام نکرده‌اید؟
          <Link className="link" to="/signup">
            {" "}
            همین حالا ثبت‌نام کنید.{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
