import React, { PropTypes } from 'react';
import { connect } from 'fluxette';
import { Link } from 'react-router'
import { Layout, Button, Icon } from 'mdl-react';
import FloatingLoader from './floating.loader';

@connect()
export default class Test extends React.Component {
	static contextTypes = {
		router: PropTypes.any.isRequired
	}
	goBack() {
		this.context.router.goBack();
	}
	render() {
		let links = [
			<Link to='/'>Home</Link>
		];
		return (
			<Layout
				title='Fluxette - React Router - Github Search'
				isFixedHeader
				headerLinks={ links }>
				<FloatingLoader loading={ this.state.loading } />
				{ this.props.children }
			</Layout>
		);
	}
};
