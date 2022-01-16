import React from 'react';

function Media({ item }) {
	if (item.media_type == 'image') {
		// if media is an image
		return <img className='card-img-top' src={item.url} alt={item.title}></img>;
	} else {
		// if media is a video
		return <iframe src={item.url}></iframe>;
	}
}

export default Media;
