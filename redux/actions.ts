import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
});

export const baseUrl = "http://localhost:3000";

export const UPDATE_FLOWER = "UPDATE_FLOWER";

export const updateFlower = (flower) => ({
  type: UPDATE_FLOWER,
  flower,
});

export const getFlowers = () =>
  axios
    .get(
      `http://192.168.10.22:3001/flowers
`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log(e));
