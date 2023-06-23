import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const clickHandler = () => {
		console.log('before navigating');
		navigate('/products', { replace: true });
	};

	return (
		<div>
			<p>Product Detail Page</p>
			<p>Product Id is {id}</p>
			<p>Your location is {location.pathname}</p>
			<button onClick={clickHandler}>Go Back To Products</button>
		</div>
	);
};

export default ProductDetail;
