import React from "react";
import "./About.css";

const Statement = (props) => {
  return (
    <div className="about">
      <strong style={{ textAlign: "center" }}>
        <h2 style={{ margin: 0 }}>
          I intend to blend research and engineering to create something useful!
        </h2>
      </strong>
      <p>
        I strongly believe in getting a practical experience of whatever
        intrigues me. Thanks to this ideology of mine, I've had a small yet
        impactful experience in teaching, research and now, engineering!
      </p>
      <p>
        Right after graduating, I started teaching a bunch of kids whatever I
        knew. This led me to pursue an advanced degree in two of my favourite
        subjects, mathematics and computers aka scientific computing.
      </p>
      <p>
        This degree further inspired me to pursue research, during which I
        realised something important and very intersting that - so many fields
        excite me that I can't choose and commit to any one of them. Hence I
        ended up in engineering!
      </p>
      <p>
        I'm having a fun time building useful products and picking up new things
        on the go! Fortunately, I have the independence to experiment and then
        implment rather than just doing pre-defined tasks.
      </p>
      <p>
        I have learned how to build products out of a vision and deploy them the
        right way using the optimal services.
      </p>
    </div>
  );
};

export default Statement;
