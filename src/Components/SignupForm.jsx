

function SignupForm({ toggleLogin }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">SIGN UP</h2>
      <form className="space-y-4">
        <div>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <input type="password" placeholder="Create password" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="policy" className="mr-2" />
          <label htmlFor="policy" className="text-sm">I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a></label>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Sign Up</button>
      </form>
      <p className="text-center mt-4">
        Already have an account? <button onClick={toggleLogin} className="text-blue-500">Log In</button>
      </p>
    </div>
  );
}

export default SignupForm;
