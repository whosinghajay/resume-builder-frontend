import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-fit mr-auto ml-auto border-l-2 flex sm:mt-20">
      <div>
        <div className="p-20 leading-10">
          <h1 className="font-bold font-notoSans text-slate-800 text-2xl">Login</h1>
          <p className="text-slate-500 hidden sm:block">Welcome back! Log in to access your account.</p>

          <form className="flex flex-col gap-4 mt-5">
            <input type="email" id="emali" placeholder="Enter your email" className="border-b-2" />
            <input type="passowrd" id="password" placeholder="Enter your password" className="border-b-2" />

            <button className="bg-blue-600 text-white font-semibold rounded-lg p-1">Login</button>
            <button className="flex place-items-center gap-2 rounded-lg border border-blue-600 justify-center"><img src="/googleiconForBUtton.svg" alt="google icon" width={30} height={30} /> Login with Google</button>

            <hr />

            <p className="flex justify-center gap-1 sm:gap-2">Don't have an account? <Link to={"/signup"} className="text-blue-600 font-bold">Signup</Link></p>
          </form>
        </div>
        <p className="text-slate-400 font-notoSans ml-5 text-xs">&#169; Resume4u 2024</p>
      </div>
      <div><img src="/loginPagePhoto.jpg" alt="side photo for login page" height={500} width={500} className="hidden sm:block" /></div>
    </div>
  );
};

export default Login;
