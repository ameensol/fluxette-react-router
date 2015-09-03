import React from 'react';
import Router, { Route } from 'react-router';
import { Context } from 'fluxette';
import flux from './flux';

import Index from './views/';
import Repos from './views/repos';
import RepoDetails from './views/repo.details';
import Test from './views/test';

let context = (flux, children) =>
	<Context flux={flux}>{children}</Context>

let routes = (flux) => {
	<Route>
		<Route path='/' handler={ context(flux, Index) }>
			<Route path=':owner/:repo' handler={ RepoDetails } />
		</Route>
		<Route path='/2' handler={ context(flux, Test) }/>
	</Route>
}

Router.run(routes(flux), Router.HistoryLocation, (App, state) => {

	console.log('Router.run cb')
	console.log(App)
	console.log(state)

	React.render(<App {...state}/>, document.getElementById('root'));
})



