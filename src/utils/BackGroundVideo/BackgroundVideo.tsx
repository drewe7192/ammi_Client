import React from 'react'

import Video from "./../../videos/test1.mp4"

const BackgroundVideo = () => <video loop autoPlay controls muted id={'myVideo'}>
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag. I suggest you upgrade your browser.
</video>

export default BackgroundVideo;