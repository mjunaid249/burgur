import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex items-center flex-col justify-center px-8">
      <h1 className="text-center my-9 text-3xl font-bold">
        Stay<span className="text-yellow-400/80"> Connected!</span>
      </h1>
      <div className="form-control w-[80%]">
        <label className="label">
          <span className="label-text text-xl font-bold text-yellow-400/80">
            Any Suggestion?
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24 resize-none"
          placeholder="Write your suggestions and feedback here"
        ></textarea>
      </div>
      <Link
        to={"/burgur"}
        onClick={() => {
          window.alert("Submitted");
        }}
        className="my-4 btn btn-warning"
      >
        Submit
      </Link>
    </div>
  );
};

export default Contact;
