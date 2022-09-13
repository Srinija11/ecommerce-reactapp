import axios from "axios";
export const herokuDomain = `https://ecommerce-server-training.herokuapp.com`;
export const localDomain = `http://localhost:9090`;

export const getAllProducts = async () => {
  const { data } = await axios.get(`${localDomain}/products`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("google-oauth-token"),
    },
  });
  return data;
};

export const getProduct = async ({ queryKey }) => {
  const { data } = await axios.get(
    `${localDomain}/products/${queryKey[1]}`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("google-oauth-token"),
      },
    }
  );
  console.log(data);
  return data;
};
