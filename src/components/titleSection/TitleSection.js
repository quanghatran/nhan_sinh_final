import React from "react";
import "./TitleSection.scss";

const TitleSection = (props) => {
  const { titleHeader, subTitle, style } = props;
  return (
    <React.Fragment>
      <div className="titleHolder">
        <h1 className="title" style={style}>
          {titleHeader}
        </h1>
        <p className="subTitle">{subTitle}</p>
      </div>
    </React.Fragment>
  );
};

export default TitleSection;
