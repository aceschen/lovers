
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from '../components/header';
import Ad from '../components/ad';

const Loved = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>
				<h1>CLASSIFIEDS</h1>
				<Ad title="galaxy skirt?" date="05/03/25" author="corduroy"
				text="ann arbor, near the umich campus, outside dunkin donuts... i ran into you and spilled all my coffee everywhere. i feel really
				terrible about it bc your skirt was really cool and i want to get you a new one. any chance you see this?"></Ad>

				<Ad title="DC AREA please help me find my family" date="05/01/25" author="cinna121@gmail.com"
				text="DC blackout happed during a family reunion. I wasn't there yet because of a work conflict. I can't reach anybody. Does anybody
				have advice on how to start searching? Anybody have any luck in the past? I'm really panicking. I don't know what to do. Any
				encouragement or leads or ANYTHING helpful. "></Ad>

				<Ad title="UPDATE on red lake biker" date="04/23/25" author="veevee"
				text="we found each other :)"></Ad>
				
				<Ad title="An apology" date="04/19/25" author="Your friend"
				text="You sent me this link a couple of months ago. 'This kind of thing is totally up your alley, right?' I dismissed it at the time
				because I was 'too busy'. I was up for a promotion or something I guess. I don't know. I'm sorry. I'm sorry I wasn't there for you.
				I know, deep down, that there isn't anything I could have done to stop it. My job, my whole life is about facts. Science. Whatever.
				All the science in the world isn't going to bring you back, I know that. Thank you for thinking of me. I miss you."></Ad>
				
				<Ad title="HELP WANTED: GARDEN WORK" date="04/21/25" author="ELEANOR"
				text="LOOKING FOR A STRONG YOUNG MAN TO DO SOME GARDEN WORK. TWO MONTHS HAVE PASSED SINCE MY HUSBAND PASSED. I THINK IT IS TIME
				TO CLEAR THE WEEDS AND PICK MY HEAD UP"></Ad>

				<Ad title="Thank you" date="04/23/25" author="(anonymous)"
				text="I felt like shit all day and you came up to me and said my hair reminded you of your favorite sunrise"></Ad>
				
				<Ad title="biker at red lake" date="04/17/25" author="veevee"
				text="hi! i was skating around red lake recently and fell really hard. a biker immediately stopped, like stopped in her tracks, and
				came to my rescue. she had an entire first aid kid hidden away in her bag. she fixed up my scrapes and bruises so fast, it was like
				magic. then she told me she was running late to something and left immediately. she was wearing a teal biking shirt and a navy helmet
				with small stars painted onto it. her bike was black but covered in stickers. OH and she wore black glasses, she took them out of her
				bag which she was stitching me up. AGHHH! any ideas on who this could be??"></Ad>

			</body>
		</div>
	  );
}

export default Loved;
