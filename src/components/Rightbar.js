import React from "react";
import "./Rightbar.css";
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";

const Rightbar = () => {
  const trends = [
    {
      img: spaceshooter,
      text: "Learn with WEB3 DAO , Learn for Free No need to pay for overpriced courses.",
      link: "https://www.learnweb3.io/",
    },
    {
      img: netflix,
      text: "useWeb3 is a platform for developers to explore and learn about Web3",
      link: "https://www.useweb3.xyz/",
    },
    {
      img: academy,
      text: "largest community learning blockchain education.",
      link: "https://www.web3.university/",
    },
    {
      img: js,
      text: "Learn to code in Web3. Build in less than 60s.",
      link: "https://openquest.xyz/",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/c/DappUniversity",
    },
  ];

  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Twitter"
          name="Search Twitter"
          prefixIcon="search"
          labelBgColor="#141d26"
        >
        </Input>

        <div className="trends">
          Web3 Resources for you
          {trends.map((e) => {
            return (
              <>
                <div className="trend" onClick={() => window.open(e.link)}>
                  <img src={e.img} alt="" className="trendImg"></img>
                  <div className="trendText">{e.text}</div>

                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Rightbar;
