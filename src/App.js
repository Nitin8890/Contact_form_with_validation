import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mail, setmail] = useState("");
  const [check, setcheck] = useState("");
  const [msg, setmsg] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [errors, setErrors] = useState({});
  const handleclick = () => {
    setIsClicked(!isClicked);
  };
  const handleclick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const handleremove = () => {
    setcheck("");
    setfname("");
    setlname("");
    setmail("");
    setmsg("");
  };
  const validateForm = () => {
    const errors = {};
    if (!fname.trim()) errors.fname = "First name is required";
    if (!lname.trim()) errors.lname = "Last name is required";
    if (!mail.trim()) {
      errors.mail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      errors.mail = "Invalid email address";
    }
    if (!msg.trim()) errors.msg = "Message cannot be empty";
    if (!check) errors.check = "You must tick the checkbox";
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      alert("Form Submitted successfully!!!!");
    }
  };
  return (
    <div className="h-screen w-screen bg-emerald-300 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="max-w-fit bg-slate-50 rounded-md p-5 space-y-7">
        <div className="flex justify-between">
          <h1 className="text-zinc-900 font-bold text-2xl">Contact Us</h1>
          <button className="text-zinc-600 text-xs" onClick={handleremove}>
            Clear
          </button>
        </div>
        <div className="grid items-center justify-center sm:flex sm:justify-between sm:items-center space-x-5">
          <div className="grid">
            <label>First Name</label>
            <input
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              required
              className="border-2 border-zinc-200 rounded-md"
            />
            {errors.fname && (
              <p className="text-red-500 text-sm">{errors.fname}</p>
            )}
          </div>
          <div className="grid">
            <label>Last Name</label>
            <input
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              required
              className="border-2 border-zinc-200 rounded-md"
            />{" "}
            {errors.lname && (
              <p className="text-red-500 text-sm">{errors.lname}</p>
            )}
          </div>
        </div>
        <div className="grid">
          <label>Email Address</label>
          <input
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            required
            className="border-2 border-zinc-200 rounded-md"
          ></input>
          {errors.mail && <p className="text-red-500 text-sm">{errors.mail}</p>}
        </div>
        <div>
          <h1>Query Type</h1>
          <div className="space-x-5">
            <button
              required
              className={`space-x-1 rounded-md h-10 w-44 border-2 border-zinc-200 ${
                isClicked ? "bg-green-400 " : "bg-slate-50 hover:bg-slate-50"
              }`}
              onClick={handleclick}
            >
              <input type="radio" /> General Enquiry
            </button>
            <button
              required
              className={`space-x-1 rounded-md h-10 w-44 border-2 border-zinc-200 ${
                isClicked2 ? "bg-green-400 " : "bg-slate-50 hover:bg-slate-50"
              }`}
              onClick={handleclick2}
            >
              <input type="radio" /> Support Request
            </button>
          </div>
        </div>
        <div className="grid">
          <label>Message</label>
          <textarea
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
            required
            type="text"
            className="border-2 border-zinc-200 overflow-y-scroll rounded-md"
          ></textarea>
          {errors.msg && <p className="text-red-500 text-sm">{errors.msg}</p>}
        </div>
        <div className="flex text-wrap space-x-2">
          <input required type="checkbox" className="rounded-md"></input>
          <span>I consent to being contacted by the team.</span>
        </div>
        {errors.check && <p className="text-red-500 text-sm">{errors.check}</p>}
        <button
          
          className="rounded-md border-2 border-zinc-200 text-white bg-green-700 w-full p-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
