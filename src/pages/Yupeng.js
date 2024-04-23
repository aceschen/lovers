import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Yupeng = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>YUPENG ZHENG</h1>
				
				<p>
					Yupeng Zheng is a father and mail carrier from Shanghai, China. He currently lives in Houston, Texas, working the Monday and Thursday route and enjoying the sunshine.
				</p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1966                   |<br/>
				| OCCUPATION | Mail carrier           |<br/>
				| PARTNER    | <NavLink to='/eva' className='link'>Eva Lu</NavLink>                 |<br/>
				| FAMILY     | <NavLink to='/teddy' className='link'>Teddy Zheng</NavLink> (son)      |<br/>
				|            | <NavLink to='/allie' className='link'>Allie Zheng</NavLink> (daughter) |<br/>
				|            | Yuming Zheng (brother) |<br/>
				|            | Yuqin Zheng (sister)   |<br/>
				'-------------------------------------'
				</p>
				<p>
				<a href='#life' className='link'>Personal Life</a><br/>
				<a href='#career' className='link'>Career</a><br/>
				<a href='#death' className='link'>Death</a><br/>
				<a href='#lovers' className='link'>Contributors</a><br/>

				</p>

				<h1 id='life'>PERSONAL LIFE</h1>
				<p>Although Yupeng is fairly private about his early life, he claims to once have caught a fish that weighed as much as him when he was eight years old.</p>
				<blockquote>
				"What? You don't believe me? Ask your uncle next time you see him. We reeled it in together and almost fell straight into the water. It flopped around like crazy! Ah, those were happy days. I suppose it could have been bigger in my memory, but I'll never catch one like that again." (July 2022, translated by Allie Zheng) 
				</blockquote>

				<h1 id='career'>CAREER</h1>
				<p>Yupeng has delivered mail for the USPS since he immigrated to Houston in 2001. Despite his injuries, he continues to work twice a week. </p>
				<blockquote>
				"The mail is much more interesting nowadays. Less bills and coupons, it's mostly handwritten letters. Some mailboxes get too full because they've stopped decommissioning them. I try to fit them in anyways, sometimes I'll make some space by taking out old magazines and putting them somewhere safe. Just in case someone is coming back for them." (January 2025, translated by Teddy Zheng)
				</blockquote>

				<h1 id='death'>DEATH</h1>
				<p>Yupeng intends to live at his Houston home until <NavLink to='/eschaton' className='link'>Eschaton</NavLink>. However, he is a former member of the <NavLink to='/alp' className='link'>Autonomous Life Party</NavLink>. He left two months after joining after his family approached him with concerns. Since then, he has helped four others escape the party.  </p>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
				</ul>

			</body>
		</div>
	  );
}

export default Yupeng;
