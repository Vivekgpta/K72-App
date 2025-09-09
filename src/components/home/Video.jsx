import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757413637~exp=1757417237~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=32c9e14dd1b7eb721104fb04ae760f6b929caba846382ae1712b7dc1a558ec78&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;


