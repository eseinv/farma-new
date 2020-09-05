import React from 'react';
import PropTypes from 'prop-types';

const Logout = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M255.15 468.63H63.79a21.27 21.27 0 0 1-21.26-21.27V64.64a21.27 21.27 0 0 1 21.26-21.26h191.36c11.76 0 21.26-9.5 21.26-21.27S266.91.85 255.15.85H63.79A63.87 63.87 0 0 0 0 64.64v382.72a63.86 63.86 0 0 0 63.79 63.79h191.36c11.76 0 21.26-9.5 21.26-21.26 0-11.76-9.5-21.26-21.26-21.26z" />
		<path
			d="M505.66 240.86L376.4 113.3a21.26 21.26 0 1 0-29.85 30.27l92.38 91.18H191.36A21.24 21.24 0 0 0 170.1 256c0 11.76 9.5 21.26 21.26 21.26h247.56l-92.38 91.18a21.26 21.26 0 1 0 29.85 30.27l129.27-127.57a21.25 21.25 0 0 0 0-30.28z"
			fill={props.color}
		/>
	</svg>
);

Logout.propTypes = {
	color: PropTypes.string,
};

export { Logout };
