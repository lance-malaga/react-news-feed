function FeaturedNews (props) {
	let image;
	if (!props.image) {
		image = "https://placehold.co/400x400?text=News Story";
	} else {
		image = props.image;
	}
  
	return (
		<div className="featured_news">
			<img src={image} alt={props.title}/>
			<div className='news_details'>
				<p>By {props.creator}</p>
				<div>{props.category}</div>
			</div>
			<div>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<a href={props.link} target='_blank' rel='noreferrer'>READ MORE</a>
			</div>
		</div>
	);
}

export default FeaturedNews;