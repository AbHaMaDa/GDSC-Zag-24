import { useDispatch, useSelector } from 'react-redux';


const Rightbar=()=>{
    const username = useSelector(state=>state.user.name);

    return(
        <div className="d-flex flex-column justify-content-between align-items-start my-4 "style={{height:"80vh"}}>
            <div>
                <h6>reccomended for {username}</h6>
                <div style={{width:"200px",height:"100px",backgroundColor:"blue"}}></div>
            </div>
            <div>
                <h6>popular on app</h6>
                <div style={{width:"200px",height:"100px",backgroundColor:"green"}}></div>
            </div>  
            <div>
                <h6>edit's choice</h6>
                <div style={{width:"200px",height:"100px",backgroundColor:"red"}}></div>
            </div>
        </div>
    )
}
export default Rightbar;