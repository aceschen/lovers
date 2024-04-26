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

				<h1>PLICK</h1>
				
				<p>
					Plick (online handle) is a queer game developer from Minneapolis, Minnesota. They are also the primary moderator for Lovers Wiki. Currently, they live in the Netherlands and will likely remain there until Eschaton.	
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1991                   |<br/>
				| OCCUPATION | Game developer         |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#favorites' className='link'>Favorites</a><br/>
				<a href='#games' className='link'>Games</a><br/>
				<a href='#devlog' className='link'>Devlog</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>

				</p>

				<h1 id='favorites'>FAVORITES</h1>
				<ul>
					<li>Food: Lemon bars</li>
					<li>Color: Baby blue</li>
					<li>Song: Pulaski by Andrew Bird</li>
					<li>TV show: Fargo</li>
					<li>Movie: Fargo?</li>
					<li>Video game: (skip)</li>
					<li>Video game based on playtime: Sid Meier's Civilization V</li>
					<li>Board game: Mansions of Madness (I don't care I'm counting it)</li>
					<li>Place: Nellie's Ice Cream in St. Paul</li>
					<li>Weather: Overcast, gently sprinkling</li>
					<li>Sky color: Amsterdam, August 15, 2024, 18:00</li>
					<li>Hour of the day: 11pm</li>
					<li>Memory: Winning The Game is up there</li>
					<li>Instrument: Cello</li>
					<li>Name: Beth</li>
				</ul>

				<h1 id='games'>GAMES</h1>
				<ul>
					<li><i>Orbman Goes West</i> (2004) - a Flash game with riveting gameplay that involves pushing the left arrow over and over again </li>
					<li><i>Castle Run</i> (2005) - a slightly better Flash game. Infinite runner about escaping a castle</li>
					<li><i>Peach Teaches Typing</i> (2007) - a parody of Mario Teaches Typing. You don't learn much about typing</li>
					<li><i>Gun to a Knifefight</i> (2008) - a point and click game about a hot detective solving a locked room murder</li>
					<li><i>on a hill above the city</i> (2010) - a short visual novel about three queer girls graduating high school</li>
					<li><i>Mars, Venus, Mercury</i> (2011) - a longer visual novel about love, sex, and miscommunication. In space!</li>
					<li><i>HEADCOUNTER</i> (2013) - an RPG where you play as the overworked recordkeeper for a roguelike dungeon</li>
					<li><i>Now and Forever and Six Days</i> (2016) - a timeloop RPG where you try to save your lover from the end of the world</li>
					<li><i>Re:Re:Re:Re:Re:Re</i> (2018) - a point and click office simulator that is entirely quicktime events. There's a good story hidden inside</li>
					<li><i>Cowardish</i> (2020 - present) - an RPG released in chapters about being scared of everything and everyone except fighting monsters</li>
					<li><i>Rogue Story</i> (???) - we'll see</li>
				</ul>

				<h1 id='devlog'>DEVLOG</h1>
				<p>The next chapter of Cowardish has been fully written! I've started development. As always, <NavLink to='/cheezer' className='link'>cheezer</NavLink> will be the lead artist and animator. It'll be out by the end of 2025 if I can help it. And if the world permits it, I guess. But if you come to the write-a-thon you might see some sneak peeks ;)</p>
				
				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/plick' className='link'>Plick</NavLink> (as this site's primary mod... I get to bend the rules)</li>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
					<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Plick;
