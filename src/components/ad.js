import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from './header'

const Ad = (props) => {
    return (
		<div>
			<body className='left-align'>
				<p className='adtext'>~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~</p>
				<h1>{props.title} | {props.date}</h1>
				<p className='adtext'>{props.text}</p>
				<p className='adtext'>- {props.author}</p>
				<p className='adtext'>~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~</p>
				
			</body>
		</div>
	  );
}

export default Ad;