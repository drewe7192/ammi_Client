import React, { FC, ReactNode, createRef, useEffect, useState } from 'react'
import { Spinner } from 'spin.js'

interface ILoaderProps 
{
    isLoading: boolean
    isTinted?: boolean
    children: ReactNode
}
export const Loader:FC<ILoaderProps> = (props: ILoaderProps) => {
    const spanRef = createRef<HTMLSpanElement>()
    let _SpinnerInstance:Spinner|null = null

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        const _htmlSpanReference = spanRef.current

        if(hasMounted === false) 
        {
            setHasMounted(true)
            if(typeof _htmlSpanReference === 'object' && _htmlSpanReference !== null) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                _SpinnerInstance = new Spinner(
                {
                    lines: 13, // The number of lines to draw
                    length: 38, // The length of each line
                    width: 17, // The line thickness
                    radius: 45, // The radius of the inner circle
                    scale: 1, // Scales overall size of the spinner
                    corners: 1, // Corner roundness (0..1)
                    color: '#ffffff', // CSS color or array of colors
                    fadeColor: 'transparent', // CSS color or array of colors
                    speed: 1, // Rounds per second
                    rotate: 0, // The rotation offset
                    animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
                    direction: 1, // 1: clockwise, -1: counterclockwise
                    zIndex: 2e9, // The z-index (defaults to 2000000000)
                    className: 'spinner', // The CSS class to assign to the spinner
                    top: '50%', // Top position relative to parent
                    left: '50%', // Left position relative to parent
                    shadow: '0 0 1px transparent', // Box-shadow for the lines
                    position: 'absolute' // Element positioning
                })
                _SpinnerInstance.spin(_htmlSpanReference)
        }
        }
        return () => {
            _SpinnerInstance = null
        }
    }, 
    [])

    const { isLoading, children } = props
    if(!isLoading) return <>{children}</>

    let isTinted = props.isTinted || false
    let className = "fullDim Loader flex centered"
    if(isTinted) className += ' tinted'
    return <>
        <div className={className}>
            <span ref={spanRef}></span>
        </div>
        {children}
    </>

} 