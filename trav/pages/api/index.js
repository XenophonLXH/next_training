import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaces = async (sw, ne) => {
  try {

    const { data : {data} } = await axios.get(URL, {
      method: 'GET',
      url: URL,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;

  } catch(e) {

    console.log(`Erro Fetching Place: ${e}`)
    return [];
  }
}