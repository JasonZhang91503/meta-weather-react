import React from 'react';

class BarChart extends React.Component{


    FiveDaysBar() {
        this.props.whetherFiveDays.map((whether) => {
            return(
                <div>
                    <div className={`bar-${whether.min_temp}`}></div>
                    <div className={`bar-${whether.max_temp}`}></div>
                    <div className={`placeHolder`}></div>
                </div>
            )
        })
    }
    
    render(){
        return(
            <div className='bar-chart'>
                {this.FiveDaysBar()}
            </div>
        )
    }
}

export default BarChart;