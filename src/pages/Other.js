
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
					<li><NavLink to='/alt' className='link'>Arbor Love/Labor Taskforce</NavLink></li>
					<li><NavLink to='/eschaton' className='link'>Eschaton</NavLink></li>
					<li><NavLink to='/teamhypotheses' className='link'>Team Hypotheses</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Other;
