const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://redterabox.vercel.app/api?data=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
