import React from "react";
import "./Button.css";

function Button({ color, text, bgColor, border, boxShadow, width, hover }) {
  return (
    <button
      style={{
        color,
        backgroundColor: bgColor,
        border,
        boxShadow: boxShadow,
        width: width,
        hover: hover,
      }}
      className="default"
    >
      {text}
    </button>
  );
}

// export const Button = ({children, type, onClick, buttonstyle, buttonSize})=>{
//   return(
//     <button onclick={onClick} type={type}>
//         children
//     </button>
//   )
// }

// firstbutton{
//   background: #E0E0E0;
//   box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
//   border-radius: 6px;
// }
// firstbuttonText{
//   font-family: 'Noto Sans JP';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 20px;
// text-align: center;

// color: #3F3F3F;
// }

// secondButton{
//   background: #AEAEAE;
// box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
// border-radius: 6px;
// }
// secondButtonText{
//   font-family: 'Noto Sans JP';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 20px;
// text-align: center;

// color: #3F3F3F;
// }
export default Button;
