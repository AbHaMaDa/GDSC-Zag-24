import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieCartBox.scss";



const PieCartBox =(props)=>{

    return(
        <div className="PieCartBox" >
            <h1>leads by source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{background:"white",borderRadius:"5px"}}
                        />
                        <Pie
                        data={props.data}
                       
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {props.data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                        </Pie>
            
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {props.data.map((item)=>{
                    return(
                        <div className="option" key={item.name}>
                            <div className="title">
                                <div className="dot" style={{backgroundColor:item.color}}/>
                                <span>{item.name}</span>
                            </div>
                            <span>{item.value}</span>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default PieCartBox