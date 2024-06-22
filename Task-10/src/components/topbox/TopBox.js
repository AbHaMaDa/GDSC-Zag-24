import "./topBox.scss";

import {topDealUsers} from "../../data";


const TopBox =()=>{
    return(

        <div className="topbox">
           <h1>top deals</h1> 
           <div className="list">
             {  topDealUsers.map((user)=>{
                return(
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="img" />
                            <div className="userText">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>

                            </div>

                        </div>
                        <span className="amount">{user.amount}</span>
                    </div>
                )
             })

             }
           </div>
        </div>
    )
}

export default TopBox;