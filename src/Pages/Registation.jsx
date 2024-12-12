// import { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// function Registration() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showrePassword, setShowrePassword] = useState(false);
//   const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '',repassword:'' });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const togglerePasswordVisibility = () => {
//     setShowrePassword(!showrePassword);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add registration logic here
//     alert('Registration Successful!');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Inventory Registration</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={form.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={form.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <div
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-gray-500"
//             >
//               {showPassword ? <FaEye /> : <FaEyeSlash />}
//             </div>
//           </div>
//           <div className="relative">
//             <input
//               type={showrePassword ? 'text' : 'password'}
//               name="repassword"
//               placeholder="rePassword"
//               value={form.repassword}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <div
//               onClick={togglerePasswordVisibility}
//               className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-gray-500"
//             >
//               {showrePassword ? <FaEye /> : <FaEyeSlash />}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
//           >
//             Register
//           </button>
//           <button
//             type="button"
//             onClick={() => alert('Redirect to Login Page')}
//             className="w-full py-2 mt-2 text-sm text-blue-600 hover:underline"
//           >
//             Already have an account? Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Registration;


import  { useState } from 'react';
import FormPopup from '../Components/FormPopup';

// import FormPopup from './components/FormPopup';
import Navber from '../Components/MainLaout/Navber';

function Ragistration() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignupOpen(false);
  };

  const toggleSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closePopup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ background:`url("../../src/assets/Images/hero-bg.jpg")` }}>
      <Navber openLogin={toggleLogin} />
      {(isLoginOpen || isSignupOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={closePopup}></div>
      )}
      <FormPopup isLoginOpen={isLoginOpen} isSignupOpen={isSignupOpen} toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
    </div>
  );
}

export default Ragistration;

