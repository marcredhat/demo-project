let api = require("./api");

async function getUsersFromApi(minAge, maxAge) {
  const res = await api.get("/users", {
    params: {
      minAge: minAge || "0",
      maxAge: maxAge || "100",
    },
  });

  if (res.status === 200) {
    return res.data.users;
  } else {
    console.log(res.error);
  }
}

module.exports = {
  getUsersFromApi,
};
