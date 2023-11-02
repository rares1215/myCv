export function Projects(props) {
  return (
    <>
      <div className="container text-center work-page-container">
        <div className="work-page-row row align-items-center">
          <div className="col col-lg-12 col-md-12 col-sm-12">
            <h3 className="work-links-title"> {props.name} </h3>
            <a className="work-page-links" href={props.link}>
              <img
                className="work-page-img"
                src={props.sorce}
                alt={props.alt}
              />
            </a>
            <p className="work-page-descripiton">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
