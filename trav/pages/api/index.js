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
        'X-RapidAPI-Key': '20bf70121emshd006ebc7ee3a5f1p1f0777jsn9a5935cd7dae',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;

  } catch(e) {

    console.log(`Erro Fetching Place: ${e}`)
    return [];
  }
}