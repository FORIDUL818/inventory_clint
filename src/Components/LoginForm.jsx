

function LoginForm({ toggleSignup }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">LOGIN</h2>
      <form className="space-y-4">
        <div>
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
        </div>
        <a href="#" className="text-sm text-blue-500 block text-right">Forgot password?</a>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Log In</button>
      </form>
      <p className="text-center mt-4">
        Don't have an account? <button onClick={toggleSignup} className="text-blue-500">Sign Up</button>
      </p>
    </div>
  );
}

export default LoginForm;
