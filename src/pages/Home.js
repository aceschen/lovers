
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from '../components/header'

const Home = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>
				<h1 className='centered'>Welcome to <b>Lovers Wiki</b>, a collection of knowledge about our loved ones
				that anyone can contribute to. 237 articles since October 30, 2024.</h1>

				<br />


				<p>
				+================================================================================+
				|                                FEATURED ARTICLE                                |
				| <NavLink to='/eva' className={'link'}>Eva Lu</NavLink> is a mother and 3rd grade teacher from Hangzhou, China. She is known    |
				| for doing puzzles, gardening, and making the world’s best banana bread.        |
				+================================================================================+
				</p>

				<p>
				+================================================================================+
				|                                   NAVIGATION                                   |
				| <NavLink to='/loved' className={'link'}>Loved Ones</NavLink> - main articles about anyone that contributors love.                |
				| <NavLink to='/other' className={'link'}>Other Articles</NavLink> - additional information relevant to people's loved ones.       |
				| <NavLink to='/lovers' className={'link'}>Contributors</NavLink> - a list of all contributors and their edited articles.           |
				+================================================================================+
				</p>

				<p>
				+================================================================================+
				|                                      NEWS                                      |
				|                                                                                |
				| <b>Lovers in a Dangerous Time</b>                                                     |
				| 04/12/2025                                                                     |
				|                                                                                |
				| Hi, Teddy here! How's it going? It's been a little while. I haven't been       |
				| working on the wiki much outside of maintenance work here and there, but I'm   |
				| grateful to that it's still thriving. I appreciate each and every contributor  |
				| and reader - the good friends, the distant acquantainces, the total strangers. |
				| I always look forward to visiting this corner of the internet. Thank you.      |
				|                                                                                |
				| Contrary to what my computer's screentime counter claims, my attention lately  |
				| has turned towards the outside world (as I'm sure yours has as well). And      |
				| given the recent blackouts, I'm biting the bullet and doing something I've     |
				| been thinking about for a while.                                               |
				|                                                                                |
				|                              LOVERS' WRITE-A-THON                              |
				|                                 MAY 9-10, 2025                                 |
				|                                 HOUSTON, TEXAS                                 | 
				|                                                                                |
				| Bring your friends, your family, come one, come all - Momo and I are hosting   |
				| the very first IN-PERSON write-a-thon! Momo recently organized a state-wide    |
				| ALT meetup and it was such a wonderful experience. So much more laughter than  |
				| we've had in a while, I think. As per usual, it's thanks to her that I feel    |
				| like I can do this.                                                            |
				|                                                                                |
				| For those of you who can travel: we're working with a local hotel to organize  |
				| cheap or free lodging, so please RSVP soon! We're a pretty small operation so  |
				| we won't be able to cover meals or free merch... but I'll buy us pizza :)	     |
				|                                                                                |
				| For those who can't: we'll host a concurrent virtual write-a-thon, moderated   |
				| by Plick! I hear he's writing a mess of activities to keep you entertained, so |
				| you'll want to be there. We're looking for a US-based moderator to help him    |
				| out when he's sleeping, so reach out us if that sounds like a good time.       | 
				|                                                                                |
				| Oh, what's the article goal, you ask? We're aiming for... drumroll, please...  |
				|                                                                                |
				|                            !!! 200 NEW ARTICLES !!!                            |
				|                                                                                |
				| "But Teddy, doesn't that mean you're doubling the article count?" Why, yes it  |
				| does. To help generate some ideas for who you might write about, we've         |
				| conveniently timed the event to be right before Mother's Day. That's right,    |
				| bring your mom, bring your grandma, bring the friend or older sister who saw   |
				| your through your teen years, bring your kids, bring your teachers - or write  |
				| about them all. I'm sure you all know my bias is showing here.                 |
				|                                                                                |
				| We really hope to see y'all in May. We know as much about what's coming as the |
				| next person. Momo and I have a contingency plan in case Houston is next, but   |
				| it's unclear how much of it will still be executable. I won't say more for     |
				| fear of jinxing it. (*knocks on wood*)                                         |
				|                                                                                |
				| Well, I think that's just about enough from me. Spread the word and let us     |
				| know if we'll be seeing you.                                                   |
				|                                                                                |
				| Love, always,                                                                  |
				| Teddy                                                                          |
				+================================================================================+
				</p>
			</body>
		</div>
	  );
}

export default Home;
