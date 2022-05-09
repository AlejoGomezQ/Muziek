import axios from "axios";

const baseUrl = "https://platzi-music-api.herokuapp.com";

const trackService = {};

trackService.search = function (q) {
  const type = "track";

  return axios
    .get(`${baseUrl}/search`, {
      params: {
        q,
        type,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

trackService.getById = function (id) {
  return axios
    .get(`${baseUrl}/tracks/${id}`)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

export default trackService;
