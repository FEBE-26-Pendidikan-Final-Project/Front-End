import React from "react";
import { useNavigate } from "react-router-dom";

function LiterationList(props) {
  const navigate = useNavigate();
  return (
    <div>
      <li className="shadow-sm my-3" onClick={() => navigate(`/text-quiz/${props.id}`)}>
        {props.title}
      </li>
    </div>
  );
}

export default LiterationList;
