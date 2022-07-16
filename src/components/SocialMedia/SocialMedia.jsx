import React from "react";
import { PostsData } from "../../data/PostsData";
import rightArrow from "../../assets/rightArrow.png";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialmedia" id="socialmedia">
      <div className="socialHeading">
        <span className="stroke-text">News and</span>
        <span>stories from</span>
        <span className="stroke-text"> your church</span>
      </div>
      <div className="trendingCards">
        {PostsData.map((post) => (
          <div className="postsCard">
            <div className="postersName">
              <img src={post.img} alt="" />
              <div className="followername">
                <span className="FollowerName">{post.name}</span>
                <span>@{post.name}</span>
              </div>
            </div>
            <div className="descriptionAndPic">
              <span>{post.desc}</span>
              <img src={post.img} alt="" />
            </div>
            <div className="placeholderDiv"></div>
            <div className="connectSection">
              <span>Connect</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
