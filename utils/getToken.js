//importamos axios para hacer peticiones HTTP
const axios = require('axios');
//importamos qs para convertir on¿bjetos JS a formato x-www-form-urlencoded
const qs = require('qs');

// Función que obtiene un token de acceso desde le endpoints de 0Auth2 de Ingram
const getToken = async () => {
  try {
    // Creamos los datos que pide la API para obtener el token
    const data = {
      grant_type: 'client_credentials',
      client_id: process.env.INGRAM_CLIENT_ID, // ID de cliente registrado en Ingram
      client_secret: process.env.INGRAM_CLIENT_SECRET, // Secreto de cliente registrado en Ingram
    };
// Hacemos una petición POST a Ingram para obtener el token
    const response = await axios.post(
      'https://api.ingrammicro.com:443/oauth/oauth30/token', // Endpoint de Ingram para obtener el token 
      qs.stringify(data), // Convertimos los datos a formato x-www-form-urlencoded
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Especificamos el tipo de contenido de la petición
        },
      }
    );
    // Devolvemos el token obtenido

    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.log('Error al obtener el token', error.response?.data || error.message);
    throw error;
  }

}

module.exports = getToken;

