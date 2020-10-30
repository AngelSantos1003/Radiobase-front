import React from 'react';

const NoMenu = props => {
	const { url } = props;
	return <h1>{url.slice(1).toUpperCase()}</h1>;
};

export default NoMenu;
