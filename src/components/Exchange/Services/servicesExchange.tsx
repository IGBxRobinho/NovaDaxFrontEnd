import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

/*interfaces*/
import { IExchange } from '../Interfaces/IRepository';

/*styled*/
import { Respositorie } from './styles';

/*api*/
import api from '../../../services/api';

const ServicesExchange: React.FC = () =>{
	const [ exchange, setExchange ] = useState<IExchange[]>( () =>{
		const storeExchange = localStorage.getItem("@novadax/exchange:");		
		if(storeExchange){
			return JSON.parse(storeExchange);
		}else{
			return [];
		}
	});

	useEffect( () =>{				
		api.get<IExchange[]>('/')
			.then( res =>{
				setExchange(res.data);
				//console.log(res.data);
			}).catch(error =>{
				console.log(error());			
			})
	},[])

	useEffect( () => {		
		localStorage.setItem(
			"@novadax/exchange:",
			JSON.stringify(exchange)
			);	
	},[exchange])

	return(
		//	<>	
				<Marquee speed={50} >
					<Respositorie>						
					<ul>
						{exchange.map( items => (						
							<li key={items.symbol}>
								<strong>{items.symbol}</strong>
								<p>Price R$: {items.Ticker.high24h}</p>													 
								<span>Last price: {items.Ticker.lastPrice}</span>				
							</li>
						))}				
					</ul>					
					</Respositorie>
				</Marquee>
		//</>
	)
}

export default ServicesExchange;