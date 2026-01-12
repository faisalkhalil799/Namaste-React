import { useContext, useState } from "react";
import Context from "../utils/Context";

const Account = () => {
  const { loggedInUser, setLoggedInUser } = useContext(Context);
  const [inputValue, setInputValue] = useState(loggedInUser);

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-slate-800">Account</h1>

      <p className="mb-6 text-slate-600">
        Logged in as:{" "}
        <span className="font-semibold text-slate-800">{loggedInUser}</span>
      </p>

      <div className="flex items-center gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Update username"
          className="flex-1 rounded-md border border-slate-300 px-3 py-2 
                     text-slate-700 placeholder-slate-400 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          onClick={() => setLoggedInUser(inputValue)}
          className="rounded-md bg-emerald-600 px-5 py-2 
                     text-sm font-semibold text-white 
                     hover:bg-emerald-700 
                     active:scale-95 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Account;
