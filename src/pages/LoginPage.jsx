import LoginForm from "../components/login/Login";
import Layout from "../Layout/Layout";
import './signupPage.css'
const LoginPage = () => {
  return (
    <Layout>
      <div className="Form-wrapper">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
