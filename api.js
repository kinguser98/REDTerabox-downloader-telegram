const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://terabox-dl.qtcloud.workers.dev/api/get-info?shorturl=1KZACvTLOiXpuMCrXugCjOQ&pwd=`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
