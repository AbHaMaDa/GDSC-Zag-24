import { Link } from "react-router-dom";


const Sidebar = () => {
    return(
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to="products">Get All Products</Link>
                </li>
                <li>
                    <Link to="products/categories">Get All Categories</Link>
                </li>
                
            </ul> 
        
        </>
    )
   
}


export default Sidebar;
