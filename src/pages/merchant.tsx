import "./merchant.css";
import Tilt from "react-parallax-tilt";

export const Merchant = (): JSX.Element => {
  return (
    // <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="app-con bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center ">
      {/* <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div> */}
      <Tilt>
        <div className="login-container  w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className="form h-full ">
            <div className="form-heading font-poppins text-2xl tracking-widest">
              Please Fill the form
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                className="input"
                id="username"
                required
              />
              <label className="input-label">Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="email"
                className="input"
                id="username"
                required
              />
              <label className="input-label">email</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="profile picture url"
                className="input"
                id="username"
                required
              />
              <label className="input-label">profile picture url</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="website url"
                className="input"
                id="username"
                required
              />
              <label className="input-label">website url</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="site information"
                className="input"
                id="username"
                required
              />
              <label className="input-label">site information</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="password"
                className="input"
                id="username"
                required
              />
              <label className="input-label">password</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="confirm password"
                className="input"
                id="username"
                required
              />
              <label className="input-label">confirm password</label>
            </div>
            <div className="theme-con">
              <p className="select-theme-preamble">select theme</p>
              <div className="theme theme1">
                <span></span>
              </div>
              <div className="theme theme2">
                <span></span>
              </div>
              <div className="theme theme3">
                <span></span>
              </div>
            </div>
            <input
              type="Submit"
              className="submit-btn cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50  "
            />
          </form>
          <div className="product-img"></div>
        </div>
      </Tilt>
    </div>
  );
};
