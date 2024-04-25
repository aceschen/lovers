import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Lindsay = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>LINDSAY JOHNSON</h1>
				
				<p>
				Lindsay Johnson spends most of her time playing piano. She lives in Virginia with her wife and their three cats. 
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1988                   |<br/>
				| OCCUPATION | Piano teacher          |<br/>
				| PARTNER    | Padmini A              |<br/>
				| FAMILY     | Rob Johnson (father)   |<br/>
				|            | Mezzo (cat)            |<br/>
				|            | Scherzo (cat)          |<br/>
				|            | Americano (cat)        |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#life' className='link'>Personal Life</a><br/>
				<a href='#career' className='link'>Career</a><br/>
				<a href='#sky-index' className='link'>Sky Index</a><br/>
				<a href='#trivia' className='link'>Trivia</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>
				</p>

				<h1 id='life'>PERSONAL LIFE</h1>
				<p>
				Lindsay started playing the piano when she was 3. Can you believe that? I don't think I understand how a 3 year old is supposed to do that. Maybe on some kind of mini piano? Her dad was a jazz musician and knew tons of instruments, so he started teaching her. By the time she was 6, he was bringing her to gigs! She'd get to play a little something at the end, it was the cutest thing ever. 
				</p>
				<p>
				I met her in kindergarten because we were in the same class. We ended up being classmates every year up until eighth grade. Then she moved to Virginia and everything sucked. Kidding, but we both struggled a lot without the other person. Me especially. Lindsay is the kind of person who just know what the right thing to say is all the time. Even as a kid, she would know how to listen to you in this way that made you felt important. She's always been so considerate and thoughtful. I am so lucky to be her best friend. 
				</p>

				<h1 id='career'>CAREER</h1>
				<p>
				In high school, Lindsay would play piano for the choir and theater departments - three concerts and a musical every year. After graduating, she studied piano performance and music pedagogy at Peabody Conservatory, where she did accompaniment work and music directing gigs for local theater on the side. By the time she graduated, she was a highly sought after artist. Lindsay always stayed booked and busy, whether it was playing in a show or conducting high school orchestras. I would list every gig she's ever worked, but I think that's too long for here. Plus you can just find it on Wikipedia. 
				</p>

				<p>
				Since the start, she's taken a step back to focus on playing for herself again since most schools have closed and work is a little less consistent. But there are so many more local musicians putting on small concerts and recitals of their own, so whenver I talk to her she's always got something lined up for the weekend. Which reminds me...
				</p>
				
				<h1 id='sky-index'>UPCOMING PERFORMANCES</h1>
				<p>At the end of the month Lindsay Johnson will be performing a free recital of her own compositions. </p>
				<p>
				*-=-*-=-*-=-*-=-*-=-*-=-*-=-*-=-*-=-*<br/>
				|                                   |<br/>
				|          LINDSEY JOHNSON          |<br/>
				|            IN CONCERT             |<br/>
				|                                   |<br/>
				|           May 31, 2025            |<br/>
				|             6pm - 8pm             |<br/>
				|     St. Mark's Catholic Church    |<br/>
				|         Norfolk, Virginia         |<br/>
				|               FREE                |<br/>
				|                                   |<br/>
				|  Enjoy an evening of compositions |<br/>
				|    by celebrated local pianist    |<br/>
				|         Lindsay Johnson.          |<br/>
				|    Light refreshments provided.   |<br/>
				|                                   |<br/>
				*-=-*-=-*-=-*-=-*-=-*-=-*-=-*-=-*-=-*<br/>
				<br/>
				Let her know that I sent you!
				</p>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Lindsay;
