import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Plick = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>Anelisa N</h1>
				
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1982                   |<br/>
				| OCCUPATION | Grant writer           |<br/>
				'-------------------------------------'
				</p>
				<p>
				This is more of a thank you. I met Anelisa during group grief therapy in late 2024, shortly after Beth passed away. Despite the fact that most of our conversations had the lingering scent of death on them, we quickly became friends. None of this would exist with her support, wordsmithing, and great comedic timing. So thank you, Anelisa, for helping me through one of the hardest times in my life while making way for something brighter.
				</p>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Plick;
