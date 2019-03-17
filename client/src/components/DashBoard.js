import PropTypes from 'prop-types';
import React from 'react';

export const DashBoard = ({type, query, queryObject}) => {
	
	let _type, _query;

	const submit = (e) => {
		e.preventDefault();
		queryObject({
			type: _type.value,
			query: _query.value
		});
	};

	const categoryChange = () => {
	}

	return(
		<nav aria-label="Book search form" id="book-form">
		<header>
			<img src="assets/img/icon-128x128.png" alt="logo"/>
			<h1>Google Book Search</h1>
		</header>
		<form onSubmit={submit}>
			<select aria-label="Drop-down list for book search category"
						  defaultValue={type} 
						  ref={option => _type = option}>
				<option onClick={() => categoryChange()} value="q=intitle:">Title</option>
				<option onClick={() => categoryChange()} value="q=inauthor:">Author</option>
				<option onClick={() => categoryChange()} value="q=subject:">Subject</option>
			</select>
			<input aria-label="Book search box" 
			       type="text" 
			       defaultValue={query} 
			       ref={input => _query = input}
			       placeholder="Enter search terms"
			       autoFocus/>
			<input type="submit"
						 value="Search"/>
		</form>
		</nav>
	)
}

DashBoard.propTypes = {
	type: PropTypes.string,
	query: PropTypes.string
};