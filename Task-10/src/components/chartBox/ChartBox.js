import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";




const ChartBox =(props)=>{
    return(
        <div className="ChartBox">
            <div className="box-info">
                <div className="title">
                    <img src={props.icon} alt="img"/>
                    <span>{props.title} </span>
                </div>
                <h1>{props.number} </h1>
                <Link to="/" style={{color:props.color}}>
                    veiw all
                </Link>
            </div>
            <div className="chart-info">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart   data={props.chartData}>
                            <Tooltip 
                                contentStyle={{background:"transparent",border:"none"}}
                                labelStyle={{display:"none"}}
                                position={{x:10,y:60}}
                            />
                        <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage"style={{color:props.percentage<0?"tomato":"limegreen"}}>{props.percentage} </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox;