import './SnappingScroller.css';

export default function SnappingScroller() {
	return (
		<div className='ss-scroll-container'>
			<section className='ss-one'>
				<div className='ss-left'>
					<img src='https://source.unsplash.com/random?aesthetic,minimal&1' className='img' alt='' />
				</div>
				<div className='ss-right'>
					<h1>Hii..</h1>
				</div>
			</section>

			<section className='ss-two'>
				<div className='ss-left'>
					<h1>Sithu</h1>
				</div>
				<div className='ss-right'>
					<img src='https://source.unsplash.com/random?aesthetic,minimal&2' className='img' alt='' />
				</div>
			</section>

			<section className='ss-three'>
				<div className='ss-left'>
					<img src='https://source.unsplash.com/random?aesthetic,minimal&3' className='img' alt='' />
				</div>
				<div className='ss-right'>
					<h1>I also tried</h1>
				</div>
			</section>

			<section className='ss-four'>
				<div className='ss-left'>
					<h1>to make a</h1>
				</div>
				<div className='ss-right'>
					<img src='https://source.unsplash.com/random?aesthetic,minimal&4' className='img' alt='' />
				</div>
			</section>

			<section className='ss-five'>
				<div className='ss-left'>
					<img src='https://source.unsplash.com/random?aesthetic,minimal&5' className='img' alt='' />
				</div>
				<div className='ss-right'>
					<h1>scrolling thingy</h1>
				</div>
			</section>
		</div>
	);
}
