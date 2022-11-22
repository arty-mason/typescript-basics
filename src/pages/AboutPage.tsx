import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        voluptates laboriosam voluptatum facere qui similique perspiciatis
        veritatis accusantium dolores doloremque.
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Back to Todos
      </button>
    </>
  );
};

export default AboutPage;
