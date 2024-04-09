import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Rtoolkit/slices/productsSlices';
import { addToCart } from '../Rtoolkit/slices/cartSlice';

function Products() {
   const products = useSelector(state=>state.productsSlice);
   const dispatch =  useDispatch();

    console.log(products);
   useEffect(()=>{
        dispatch(fetchProducts())
   },[])
  return (
   <Container>
        <Row>
            {products.map((product)=>{
                return(
                    <div className='col-3 mb-3' key={product.id}  >
                <Card  style={{ width: '18rem' ,height:"100%",}}>
                    <Card.Img variant="top" src={product.image}  style={{ height: '12rem' }}/>
                    <Card.Body className='d-flex flex-column justify-content-between'>
                        <Card.Title>{product.Title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            {product.price}$
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{dispatch(addToCart(product))}}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            </div>
            
                )
            })}
            
        </Row>
   </Container>
  );
}

export default Products;