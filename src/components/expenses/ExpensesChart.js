import Chart from '../Charts/Chart';

const ExpensesChart=(props)=>{

    const data=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},   
        {label:'Mar',value:0},   
        {label:'Apr',value:0},   
        {label:'May',value:0},   
        {label:'Jun',value:0},   
        {label:'Jul',value:0},   
        {label:'Aug',value:0},   
        {label:'Sep',value:0},   
        {label:'Oct',value:0},   
        {label:'Nov',value:0},   
        {label:'Dec',value:0},   

    ];
    for(const i of props.expenses){
        const month=i.date.getMonth();
        data[month].value+=i.amount;

    }
    return <Chart dataPoints={data}/>;
}

export default ExpensesChart;