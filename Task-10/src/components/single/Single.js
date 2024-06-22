import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis,Tooltip } from "recharts";
import "./single.scss";


// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

function Single(props) {
   let  singleData=props.data.chart.data

    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <img src={props.data.img} alt="" />
                        <h1>{props.data.title}</h1>
                        <button>update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.data.info).map((e)=>{
                            return(
                                <div className="item" key={e[0]}>
                                    <span className="itemTitle">{e[0]} </span>
                                    <span className="itemValue">{e[1]} </span>
                                 </div>
                            )
                        })}
                       
                    </div>
                </div>
                <hr />
               {props.data.chart ? <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={singleData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {props.data.chart.dataKeys.map((dataKey)=>{
                                return(
                                    <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color } />
                                )
                            })}
                           

                        </LineChart>
                    </ResponsiveContainer>

                </div>:null}

            </div>
            <div className="activites">
                <h2>latest activites</h2>
                {props.data.activities?<ul>
                    {props.data.activities.map((e)=>{
                        return(
                            <li>
                                <div>
                                    <p>{e.text} </p>
                                    <time>{e.time} </time>
                                </div>
                            </li>
                        )
                    })}
                    
                   
                </ul>:null}
            </div>
        </div>
    );
}


export default Single;