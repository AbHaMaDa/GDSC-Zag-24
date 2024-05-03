import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu=()=>{
    return(
        <div className="menu">
           { menu.map((item)=>{
                return(
                    <div className="item" key={item.id}>
                <span className="title">{item.title} </span>
                {item.listItems.map((listItem)=>{
                    return(
                        <Link className="listItem" to="/" ><img src={listItem.icon} alt="icon" key={listItem.id}/>
                        <span className="listItemTitle">{listItem.title}</span>
                        </Link>
                    )
                })}
               
            </div>
                )
           })}
        </div>
    )
}

export default Menu;