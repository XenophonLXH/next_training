import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '20bf70121emshd006ebc7ee3a5f1p1f0777jsn9a5935cd7dae',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlaces = async () => {
  try {

    const { data : {data} } = await axios.get(URL, options);
    return data;

  } catch(e) {

    console.log(`Erro Fetching Place: ${e}`)
    return [];
  }
}



axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});