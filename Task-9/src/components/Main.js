import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, remove, update } from '../ReduxToolKit/slices/userSlice';

function Main() {
    const [name,setNmae]= useState("");
    const [email,setEmail]= useState("");
    const username = useSelector(state=>state.user.name);

    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    },[])

  return (
    <>
        <div className='border-bottom border-info'>
        <h1 className='my-3'>update your account</h1>
        {[
            'warning'
        ].map((variant) => (
            <Alert  key={variant} variant={variant}>
            deleting account cannot be undone <span  style={{fontSize:"20px",fontWeight:"bold"}}>{username}</span>!
            you should confirm your password to delete your account
            </Alert>
        ))}
        <Button className='mb-4' variant="danger" onClick={()=>{dispatch(remove())}}>Delete Account</Button>
        </div>
        <Form  className='mt-5' onSubmit={(e)=>{
            e.preventDefault();
        }
        }>
        <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>username</Form.Label>
                <Form.Control required type="text" placeholder={username} onChange={(e)=>setNmae(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder={`${username}@gmail`} onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
       
            <Button variant="info" type="submit" onClick={()=>dispatch(update({name,email}))}>
                Update
            </Button>
        </Form>
    </>
    

  );
}

export default Main;

