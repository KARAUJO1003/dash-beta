import api from "@/lib/axios";

export const getTestUser = async () => {
  const dataUser = await api
    .get("/api/test/user")
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      console.log('Error na request do api.get("/api/test/user")', error);
    });

  return dataUser;
};
