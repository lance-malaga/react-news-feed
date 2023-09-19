function News (props) {
	let image;
	if (!props.image) {
		image = "https://placehold.co/400x400?text=News Story";
	} else {
		image = props.image;
	}

	const handleDelete = (e) => {
		const element = e.currentTarget;
		if (e.target !== e.currentTarget) {
			element.remove();
		}
	};
	
	return (
		<div className="news" onClick={handleDelete}>
			<img src={image} alt={props.title} width={400} height={400} />
			<span className="delete__button">x</span>
			<div className='news_details'>
				<p>By {props.creator ? props.creator : 'Author'}</p>
				<div>
					{props.category.map((data, index) => {
						return (
						<span key={index}>{(index ? ' | ' : '') + data }</span>
						)
					})
					}
				</div>
			</div>
			<h1>{props.title}</h1>
			<p>{props.description?.length >= 50 ? (props.description.substring(0,100) + '...') : props.description}</p>
			<a href={props.link} target='_blank' rel='noreferrer'>READ MORE</a>
		</div>
	);
}

export default News;