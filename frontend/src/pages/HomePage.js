import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToCreateAccount = () => {
    navigate("/create-account");
  };
  return (
    <>
      <h1>Hello, welcome to my ticketing application!</h1>
      <p>
        Welcome to my ticketing application! Please sign in or create an account
        below to get started.
      </p>

      {/*Style buttons later so they are centered */}
      <div>
        <button onClick={goToLogin}>Log In</button>
        <button onClick={goToCreateAccount}>Create an Account</button>
      </div>
    </>
  );
};

export default HomePage;
