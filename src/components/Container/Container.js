import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

const Container = React.forwardRef((props, ref) => {
	const {
		img = '',
		title,
		style,
		card = true,
		padding = false,
		borderRadius = 4,
		bottomSeparation = true,
	} = props;
	let containerStyle = {
		display: 'block',
		width: '100%',
		borderRadius: 4,
		border: 0,
		height: 'inherit',
	};
	const bottomSeparationStyle = (bottomSeparation && {
		margin: '0px 0px 15px',
	}) || { margin: 0 };
	const cardStyle = !card && { boxShadow: 'none' };
	const paddingStyle = (padding && { padding: 10 }) || { padding: 0 };
	const borderRadiusStyle = { borderRadius };
	containerStyle = {
		...containerStyle,
		...cardStyle,
		...style,
		...paddingStyle,
		...borderRadiusStyle,
		...bottomSeparationStyle,
	};
	return (
		<Paper style={containerStyle} ref={ref}>
			{title && (
				<div
					style={{
						padding: '15px 15px 0',
						textAlign: 'left',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-start',
					}}
				>
					<h4>{title}</h4>
					{img && <img src="../public/img/trinity.jpeg" alt="logo proveedor" />}
				</div>
			)}
			{props.children}
		</Paper>
	);
});

Container.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};
Container.defaultProps = {
	title: '',
	children: '',
};

export default Container;
