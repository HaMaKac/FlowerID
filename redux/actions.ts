export const getFlowers = () => {
  return fetch("http://192.168.10.22:3001/flowers")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addFlower = async (flower) => {
  await fetch("http://192.168.10.22:3001/flowers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: flower,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
