import React from 'react';

/*css*/
import { HeaderLayout } from './styles';

/*assets*/
import logo from '../../assets/logo.png';

/*api*/
//import api from '../../services/api';

/*components*/
import ServicesExchange from '../Exchange/Services/servicesExchange';
import Chart from '../Charts/index';

/*interfaces*/
//import { IExchange } from './Interfaces/IRepository';

const Exchange: React.FC = () => {
		
return(	<>	
		<HeaderLayout >			
			<img src={logo} />
			<nav>
				<ul>
					<li>
						<b>API TOP (5) CRIPTOMOEDAS em 24Hs</b>
					</li>			
				</ul>
			</nav>
		</HeaderLayout>		
		<ServicesExchange />
		<Chart />
		{/* <Footer>
		</Footer>		 */}
	</>)
};

export default Exchange;