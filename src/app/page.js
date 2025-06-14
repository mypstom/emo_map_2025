"use client"

import Image from "next/image";
import MapboxUI from "./component/MapboxUI";
import YouTube from "react-youtube";
import { useState } from "react";

export default function Home() {

  const [currentVideo, setCurrentVideo] = useState(null);
  
  const videoReady = (event) => {
    setCurrentVideo(event.target);
    event.target.playVideo();
  }

  const play = () => {
    console.log("play");
    if(currentVideo){
      currentVideo.playVideo();
    }
  }

  const pause = () => {
    console.log("pause");
    if(currentVideo){
      currentVideo.pauseVideo();
    }
  }

  

  return (
    <>
      <div className=" absolute left-0 top-0 z-1 text-white">
        <div>深夜 EMO 電台</div>
        
        <div className="border-1 border-white">
          <div className="flex items-center">
            <Image src="/iu.png" className="rounded-full" width="40" height="40" />
            John
          </div>
        </div>
        <YouTube
          videoId={"LoIxHYQIvjg"}
          onReady={videoReady}
        ></YouTube>

        <div onClick={play}>播放</div>
        <div onClick={pause}>暫停</div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LoIxHYQIvjg?si=2NZ7nZRZOqwKlxBW&controls=0&autoplay=1&mute=0&ui=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
      <MapboxUI className="z-3 absolute top-0 left-0"/>
    </>
  );
}
