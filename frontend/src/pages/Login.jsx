import { useState } from "react";
// import useNavigate from "react-dom";

function Login() {
  // const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 m-auto items-statr p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <h3 className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h3>
        <p>
          Please
          {state === "Sign Up" ? " sign up" : " log in"} to book an appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <label htmlFor="name">Full name</label>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>
        {state === "Login" ? (
          <p>
            Create an account?
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary px-1 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-primary px-1 underline cursor-pointer"
            >
              Login
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
