import Inputs from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import "./signup.css";
import { Link } from "react-router-dom";
import { signupUser } from "../../services/signupUser";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("نام و نام‌خانوادگی خود را بنویسید!")
    .min(6, "اسم و فامیل حداقل 6 کاراکتر باشد"),
  email: yup.string().email("ایمیل نامعتبر").required("ایمیل ضروری است."),
  phoneNumber: yup
    .string()
    .required("شماره خود را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره نامعتبر"),
  password: yup
    .string()
    .required("پسورد نزاشتی که ! :)")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "پسورد باید حداقل 8 کاراکتر، به لاتین، حداقل 1 حرف و 1 عدد داشته باشد."
    ),
  passwordConfirmation: yup
    .string()
    .required("ضروری")
    .oneOf([yup.ref("password"), null], "پسوردها یکسان نیستند!"),
});

const SignupForm = () => {
  const [error, setError] = useState(null);

  // for query
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  // user auth
  const auth = useAuth();
  // user authActions
  const setAuth = useAuthActions();

  // for pushing user
  const history = useNavigate();

  useEffect(() => {
    if (auth) history(redirect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirect, auth]);
  
  const onSubmit = async (values) => {
    const { phoneNumber, name, email, password } = values;

    const userData = {
      phoneNumber,
      name,
      email,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      history(redirect);
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
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Inputs formik={formik} name="name" label="نام و نام‌خانوادگی" />
        <Inputs formik={formik} name="email" label="ایمیل" />
        <Inputs
          formik={formik}
          name="phoneNumber"
          label="شماره تماس"
          type="tel"
        />
        <Inputs
          formik={formik}
          name="password"
          label="رمزعبور"
          type="password"
        />
        <Inputs
          formik={formik}
          name="passwordConfirmation"
          label="تکرار رمزعبور"
          type="password"
        />

        <button
          className={formik.isValid ? "button" : "button disabled"}
          type="submit"
        >
          ثبت‌نام
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="push-paragraph">
          قبلا ثبت‌نام کرده‌اید؟
          <Link className="link" to={`/login?redirect=${redirect}`}>
            وارد شوید!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
