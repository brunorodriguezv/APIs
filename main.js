const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'fcf51c9ad7msh4bf31a16ce90e4fp1a4574jsn4133ea066995',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: 'English is hard, but detectably so'
	})
};

try {
	const response =  fetch(url, options);
	const result =  response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}