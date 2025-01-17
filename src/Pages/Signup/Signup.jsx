const Signup = () => {
    return (
      <div className="hero bg-base-200 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">Sign up</h1>
        </div>
        <div className="card  w-full max-w-md shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
  