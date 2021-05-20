import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Exchange from '../components/Exchange';

const Routes: React.FC = () => (	
		<Switch>
			<Route path="/" exact component={Exchange} />
		</Switch>	
);

export default Routes;