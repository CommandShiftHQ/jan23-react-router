import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			description: 'This is Product 1',
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'This is Product 2',
		},
		{
			id: 3,
			name: 'Product 3',
			description: 'This is Product 3',
		},
		{
			id: 4,
			name: 'Product 4',
			description: 'This is Product 4',
		},
		{
			id: 5,
			name: 'Product 5',
			description: 'This is Product 5',
		},
	];
	return (
		<div>
			<h2>Products Page</h2>
			{products.map((product) => {
				return <Link to={`/products/${product.id}`}>{product.name}</Link>;
			})}
		</div>
	);
};

export default Products;
