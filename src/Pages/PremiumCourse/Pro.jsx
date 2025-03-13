import React from "react";
import demo from "../../../public/demo.json";
export default function Pro() {
  return (
    <div>
      <h2>Our Premium Course</h2>
      {demo.map((d) => {
        console.log(d);

        return <div>{d.isPremium ? <h3>{d.course_name}</h3> : "not"}</div>;
      })}
    </div>
  );
}
