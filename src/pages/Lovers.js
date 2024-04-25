
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from '../components/header'

const Lovers = () => {
    return (
		<div className="App" >
			<header className='left-align'>
				<Header/>
			</header>
		  
			<body className='left-align'>
				<h1>CONTRIBUTORS</h1>

				<p>
				x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*<br/>
				*                                                                                *<br/>
				*                                                                                *<br/>
				*                                                                                *<br/>
				*      /*\/*\                                                                    *<br/>
				*     :      :                        People                         /*\/*\      *<br/>
				*      \____/    __                  who have                       :      :     *<br/>
				*        )) _  :*__*:                loved us                  __    \____/      *<br/>
				*      _ ((//   \__/                                         :*__*:    ))        *<br/>
				*      \\((      \\            (and who they love.)           \__/     ((        *<br/>
				*        ))      //                                            \\      ))        *<br/>
				*        ((      \\                                            //      ((        *<br/>
				*        ))      //                                            \\      ))        *<br/>
				*        ((      \\                                            //      ((        *<br/>
				x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*-*x*
				</p>
				
				<details>
					<summary><NavLink to='/allie' className='link'>allieoops</NavLink></summary>
					<ul>
						<li><NavLink to='/eva' className='link'>Eva Lu</NavLink></li>
						<li><NavLink to='/lindsay' className='link'>Lindsay Johnson</NavLink></li>
						<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
						<li><NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink></li>
					</ul>
				</details>

				<details>
					<summary><NavLink to='/cheezer' className='link'>cheezer</NavLink></summary>
					<ul>
						<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
						<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
						<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
						<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					</ul>
				</details>
				
				<details>
					<summary>calderom</summary>
					<ul>
						<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
					</ul>
				</details>

				<details>
					<summary><NavLink to='/lindsay' className='link'>mezzo</NavLink></summary>
					<ul>
						<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
					</ul>
				</details>
				
				<details>
					<summary><NavLink to='/minimo' className='link'>minimo</NavLink></summary>
					<ul>
						<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
						<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
						<li><NavLink to='/plick' className='link'>Plick</NavLink></li>
						<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
						<li><NavLink to='/zoey' className='link'>Zoey</NavLink></li>
					</ul>
				</details>

<details>
	<summary><NavLink to='/anelisa' className='link'>nelisa</NavLink></summary>
	<ul>
		<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
	</ul>
</details>
				
				<details>
					<summary><NavLink to='/plick' className='link'>plick__</NavLink></summary>
					<ul>
						<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
						<li><NavLink to='/cheezer' className='link'>cheezer</NavLink></li>
						<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
						<li><NavLink to='/plick' className='link'>plick</NavLink></li>
						<li><NavLink to='/teddy' className='link'>Teddy Zheng</NavLink></li>
					</ul>
				</details>
				
				<details>
					<summary>timh</summary>
					<ul>
						<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
					</ul>
				</details>
				
				<details>
					<summary><NavLink to='/teddy' className='link'>wizard_slayer_713</NavLink></summary>
					<ul>
						<li><NavLink to='/allie' className='link'>Allie Zheng</NavLink></li>
						<li><NavLink to='/anelisa' className='link'>Anelisa</NavLink></li>
						<li><NavLink to='/betbetbet' className='link'>betbetbet</NavLink></li>
						<li><NavLink to='/eva' className='link'>Eva Lu</NavLink></li>
						<li><NavLink to='/minimo' className='link'>Minimo</NavLink></li>
						<li><NavLink to='/yupeng' className='link'>Yupeng Zheng</NavLink></li>
					</ul>
				</details>
				
				<details>
					<summary><NavLink to='/yupeng' className='link'>zhengyp</NavLink></summary>
					<ul>
						<li><NavLink to='/eva' className='link'>Eva Lu</NavLink></li>
					</ul>
				</details>
			</body>
		</div>
	  );
}

export default Lovers;
