import React from "react";

function CaseStudy(props) {
    return (
    <div className="case-study">
    <h3>{props.name}</h3>
    <a href="{props.websiteurl}">{props.websitename}</a>
    </div>)
}

export default CaseStudy;