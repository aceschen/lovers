
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from '../components/header'

const Other = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>
				<h1>OTHER ARTICLES</h1>
				<ul>
					<li><NavLink to='/alp' className='link'>Autonomous Life Party</NavLink></li>
					<li>Arbor Love/Labor Taskforce</li>
					<li>Blackout Regions</li>
					<li><NavLink to='/eschaton' className='link'>Eschaton</NavLink></li>
					<li>Sky Index</li>
					<li>Splashlight DFW</li>
				</ul>
			</body>
		</div>
	  );
}

export default Other;
