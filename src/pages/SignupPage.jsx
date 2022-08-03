import SignupForm from "../components/signup/Singup";
import Layout from "../Layout/Layout";
import './signupPage.css'
const SignupPage = () => {
  return (
    <Layout>
      <div className="Form-wrapper">
        <SignupForm />
      </div>
    </Layout>
  );
};

export default SignupPage;
