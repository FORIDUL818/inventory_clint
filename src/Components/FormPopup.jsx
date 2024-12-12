
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function FormPopup({ isLoginOpen, isSignupOpen, toggleLogin, toggleSignup }) {
  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-center ${isLoginOpen || isSignupOpen ? '' : 'hidden'}`}>
      <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <button onClick={toggleLogin} className="absolute top-2 right-2 text-gray-500">×</button>
        {isLoginOpen && <LoginForm toggleSignup={toggleSignup} />}
        {isSignupOpen && <SignupForm toggleLogin={toggleLogin} />}
      </div>
    </div>
  );
}

export default FormPopup;
