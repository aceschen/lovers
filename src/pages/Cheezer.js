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

				<h1>CHEEZER</h1>
				
				<p>
				cheezer (known in real life as Charlie) is an animator from Van Nuys, California. He is currently working on an animated mini-series slated for release in 2026. </p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1990                   |<br/>
				| OCCUPATION | Animator               |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#favorites' className='link'>Favorites</a><br/>
				<a href='#curry' className='link'>Japanese Curry Recipe</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>

				</p>

				<h1 id='favorites'>FAVORITES</h1>
				<ul>
					<li>Food: Cheese duh</li>
					<li>Color: Orange</li>
					<li>Song: orange by CLAY</li>
					<li>TV show: Tatami Galaxy</li>
					<li>Movie: Into the Spider-Verse</li>
					<li>Video game: Professor Layton and the Curious Village</li>
					<li>Video game based on playtime: Animal Crossing New Horizons</li>
					<li>Board game: Jigsaw puzzles (does that count)</li>
					<li>Place: My bed</li>
					<li>Weather: Sunny!!</li>
					<li>Sky color: <NavLink to='/skyindex#cheezer' className='link'>This one</NavLink></li>
					<li>Hour of the day: 3pm</li>
					<li>Memory: Cooking with Team Hypotheses and MY MOM!</li>
					<li>Instrument: Harp</li>
					<li>Name: Beth</li>
				</ul>

				<h1 id='curry'>JAPANESE CURRY RECIPE</h1>
				<p>(This recipe is transcribed by <NavLink to='/plick' className='link'>Plick</NavLink> from the time we made curry together on Discord.)</p>

				<h2>Required ingredients</h2>
				<ul>
					<li>1 box of Japanese curry blocks</li>
					<li>1 can of coconut milk </li>
					<li>1 small yellow onion</li>
					<li>2 carrots</li>
					<li>5 small Yukon gold potatoes</li>
					<li>1 Fuji apple</li>
					<li>2 green onions</li>
					<li>As much garlic as you can tolerate</li>
					<li>Salt and pepper</li>
					<li>White pepper and whatever other spices you like</li>
					<li>1 box of dino nuggets </li>
					<li><i>Rogue Story</i> (???) - we'll see</li>
				</ul>

				<h2>Additional ingredients</h2>
				<ul>
					<li>1 sweet potato</li>
					<li>1 leek</li>
					<li>1 can of corn </li>
					<li>1 can of chickpeas</li>
					<li>1 Chinese sausage</li>
					<li>2 chicken thighs </li>
					<li>1 block of tofu </li>
					<li>1/2 can of Spam </li>
					<li>Cheese :)</li>
				</ul>

				<h2>Steps</h2>
				<ol>
					<li>Prep all your ingredients. Wash and dry produce and cut everything into chunks of similar sizes. PREHEAT THE OVEN!</li>
					<li>Mince garlic. Pour a little oil into a big ol' pot and turn it up to medium heat. Once the oil gets hot, sautee the garlic for a minute. </li>
					<li>If using chicken thighs or spam, throw that in there an sautee til it's not pink anymore. </li>
					<li>Sautee the yellow onion until translucent. It's probably good to salt at every step, but at least do it here to help draw out the water and everything. If you're patient, caramelize the onions for extra flavor. </li>
					<li>Now throw in all the other produce except any potatoes and sautee until they're softish. A couple minutes. 3? 4? How many is a couple to you? </li>
					<li>SEASON!!!!! I forget sometimes. </li>
					<li>Add the potatoes! And put the DINO NUGGETS IN THE OVEN! AND SET A TIMER!</li>
					<li>Then add the coconut milk, then add water until ingredients are covered (usually about 1 can). </li>
					<li>Bring it to a boil on high heat, then cover and simmer until the potatoes are soft (10-15 minutes). </li>
					<li>Turn the heat all the way down and add the curry blocks. Stir with purpose until the blocks are completely dissolved. Add more water if you want it soupier. </li>
					<li>Turn off all your kitchen appliances and serve, preferably topped with melty cheese! The dino nuggets are like baby chicken katsu if you think about it. Please enjoy. </li>
				</ol>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Cheezer;
