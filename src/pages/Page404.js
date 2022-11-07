import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <div>
          <img
            src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"
            alt=""
          />
        </div>
        <div>
          <Link to="/app">
            <button
              className="btn btn-primary"
              style={{
                padding: "10px",
                backGroungColor: "violet",
                fontSize: "18px",
                color: "Red",
              }}
            >
              Go to home Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
