import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Eva = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>EVA LU</h1>
				
				<p>
					Eva Lu is a mother and 3rd grade teacher from Hangzhou, China. She is known for doing puzzles, gardening, and making the world's best banana bread. Currently, she resides in Houston with her husband. 
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1968                   |<br/>
				| OCCUPATION | Schoolteacher          |<br/>
				| PARTNER    | <NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink>           |<br/>
				| FAMILY     | <NavLink to='/teddy' className='link'>Teddy Zheng</NavLink> (son)      |<br/>
				|            | <NavLink to='/allie' className='link'>Allie Zheng</NavLink> (daughter) |<br/>
				|            | Stephanie Lu (sister)  |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#life' className='link'>Personal Life</a><br/>
				<a href='#career' className='link'>Career</a><br/>
				<a href='#garden' className='link'>2024 Garden Crop</a><br/>
				<a href='#trivia' className='link'>Trivia</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>

				</p>

				<h1 id='life'>PERSONAL LIFE</h1>
				<p>Eva grew up in a small apartment in Hangzhou, raised by her her mother, father, and paternal grandmother. As a child, she spent most of her time playing 围棋 (Go) with her younger sister or reading. During third grade, her teacher would regularly lend her books to help advance her reading level. Eva credits this as the first reason she decided to become a teacher. </p>
				<p>After studying pedagogy in university, Eva immigrated to San Francisco, California in 1994. She later moved to Houston, Texas, where she taught math at a variety of middle and high schools for the next twenty years. When asked about why she chose to teach math, she shared the following story:</p>
				<blockquote>
				"In the summer - when it would be 40, 41 degrees in the shade - 奶奶 would give me and my sister 5 cents a day each to buy ice cream. The corner store had three types. For 5 cents, I could get 老冰棍, which was just a sugar water popsicle. Do you remember when we got them a few years ago? Yeah, you didn't think you would like it, but it's pretty good, right? If I got tired of it, I could get 绿豆冰棍儿 for 8 cents, so I'd have to skip a day. But what I really liked was the 鲜牛奶冰砖, always 光明 brand. It was a brick of ice cream and it cost 18 cents. If I wanted that one, I'd have to save up for four days. Which is a long time to a kid! Right? But the thing is, it was always so hot and we wanted to get ice cream on as many days as we could. So I would sit down with your aunt and we'd calculate it - 'okay, if we share one on Tuesday and combine with what we have saved, we'll have enough for two 冰砖 on Wednesday,' things like that. We had a whole system. Yeah, it is like those word problems. (laughing) You learn a lot when you're young that you don't realize." (June 2022, translated by Teddy Zheng)
				</blockquote>
				<p>Eva currently maintains a steady supply of ice cream in her freezer. She eats them much more freely than she used to.</p>
				<p></p>

				<h1 id='career'>CAREER</h1>
				<p>Eva was also an active part of the local Chinese community and served as president of the Chinese school for six years. Although she retired from teaching public school in 2024 like most of her colleages, she continues to volunteer teach intro-level Chinese to children and adults alike. When asked why, she simply replied, "Why not?" </p>
				<p>If you are in Sugarland, Texas, and you're available at 9:30-11:00 AM on Saturdays, you might be able to meet Eva. Please keep in mind that she takes timeliness seriously, so don't arrive late. In fact, come early to make sure you get one of the seats with a good desk.</p>

				<h1 id='garden'>2024 GARDEN CROP</h1>
				<ul>
					<li>Tomatoes: 108</li>
					<li>Cherry tomatoes: "Impossible to count." </li>
					<li>Okra: 51</li>
					<li>Bell peppers: 23</li>
					<li>Cucumbers: 32, "Plus what the deer ate."</li>
					<li>Jalapenos: 6 jars of preserves</li>
					<li>Avocado: "Still growing, needs a few more years."</li>
					<li>Watermelon: 1 (!)</li>
				</ul>

				<h1 id='trivia'>TRIVIA</h1>
				<ul>
					<li>Eva's favorite soft drink is Fanta, except for when she's having pizza, "then it has to be Coke."</li>
					<li>Her favorite novel is The Murder of Roger Ackroyd by Agatha Christie.</li>
				</ul>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
					<li><NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Eva;
