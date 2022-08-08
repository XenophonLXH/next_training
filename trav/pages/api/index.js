import axios from "axios";


export const getPlaces = async (type, sw, ne) => {
  try {

    let URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

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
        'X-RapidAPI-Key': 'dd4c801922msh5848c71e419725bp16a640jsn2dd063c33071',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;

  } catch(e) {

    console.log(`Erro Fetching Place: ${e}`)
    return [];
  }
}