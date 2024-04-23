import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Minimo = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>MINIMO</h1>
				
				<p>
				Minimo (stylized as mi_ni_mo or minimo, also known as Momo to her friends) is the most beautiful, gorgeous, 
				hot, smart, talented, hilarious, witty, unique, handsome, sexy, intelligent, and humble woman in the known 
				universe. She is indisputably perfect in every way. 	
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1990                   |<br/>
				| OCCUPATION | IT Specialist          |<br/>
				| PARTNER    | <NavLink to='/teddy' className='link'>Teddy Zheng</NavLink>            |<br/>
				| FAMILY     | <NavLink to='/zoey' className='link'>Zoey</NavLink> (dog)             |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#life' className='link'>Personal Life</a><br/>
				<a href='#career' className='link'>Career</a><br/>
				<a href='#hypotheses' className='link'>Team Hypotheses</a><br/>
				<a href='#alt' className='link'>ALT Research</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>
				</p>

				<h1 id='life'>PERSONAL LIFE</h1>
				<p>Momo is 5'10" without shoes on. Her nose crinkles when she laughs, and you can hear the sound of it three 
					doors down. Her birthday is October 30 and she still loves Halloween. The only thing she won't eat is maraschino 
					cherries. She has been married for 6 years and they have been the best years of her husband's life. Since the start, 
					they spend most evenings sitting on the couch together. She likes to type in all caps. </p>
				<blockquote>
				minimo: ARE U AND TEDDY CONSPIRING AGAINST ME? <br/>
 				minimo: HES NOT LETTING ME SEE WHAT HE WRITES <br/>
 				minimo: !!!!!!!!!!!??<br/>
 				(October 2024, transcribed by Plick) 
 </blockquote>
				
				<h1 id='hypotheses'>TEAM HYPOTHESES</h1>
				<p>In 2006, GameFAQs user mi_ni_mo posted an incredibly detailed guide for Rogue Story, an obscure PC game from 1999. Very 
					few physical copies of it still exist. Even so, it got thousands of hits in just three weeks. Shortly after, burgeoning 
					game developer <NavLink to='/teddy' className='link'>wizard_slayer_713</NavLink> sent mi_ni_mo an email about their plan 
					to emulate Rogue Story. After posting about it on the GameFAQ forum, they recruited two more devs 
					named <NavLink to='/plick' className='link'>Plick</NavLink> and <NavLink to='/cheezer' className='link'>cheezer</NavLink>. 
					The four teenage nerds quickly became the best of friends. </p>
				<p>Two years later, they found themselves attending the same university. Momo heard about a two-day puzzlehunt called The Game and signed her and her friends up without telling them. On the morning of the event, they joined forces for good as Team Hypotheses. </p>
				<p>Today, Momo runs a server where the team - now much bigger, drawing in friends of friends of friends - spend their spare time chatting, playing TTRPGs, and streaming games on their endless backlog. They dream of finishing the Rogue Story emulator one day, though it doesn't feel as important as it did when they were 16. </p>

				<h1 id='alt'>ALT RESEARCH</h1>
				<p>Near the start, Minimo became heavily involved in citizen science efforts to identify the cause of the tree rot. She organized a group called "<NavLink to='/alt' className='link'>Arbor Love/Labor Taskforce</NavLink>" (ALT) that takes weekly samples of both healthy and rotting local trees. After sharing her findings in a weekly blog, ALT chapters have been started in 17 countries, including in all 50 states. ALT findings have led to a taxonomy detailing an expected decay timeline for many common tree species. </p>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
					<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Minimo;
