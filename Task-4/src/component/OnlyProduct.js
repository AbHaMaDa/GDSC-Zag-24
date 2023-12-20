import React from "react";
import"./OnlyProduct.css"

class OnlyProduct extends React.Component{
    render(){
        return(
            <div className="wrap" >
                <div className="box front">
                    <h3>{this.props.product.title}</h3>
                    <img src={this.props.product.image}/>
                    <h1>{this.props.product.price} L.E</h1>
                    <div className="span">
                    <span>Rate:{this.props.product.rating.rate}</span>
                    <span>Count:{this.props.product.rating.count}</span>
                    </div>


                </div>
                <div className="box back">
                    <h1>{this.props.product.category}</h1>
                    <p>{this.props.product.description}</p>
                </div>
            </div>
        )
    }
}

export default OnlyProduct  