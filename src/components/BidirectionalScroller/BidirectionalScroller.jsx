import './BidirectionalScroller.css';

export default function BidirectionalScroller() {
	return (
		<div className='bs-scroll-container'>
			<div className='bs-left-panel'>
				<section>1</section>
				<section>2</section>
				<section>3</section>
				<section>4</section>
				<section>5</section>
			</div>
			<div className='bs-right-panel'>
				<section>6</section>
				<section>7</section>
				<section>8</section>
				<section>9</section>
				<section>10</section>
			</div>
		</div>
	);
}
