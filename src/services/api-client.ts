import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "81df600c14ed4c029a4465cce6efa240",
  },
});
