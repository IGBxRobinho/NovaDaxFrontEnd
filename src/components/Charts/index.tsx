import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
//import { ChartOptions } from 'chart.js';

/*css*/
import { ChartBar } from './styled';

/*interfaces*/
import { IExchange } from '../../components/Exchange/Interfaces/IRepository'

	const options = {
		scales: {
		  yAxes: [
			{
			  ticks: {
				beginAtZero: true,
			  },
			},
		  ],
		},
	  };
  
  	const data = {
		chartData: {
			labels: ['Boston','Worcester','Springfield','Lowell','Cambridge','New','Bedford'],
			datasets:[
				{
					label: 'CRIPTOMOEDAS',
					data: [
						614594,
						181045,
						153060,
						106519,
						105162,
						95072,
						153060
					],
					backgroundColor: [
						'rgba(255, 99, 132, 0.6)',
						'rgba(54, 162, 235, 0.6)',
						'rgba(255, 206, 86, 0.6)',
						'rgba(75, 192, 192, 0.6)',
						'rgba(153, 102, 255, 0.6)',
						'rgba(255, 159, 64, 0.6)',
						'rgba(255, 99, 132, 0.6)',
					]
				}
			]
		}
	}

const Chart: React.FC = () => {
	const [exchange, setExchange] = useState<IExchange[]>( () =>{
		const storeExchange = localStorage.getItem("@novadax/exchange:");
		if(storeExchange){			
			return JSON.parse(storeExchange);
		}else{
			return [];
		}
	});
	
	

	function handleTopFiveValuesChart(topFiveValues: IExchange[]){		
		topFiveValues = [...exchange].sort( (a, b ) => parseInt(b.Ticker.high24h) - parseInt(a.Ticker.high24h) ).slice(0,5);
		data.chartData.labels = topFiveValues.map( symbol => (symbol.symbol ));
		data.chartData.datasets.map( datasets => (
			datasets.data = topFiveValues.map( symbol => ( parseInt(symbol.Ticker.high24h)))
		))
		return data.chartData;
	}
	

	useEffect( () =>{
		//console.log('chart', exchange);		
	},[])

	return( 
		<>
			<ChartBar> 
				<Bar 
					data={handleTopFiveValuesChart(exchange)}							
					options={options}					
					type="Bar"
					
				/>
			</ChartBar>

		{/* 	{handleTopFiveValuesChart(exchange)} */}
			
			

		</>
	)	
}

export default Chart;