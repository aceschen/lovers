
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from '../components/header'

const Loved = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>
				<h1>LOVED ONES</h1>
				<ul>
					<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
					<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
					<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
					<li><NavLink to='/coveney' className='link'>Mrs. Coveney</NavLink></li>
					<li><NavLink to='/eva' className='link'>Eva Lu</NavLink></li>
					<li><NavLink to='/lindsay' className='link'>Lindsay Johnson</NavLink></li>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
					<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink></li>
					<li><NavLink to='/zoey' className='link'>Zoey</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Loved;
