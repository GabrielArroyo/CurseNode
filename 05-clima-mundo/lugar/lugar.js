const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '2968646c9emsh7f2045993de7869p142407jsn31fe4ec38973' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }


    const data = resp.data.Results[0];
    const direccionResp = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccionResp,
        lat,
        lng
    }


}


module.exports = {
    getLugarLatLng
}