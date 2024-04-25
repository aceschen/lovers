import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Zoey = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>ZOEY</h1>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 2016                   |<br/>
				| BREED      | Mutt                   |<br/>
				| FAMILY     | <NavLink to='/minimo' className='link'>Minimo</NavLink>                 |<br/>
				|            | <NavLink to='/teddy' className='link'>Teddy Zheng</NavLink>            |<br/>
				'-------------------------------------'
				</p>

				<p>
				<a href='#life' className='link'>Life</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>
				</p>

				<h1 id='life'>LIFE</h1>
				<p>Zoey had a very rich life. Everything she ever needed was provided to her from the moment she was born to the moment she passed. Her favorite place in the entire world was Twin Oaks Park – we would go there and she would run around on the grass for hours and hours. The park has a small mulch playground with swings and a slide, but most of it was a wide open field surrounded by tall, tall trees. In the winter, the playground would almost always be empty and Zoey could run through the snow without a care in the world, leaving a trail of eager footprints behind her. When we went on summer afternoons, half the grass was in cool shade and half of it was in the warm sun. Zoey would zip back and forth between the two, like a dolphin jumping out of water. We would come home with grass stains all over us; a part of that place must be embedded in my jeans and in her fur.  	</p>
				<p>After she died from health complications two years ago, we cremated Zoey and scattered her ashes at the base of the trees. Teddy and I built a small fixture, about the size of a birdhouse, and nailed it into one of the trees. Once a month, we would restock it with tennis balls and say hello to Zoey, the angel of Twin Oaks. </p>
				<p>In 2024, when signs first appeared, the trees started to die. They rotted from the bottom up, bark turning ash gray and soft to the touch. Eventually they crumbled under the weight of their own leaves. There is no Twin Oaks park anymore, and I don’t know where Zoey will be waiting for me when I die. </p>
				
				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
				</ul>

			</body>
		</div>
	  );
}

export default Zoey;
