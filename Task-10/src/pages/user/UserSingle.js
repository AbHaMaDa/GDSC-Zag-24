import { useParams } from "react-router-dom";
import "./user.scss";
import Single from "../../components/single/Single";
import {singleUser} from "../../data";




const   User =()=>{



    

    let {userId}= useParams();

    console.log(userId)
    return(
        <div className="user">
            <Single data={singleUser}/>
        </div>
    )
}

export default User;