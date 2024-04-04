import { useLayoutEffect } from "react"
import footerImage from "../img/backToTopFooterImage-88x52.png"

// useLayoutEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <img src={footerImage} alt="backToTopImage" />
      <button onClick={() => window.scrollTo(0,0)} className='footerInfo'>FOOTER</button>
    </div>
  )
}

export default Footer