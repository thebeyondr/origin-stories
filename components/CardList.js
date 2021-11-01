import { useInView } from 'react-intersection-observer';
import Card from './Card';

export default function CardList({ stories }) {
	const { ref, inView } = useInView({ threshold: 0.2 });

	const featuredStories = stories.sort((a, b) => {
		return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
	});
	return (
		<>
			<h2 className='my-10 pl-6 md:pl-20'>Origin Stories</h2>
			<div ref={ref} className='grid lg:grid-cols-3 justify-items-center'>
				{featuredStories.map((story, index) => (
					<Card
						key={index}
						story={story}
						index={index}
						inView={inView}
						maxLength={stories.length}
					/>
				))}
			</div>
		</>
	);
}
