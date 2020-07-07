import React from 'react';

const Card = (props) =>{
	return (
		<div className = "bg-light-green dib br3 pa3 ma2 grow bu2 shadow-5">
			<img alt = "robots" src ={`https://robohash.org/${props.id}?200x200`}/>
			<div>
				<h2> {props.name} </h2>
				<p> {props.email} </p>
			</div>
		</div>		
	); // getting the parameter as parameter from index.js
}
export default Card;