import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.Chartdata.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
    return (    
        <div className='chart'>
            {props.Chartdata.map((data) => 
                <ChartBar
                    key = {data.label}
                    value = {data.value}
                    maxValue = {totalMaximum}
                    label = {data.label}>
                </ChartBar>
            )}
        </div>
    );
}

export default Chart