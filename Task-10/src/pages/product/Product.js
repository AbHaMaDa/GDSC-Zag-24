import { useParams } from "react-router-dom";
import "./product.scss";
import Single from "../../components/single/Single";
import {singleProduct} from "../../data"


const Product = ()=>{
   let  {productId} = useParams();
    return(
        <div className="product">
           <Single data={singleProduct}/>
        </div>
    )
}


export default Product;