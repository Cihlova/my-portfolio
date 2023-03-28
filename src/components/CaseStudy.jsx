import React from "react";

function CaseStudy(props) {
  return (
    <li className="case-study">
      <a className="case-study_link" href="/">
        <figure>
          <img alt={`${props.name}`} src={`logo/${props.logo}`} width={`${props.width}`}/>
          <figcaption className="visuallyhidden">{props.name}</figcaption>
        </figure>
        <div className="case-study_content">
          <span>{props.name}</span>
          <a href="{props.websiteurl}">{props.websitename}</a>
        </div>
      </a>
    </li>
  );
}

export default CaseStudy;
