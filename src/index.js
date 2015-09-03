import React from 'react';
import Router, { Route } from 'react-router';
import { Context } from 'fluxette';
import flux from './flux';

import Index from './views/';
import Repos from './views/repos';
import RepoDetails from './views/repo.details';
import Test from './views/test';

let routes = (
	<Route>
		<Route path='/' handler={ Index }
			indexRoute={{ handler: Repos }}>
			<Route path=':owner/:repo' handler={ RepoDetails } />
		</Route>
		<Route path='/2' handler={ Test }/>
	</Route>
)

Router.run(routes, Router.HistoryLocation, (App, state) => {

	console.log('Router.run cb')

	class Root extends React.Component {
		render() {
			return (
				<Context flux={ flux }>
					{ () => <App {...state}/> }
				</Context>
			);
		}
	}

	React.render(<Root/>, document.getElementById('root'));
})



