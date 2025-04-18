const axios = require('axios');
//importamos la funcion que obtiene el token de acceso
const  getToken = require('../utils/getToken');

const getAllProducts = async (req, res, next) => {
  try {
    // Obtenemos el token de acceso
    const tokenData = await getToken();
    const accessToken = tokenData.access_token;

    // Configuramos las cabeceras necesarias para la petición
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      accept: 'application/json',
      'Content-Type': 'application/json',
      'IM-CustomerNumber': 'BF3601', 
      'IM-SenderID': 'MyCompany', 
      'IM-CorrelationID': 'fbac82ba-cf0a-4bcf-fc03-0c5084', 
      'IM-CountryCode': 'MX' 

    }

    const response = await axios.get('https://api.ingrammicro.com:443//resellers/v6/catalog/', { headers });

    console.log(response.data);

    res.status(200).json(response.data);

  } catch (error) {
    console.log('Error al obtener los productos del catalogo', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al obtener los productos del catalogo' });

  }
}

module.exports = {
  getAllProducts
};