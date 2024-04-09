import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../Rtoolkit/slices/cartSlice';
import { Button } from 'react-bootstrap';


const Cart = ()=>{
    const cartSlice = useSelector(state=>state.cartSlice);
    console.log(cartSlice)
    const dispatch =  useDispatch();
    let id=1;


    let totalPrice= cartSlice.reduce((acc,current)=>{
        acc = acc + current.price * current.quantity
        return acc ; 
    },0)
    return(
        <>   
        <h1 className='mx-5 my-2' > total price is : {totalPrice.toFixed(2)} $</h1>
            <Button className='mx-5 my-2' variant="danger"  onClick={()=>{dispatch(clear())}}>clear cart</Button>
            <Table striped bordered hover size="sm" style={{textAlign:"center"}}>

                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                    {cartSlice.map((product)=>{
                        return(
                            <tr key={product.id}>
                                <td>{id++} </td>
                                <td>{product.title} </td>
                                <td><img src={product.image} style={{width:"50px", height:"50px"}}/> </td>
                                <td>{product.price}$</td>
                                <td>{product.quantity} </td>
                                <td><Button variant="danger"  onClick={()=>{dispatch(deleteFromCart(product))}}>Delete</Button></td>

                            </tr>
                        )
                    })}
                
                </tbody>
            </Table>
        </>
    )
}

export default Cart;