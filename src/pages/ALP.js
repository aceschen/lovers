import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const ALP = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>AUTONOMOUS LIFE PARTY</h1>
				
				<p>
				The Autonomous Life Party (ALP) is a new religious movement that began in 2024 in response to <NavLink to='/eschaton' className='link'>Eschaton</NavLink>. It describes its mission as "inspring human autonomy by withholding life from the myth of divine judgement". If you would like to learn more, I suggest you visit elsewhere.
				</p>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default ALP;
