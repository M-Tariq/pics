import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID F_oPnIFLtf4ElBGD-8X0cLoF9fdVsFvZgCWA4q5Hp_E",
  },
});
