import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/*routers*/
import Routes from './router/'

/*css*/
import CreateGlobalStyle  from './styles/global';

const App: React.FC = () => (
	<>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
		<CreateGlobalStyle />

	</>
);

export default App;
