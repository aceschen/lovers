import { NavLink } from 'react-router-dom';
import '../App.css';

import Header from '../components/header'

const Allie = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>

				<h1>ALLIE ZHENG</h1>
				
				<p>
				Allie Zheng is a swimmer, citizen scientist, and former real estate agent in Houston, Texas. She is known for Sky Index and Splashlight DFW. </p>
				<p>
				,-------------------------------------.<br/>
				| BORN       | 1987                   |<br/>
				| OCCUPATION | Swimmer                |<br/>
				|            | Real estate agent      |<br/>
				| FAMILY     | <NavLink to='/eva' className='link'>Eva Lu</NavLink> (mother)        |<br/>
				|            | <NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink> (father)  |<br/>
				|            | <NavLink to='/teddy' className='link'>Teddy Zheng</NavLink> (brother)  |<br/>
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
				<blockquote>
				"The only thing people need to know about me is that I'm clumsier on land than I am in water." (October 2024)
				</blockquote>

				<h1 id='career'>CAREER</h1>
				<h2>Competitive swimming (2005-2015)</h2>
				<p>Allie was recruited to her university for swimming. She competed at the local, state, and national levels throughout college and brought her team to first place at the 2008 D1 women's swimming championship. Since graduating the following year, she has regularly competed in national and international meets. In 2015, Allie retired from swimming, which she has stated was largely to avoid further physical injury and strain. She continued to coach local girls swim teams in her free time.</p>

				<h2>Real estate (2016-2024)</h2>
				<p>After a year of recovery, Allie earned her real estate license and became an agent in Fort Worth. She specialized in residential homeownership. </p>
				<blockquote>
				"I dont know, a lot of real estate agents are kind of like... rabid, do you know what I mean? I try to remember it's a day job. As much as I can manage. Don't think I've ever had a great work-life balance, but I mean, can you blame me?" (September 2021)
				</blockquote>
				<p>In early 2024, the Dallas-Fort Worth (DFW) metropolitan area became a blackout region. To date, it is the largest blackout to affect the United States. At the time, Allie was at a girls swim meet in Austin with 26 high school students and three other coaches. </p>

				<h2>Return to swimming (2024-present)</h2>
				<p>Following the blackout, Allie quit real estate and organized Splashlight DFW, a swim-a-thon campaign to benefit the both the girls on her team and others who avoided but were affected by the incident. Over 6 months, she returned to conditioning and training in earnest and asked people to pledge a donation per 25 yards she she swam during her preparation period. </p>
				<p>The campaign concluded in a 15 mile (24.1 kilometer) swim in the Gulf of Mexico and a celebratory event in Galveston. She raised $65,000 over the course of the event, which was distributed to individuals, families, and grassroots organizations supporting those affected by the DFW blackout. Currently, she is co-organizing a second campaign with her <NavLink to='/lindsay' className='link'>best friend</NavLink>. Planned for August of 2025, this swim-a-thon will cover a shorter distance with more swimmers, with a goal of $80,000 raised. </p>

				<h1 id='sky-index'>SKY INDEX</h1>
				<p>At the start, Allie began a diary to track the color of the sky. It began with one photo a day, posted to her personal (private) social media accounts. After interest from friends, she began a public account tracking the sky in her local area. The account quickly went viral, and within the following week, thousands of users worldwide began similar practices under the hashtag #SkyIndex. </p>
				<p>Realizing that this massive volume of photos increased the potential for detecting patterns and upcoming blackouts, Allie worked with betbetbet and Teddy Zheng to start the Sky Index website. The platform scraped the hashtag multiple times per day and organized information locationally to help users track sky activity in their own areas. It is maintained by Allie and a small team of volunteers.</p>

				<h1 id='trivia'>TRIVIA</h1>
				<ul>
					<li>Allie can't juggle.</li>
				</ul>

				<h1 id='lovers'>CONTRIBUTORS</h1>
				<ul>
					<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					<li><NavLink to='/lindsay' className='link'>Lindsay Johnson</NavLink></li>
				</ul>
			</body>
		</div>
	  );
}

export default Allie;
