import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756635268~exp=1756638868~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=9227d0d32a81eb4e22fe5842f10cd7bc383fc12e67f2fd7758e4ad0ed02af20a&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;

