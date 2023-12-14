import React from 'react'
import '../SchoolHeader/SchoolHeader.css'

import EducationBtns from '../../Education_btns/EducationBtns'

const SchoolHeader = (props) => {
  // Some random colors
  // const colors = ["#D3D3D3"];

  // const numBalls = 50;
  // const balls = [];

  // for (let i = 0; i < numBalls; i++) {
  //   let ball = document.createElement("div");
  //   ball.classList.add("ball");
  //   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  //   ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
  //   ball.style.top = `${Math.floor(Math.random() * 90)}vh`;
  //   ball.style.transform = `scale(${Math.random()})`;
  //   ball.style.width = `${Math.random()}em`;
  //   ball.style.height = ball.style.width;

  //   balls.push(ball);
  //   document.body.append(ball);
  // }

  // // Keyframes
  // balls.forEach((el, i, ra) => {
  //   let to = {
  //     x: Math.random() * (i % 2 === 0 ? -11 : 11),
  //     y: Math.random() * 12
  //   };

  //   let anim = el.animate(
  //     [
  //       { transform: "translate(0, 0)" },
  //       { transform: `translate(${to.x}px, ${to.y}px)` }
  //     ],
  //     {
  //       duration: (Math.random() + 1) * 2000, // random duration
  //       direction: "alternate",
  //       fill: "both",
  //       iterations: Infinity,
  //       easing: "ease-in-out"
  //     }
  //   );
  // });


  return (

    <div className='school-header'>
       {<p className="ball"></p>}
      <div className="school-header-container">
      
        <div className="school-header-text-content">
          <h1>{props.head1}<span>{props.highlight1}</span><br />
            {props.head2}<span>{props.highlight2}</span></h1>
          <p>
            {props.desc}
          </p>
          <div className="shool-header-btns">
            <EducationBtns />
          </div>
        </div>
        <div className="school-header-img">
          <img src={props.img} alt="" />
        </div>
      </div>

    </div>
  )
}

export default SchoolHeader