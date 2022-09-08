const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCC9eo_cxdgW2_z2QLbowt_Q&filter=uploads_latest&hl=en&gl=US';




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33d17e14dbmsh0f128f40b261c6dp17650djsne10b24929c8b',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);

    const data = await response.json();

    return data;
}

