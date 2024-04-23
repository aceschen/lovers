import { NavLink } from 'react-router-dom';
import '../App.css';

import logo from '../logo.png'

const Header = () => {
    return (
		<div className="App" >
				<div className='left-align' id='header'>
					<p>+=-=+=-=+=-=+=-=+=-=+=-=+=-=</p>
					<a href="/"><img src={logo} alt="" width={200}></img></a>
					<p>=-=+=-=+=-=+=-=+=-=+=-=+=-=+</p>
				</div>
		</div>
	  );
}

export default Header;
