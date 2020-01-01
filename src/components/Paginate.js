import React from 'react';
import './Paginate.css';


const Paginate = ({postsPerPage, totalPosts, paging}) => {
	const pageNumbers = [];


	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
	pageNumbers.push(i)
	}

	return (
		<li className='pagination'>
			
				{
				pageNumbers.map(number =>(

			
						<a key={number} onClick={() => paging(number)} href="#">
							{number}
						</a>
					
					))
				}
			
		</li>
	);
}




export default Paginate;