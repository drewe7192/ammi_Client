import React, { FC } from 'react'

interface IBackgroundVideoProps {
      src: string
      isFullScreen: boolean
      isMuted: boolean
      isLooped: boolean
      isControlVisible: boolean
}

const BackgroundVideo:FC<IBackgroundVideoProps> = (props: IBackgroundVideoProps) => {
      const { src, isFullScreen, isMuted, isLooped, isControlVisible } = props
      const _videoClassName = isFullScreen ? "fullDim" : ""
      const render = () => <div className={"absolute "+ _videoClassName}>
            <video className={_videoClassName} loop={isLooped} autoPlay controls={isControlVisible} muted={isMuted}>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
      </div>

      if(isFullScreen)
            return <div className="absolute fullDim">{render()}</div>
      return render()
}

export default BackgroundVideo;