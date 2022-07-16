import React from "react";
import "./Posts.css";

import Like from "../../assets/notlike.png";
import Liked from "../../assets/like.png";
import Share from "../../assets/share.png";
import Comment from "../../assets/comment.png";

const Posts = ({ data }) => {
  return (
    <div className="Posts">
      <span>
        <b>{data.name}</b>
      </span>
      {data.desc && <span>{data.desc}</span>}
      {data.img && <img src={data.img} alt="" />}
      <div className="shareOptions">
        <img src={data.liked ? Liked : Like} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
    </div>
  );
};

export default Posts;
