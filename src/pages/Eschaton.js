import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Eschaton = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>ESCHATON</h1>
				
				<p>
				Eschaton refers to both the impending apocalpyse and to the variety of strange effects observed worldwide since January 1, 2024. This day is colloquially referred to as "the start". 
				</p>
				
				<h1 id='lovers'>KNOWN EFFECTS</h1>
				<p>(Last updated May 2, 2025)</p>

				<h2>In flora</h2>
				<p>Citizen scientists across the globe have been reporting sudden onset tree rot in a wide variety of locations, climates, and species. Despite best efforts of arborists and gardeners alike, it appears impossible for trees that have begun decaying since the start to recover. Unlike standard tree rot, the decay is eventually so complete that the entire tree is reduced to a dark gray, ash-like powder. All major tree genera appear to be afflicted. </p>
				<p>However, no other plants have shown signs of the characteristic "Eschaton rot". In fact, many home gardeners have noticed more plentiful harvests and healthier flowers. </p>

				<h2>In fauna</h2>
				<p>A wide variety of wildlife have shown signs of odd, erratic behavior, often culminating in sudden death. Although symptoms appear to align with rabies (vomiting, fearfulness, pupil dilation, hypersensitivity to light, fever, foaming at the mouth, and hydrophobia), animals in captivity with no possible rabies exposure have also been affected. Non-mammals like avians, reptiles, and fish which are normal insusceptible to rabies have also shown similar symptoms. </p>

				<h2>In humans</h2>
				<p>As of September 1, 2024, some humans have begun showing the same symptoms as fauna, dubbed "Eschaton fever". It is unclear if there are any traceable signs of onset or if it is contagious. Due to censorship, it is unclear how many total cases have occurred and how many cases have led to death. The US government places the worldwide death toll at around 250,000, but some estimate the real number is significantly higher. </p>

				<h2>In weather</h2>
				<p>The sky is no longer blue.</p>

				<h1 id='lovers'>BLACKOUT REGIONS</h1>
				<p>There are a handful of known regions that, for no clear reason, can no longer tolerate light, sound, or heat. Energy produced by both natural and artificial sources simply disappears, as if consumed by an unknown, unseen force. Onset is incredibly sudden and usually swallows a few square miles at a time. Most of these locations appear to be abandoned, but there is currently no way of knowing whether persons remain in them, dead or alive. There are currently 26 known blackout regions, 23 of which have affected metropolitan areas. </p>
				
				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Eschaton;
