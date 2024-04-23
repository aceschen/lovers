import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Teddy = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>TEDDY ZHENG</h1>
				
				<p>
				Teddy Zheng (also known as wizard_slayer_713) is a librarian in Houston, Texas, and the creator of Lovers Wiki. 
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1990                   |<br/>
				| OCCUPATION | Librarian              |<br/>
				| PARTNER    | <NavLink to='/minimo' className='link'>Minimo</NavLink>                 |<br/>
				| FAMILY     | <NavLink to='/eva' className='link'>Eva Lu</NavLink> (mother)        |<br/>
				|            | <NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink> (father)  |<br/>
				|            | <NavLink to='/allie' className='link'>Allie Zheng</NavLink> (sister)   |<br/>
				|            | <NavLink to='/zoey' className='link'>Zoey</NavLink> (dog)             |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#life' className='link'>Personal Life</a><br/>
				<a href='#career' className='link'>Career</a><br/>
				<a href='#lovers-wiki' className='link'>Lovers Wiki</a><br/>
				<a href='#wishes' className='link'>Wishes</a><br/>
				<a href='#trivia' className='link'>Trivia</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>

				</p>

				<h1 id='life'>PERSONAL LIFE</h1>
				<blockquote>
				"To be honest? Teddy was a teacher's pet when we were little. He made Mom drive him to the first day of kindergarten, like, an hour early. Do you know how long an hour is when you're five? But the teacher was really sweet about it, she let him pass stuff out and he was so proud of himself when he got home. At the end of the year, they gave him a certificate that said 'Theodore Zheng, Most Helpful Friend'. I think that about sums it up." (November 2024, Allie Zheng) 
				</blockquote>

				<h1 id='career'>CAREER</h1>
				<blockquote>
				"Oh, my daughter adores him. Every time I say it's time to go to the library, she pipes up and says, 'we're gonna see Mister Teddy!' All the kids love him, I know he's their favorite. He always has a pocket full of stickers and bandaids and bookmarks for them. He helps them escape for a few hours a day, bless him. I can't imagine how hard it is on the librarians with the schools closed. I hope they know how many lives they've saved like this." (November 2024, anonymous)
				</blockquote>

				<h1 id='lovers-wiki'>LOVERS WIKI</h1>
				<blockquote>
				"When Teddy approached me about this, I was deep in grief. I still am now. But it was comforting to know that he was too. When I worked with him, I knew I wouldn't need to explain myself. We took our time on it. Some days were bad for me or him or both of us. I don't think it would have worked out if it was a memorial. That's what I thought it was. A permanent memorial. At least, permanent until we stopped paying for the domain name. But Teddy's heart is too big for it's own good. It has always been about love for him." (January 2025, Anelisa M.)
				</blockquote>
				<blockquote>
				"If Teddy has his mind set on something, I'm there. I'm on it. Doesn't matter what it is, I know his heart is in the right place. He's never let me down so far, and it's been, what, 15 years? (pause) 18?? Wow. We're a small part of the world, just a slice of the internet, but I think this place has helped everyone who came across it, some way, somehow. God knows it's easy to give up. It's hard to love." (November 2024, Plick)
				</blockquote>

				<h1 id='wishes'>WISHES</h1>
				<blockquote>
				"We moved to Houston in early 2024 to be close to Teddy's parents and sister. They see each other a few times a week. Most of the time, he's at work with the kids. When he's at home, we're either working on this or relaxing as much as our bodies and brains will allow. (pause) I'm not sure if there's anything else he would want me to share. There are a few other wishes he's told me, but I'd prefer to keep them secret. He's a little susperstitious (laughing)." (March 2025, Minimo)
				</blockquote>

				<h1 id='trivia'>TRIVIA</h1>
				<ul>
					<li><p>Teddy can juggle.</p></li>
				</ul>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
					<li><NavLink to='/anelisa' className='link'>Anelisa M.</NavLink></li>
					<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
					<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Teddy;
