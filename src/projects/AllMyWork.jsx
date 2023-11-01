import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Projects } from "./projects";

export function AllMyWork() {
  const arrow = <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" />;
  const navigate = useNavigate();

  const navigateHome = function () {
    navigate("/");
  };

  return (
    <>
      <nav className=" work-page-nav navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <button
            onClick={navigateHome}
            className="btn btn-lg btn-dark work-page-button:hover"
          >
            {arrow}
          </button>
        </div>
      </nav>
      <h1 className="work-page-title">This are all my projects</h1>

      <Projects
        link="https://node-api2-ayq5.onrender.com"
        sorce="images/Work1.png"
        alt="newsletter page"
        name="Newsletter Page"
        description="Hello World asdasdasdasdasd"
      />

      <Projects
        link="https://to-do-list-nq78.onrender.com"
        sorce="images/Work2.png"
        alt="Todo List"
        name="Todo List"
        description="Hello World asdasdasdasdasd"
      />

      <Projects
        link="https://drum-kit-9tbm.onrender.com"
        sorce="images/Work4.png"
        alt="Drum-Kit App"
        name="Drum-Kit App"
        description="Hello World asdasdasdasdasd"
      />

      <Projects
        link="https://my-first-personal-site.onrender.com"
        sorce="images/Work3.png"
        alt="First Site Made"
        name="First Site Made"
        description="Hello World asdasdasdasdasd"
      />

      <Projects
        link="https://simon-says-vi67.onrender.com"
        sorce="images/Work5.png"
        alt="Simon-Says App"
        name="Simon-Says App"
        description="Hello World asdasdasdasdasd"
      />

      <Projects
        link="https://tindog-gyv9.onrender.com"
        sorce="images/Work6.png"
        alt="A Dating App model"
        name="A Dating App model"
        description="Hello World asdasdasdasdasd"
      />

      <Projects
        link="https://kepper-app.onrender.com"
        sorce="images/Work7.png"
        alt=" A Secret App"
        name=" A Secret App"
        description="Hello World asdasdasdasdasd"
      />
    </>
  );
}
