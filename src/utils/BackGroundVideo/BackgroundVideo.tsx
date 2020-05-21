import React, { FC } from 'react'

interface IBackgroundVideoProps {
      src: string
      isFullScreen: boolean
}

const BackgroundVideo:FC<IBackgroundVideoProps> = (props: IBackgroundVideoProps) => {
      const { src, isFullScreen } = props
      const _videoClassName = isFullScreen ? "fullDim" : ""
      const render = () => <video className={_videoClassName} loop autoPlay controls muted id={'myVideo'}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>

      if(isFullScreen)
            return <div className="fullDim">{render()}</div>
      return render()
}

export default BackgroundVideo;