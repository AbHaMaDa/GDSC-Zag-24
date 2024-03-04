import { Link } from "react-router-dom"

const Host =()=>{
    return(
        <div className="host">
        <h1>welcome</h1>
          <p> do you have an account ??</p>
          <div className="links">
            <Link className="ml4 btn btn-primary" to={"/login"}>yes</Link>
            <Link className="btn btn-primary" to={"/signup"}>no</Link>
  
          </div>
      </div>
    )
}
export default Host