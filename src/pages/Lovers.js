
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from '../components/header'

const Lovers = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>
				<h1>Contributors</h1>
				<ul>
					<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
					<li><NavLink to='/anelisa' className='link'>Anelisa N</NavLink></li>
					<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
					<li><NavLink to='/lindsay' className='link'>Lindsay Johnson</NavLink></li>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
					<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Lovers;
