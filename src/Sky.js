import React, { useLayoutEffect, useRef } from 'react'
import './Sky.css';


const Sky = () => {

    const cloudAnimation = useRef(null);

    useLayoutEffect(() => {

        var cloudFrames = [
            { transform : 'translateX(90%)'},
            { transform : 'translateX(-100%)'}
        ];

        var cloudTiming = {
            duration: 36000,
            playbackRate: -2,
            iterations: Infinity
        };

        var cloudMovement = cloudAnimation.current.animate(cloudFrames, cloudTiming);
        cloudMovement.currentTime = cloudMovement.effect.getTiming().duration / 2

        setInterval(function() {
            if (cloudMovement.playbackRate > 0.4) {
                cloudMovement.playbackRate *= 0.9;
            }
        }, 3000);

        var moveFast = function() {
            cloudMovement.playbackRate *= 1.1;
        }

        document.addEventListener("click", moveFast);
        
    })

    return (
        <div >
           <div className="sky" ref={cloudAnimation}>
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bg_sky.jpg" alt="clouds"/>
           </div>
        </div>
    )
}

export default Sky;