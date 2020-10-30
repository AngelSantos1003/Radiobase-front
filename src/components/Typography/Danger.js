import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import typographyStyle from './typographyStyle';

function Danger({ ...props }) {
	const { classes, children } = props;
	return <div className={classes.defaultFontStyle + ' ' + classes.dangerText}>{children}</div>;
}

Danger.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default withStyles(typographyStyle)(Danger);
