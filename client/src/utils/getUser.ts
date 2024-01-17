import axios from "axios";

export default async function getUser() {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("token not found");
    return;
  }

  const user = await axios({
    method: "post",
    url: "http://localhost:3000/api/v1/user/get",
    data: { token },
  })
    .then((res) => res.data)
    .catch(console.error);

  return user;
}

export async function getID() {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("token not found");
    return;
  }

  const user = await axios({
    method: "post",
    url: "http://localhost:3000/api/v1/user/getid",
    data: { token },
  })
    .then((res) => res.data)
    .then((data) => data)
    .catch(console.error);

  return user;
}
