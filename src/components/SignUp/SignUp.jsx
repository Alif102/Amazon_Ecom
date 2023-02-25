import { useState } from "react";
import LoggedIn from "./SignCompo/LoggedIn/LoggedIn";
import LoginForm from "./SignCompo/LoginForm/LoginForm";
import './SignUp.css'
function SignUP() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="signUp">
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default SignUP;