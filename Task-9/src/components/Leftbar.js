import { useDispatch, useSelector } from 'react-redux';


const Leftbar =()=>{
    const username = useSelector(state=>state.user.name);

    return(
        <ul className="d-flex flex-column justify-content-between align-items-start" 
        style={{listStyleType:"none" ,padding:"0px",margin:"50px", height:"80vh",textTransform:"capitalize"}}>
            <li>homepage</li>
            <li>list</li>
            <li>products</li>
            <li>groups</li>
            <li>pages</li>
            <li>photos</li>
            <li>videos</li>
            <li>scheule</li>
            <li>wishlist</li>
            <li>setting</li>
            <li>logout ({username})</li>
            <li></li>


        </ul>
    )
}

export default Leftbar;