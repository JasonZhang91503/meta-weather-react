import React from 'react';
import './pie-chart.css';


class PieChart extends React.Component{
    render(){
        let inlineStyle = {
            backgroundImage: `conic-gradient(orange ${this.props.value}%, blue 0%)`
        };
        return (
            <div>
                <div className="pie" style={inlineStyle}></div>
            </div>
        )
    }
}

export default PieChart;