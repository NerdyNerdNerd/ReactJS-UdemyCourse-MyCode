import { useNavigate } from "react-router-dom"
import error from "../img/404.jpg"

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='errorWrapper'>
      <img src={error} alt="error" />
      <div className="btnWrapperNotFound">
        <button onClick={ () => navigate("/") } >Home</button>
        <button onClick={ () => navigate(-1) } >Go Back</button>
        {/* <Link className="homeLink" to={'/'}>Home</Link>
        <Link className="goackLink" to={-1}>Go Back</Link> */}
        </div>
    </div>
  )
}

export default NotFound