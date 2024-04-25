
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
				

			</body>
		</div>
	  );
}

export default Loved;
