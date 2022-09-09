
//dirección api a utilizar
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8uT9cgJorJPWu7ITLGo9Ww&part=snippet%2Cid&order=date&maxResults=10';

const content = document.getElementById("content");

//opciones para usar la api
//son por defecto de rapidapi
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33d17e14dbmsh0f128f40b261c6dp17650djsne10b24929c8b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//función fetch de datos
async function fetchData(urlApi){
	
	//consulta la api
	//con node-fetch
	const response = await fetch(urlApi, options);
	//convierte la respuesta a json
	const data = await response.json();

	//retorna los datos
	return data;
}


//función que se ejecuta automáticamente 
//al cargar el archivo
// (async ()=>{
// })();
(async () => {
	try{
		const videos = await fetchData(API);
		let view = 
			`${videos.items?.map(video => 
				`
				<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${video.snippet.title}
					</h3>
				</div>
				</div>
				`
				).slice(0, 8).join(' ')}
			`;
		content.innerHTML = view;
		
	}catch (error){
		console.log("Mierda!  " + error);
	}
})();



