import getUser from "./getUser";

async function getUserRole() {
  const user = await getUser();
  return user.user.role;
}

export default getUserRole;
