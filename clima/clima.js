const axios = require('axios');

const getClima = async(lat, lng) => {

    let encodelat = encodeURI(lat);
    let encodelng = encodeURI(lng);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${encodelat}&lon=${encodelng}&units=metric&appid=a089a552123133563e9d23b7d2fad2b9`)

    if (resp.data.message === "Nothing to geocode" || resp.data.message === `${encodelat} is not a float`) {
        throw new Error(`No hay resultados para la ciudad ${encodelat}`);
    }

    let temperatura = resp.data.main.temp;

    return temperatura;
}


module.exports = {
    getClima
}