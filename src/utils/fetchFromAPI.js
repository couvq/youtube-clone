const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '672f444ba1msh5ef96f3113280dep176206jsnb157cac756a8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url) => {
    try {
        const response = await fetch(`${BASE_URL}/${url}`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}