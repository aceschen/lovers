import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Cheezer = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>BETBETBET</h1>
				
				<p>
				betbetbet (known in real life as Beth Hage) was a dearly loved friend to many. 
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1990                   |<br/>
				| OCCUPATION | AV educator            |<br/>
				| PARTNER    | M Calderon             |<br/>
				| FAMILY     | Tim Hage (brother)     |<br/>
				|            | Eleanor Hage (sister)  |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#life' className='link'>Personal Life</a><br/>
				<a href='#career' className='link'>Career</a><br/>
				<a href='#death' className='link'>Death</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>

				</p>

				<h1 id='life'>EARLY LIFE</h1>
				<p>Beth grew up in Ann Arbor, Michigan. On weekends, she crowded around the family PC with her siblings to play Newgrounds games and surf the web. When it came to computers, she wanted to learn how to make everything herself: graphics, then animations, then games, then the computers themselves. Beth made so many funny, smart, and great things. </p>
				<p>In middle school and high school, she moved from the home PC into woodshops and computer labs to compete in robotics across the country. Over her six years of membership, she worked her away across every part of the team. When she graduated, Beth was as handy with a hammer as she was with CAD, programming, even button-making. </p>
				
				<h1 id='career'>CAREER</h1>
				<p>She attended university for robotics, but she always said she wanted to work in schools. In her sophomore year, she took an education class and worked as on AV at a nearby high school for her fieldwork credit. She liked it, the interest stuck, and after graduation she became the district's main AV specialist. </p>
				<p>Over the next dozen years, Beth started almost as many educational programs for the kids. She set up the CCTV systems so students could do morning announcements; she hosted after-school workshops with the AV club on hardware maintenance; of course, she coached the robotics teams. She made the AV room a safe place for kids who felt like outcasts. </p>

				<h1 id='death'>DEATH</h1>
				<p>In September 2024, Beth fell suddenly and seriously ill with Eschaton fever. She died five days later.</p>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li>M Calderon</li>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
					<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
					<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
					<li>Tim Hage</li>
				</ul>
			</body>
		</div>
	  );
}

export default Cheezer;
