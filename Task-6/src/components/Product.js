import { Link } from "react-router-dom";
import "./product.css"
function Product (props){
const {Product}= props;
    return(
        <div className="card">
            <img className="card-img-top" src={Product.image} alt={Product.title}/>
            <div className="card-body">
                <h5 className="card-title">{Product.title}</h5>
              
                <span>{Product.price}</span>
                <Link className="btn btn-primary" to={`product/${Product.id}`}>details</Link>
            </div>
        </div>
    )
}
export default Product