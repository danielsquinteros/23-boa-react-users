const getUsers = () => new Promise((resolve, reject) => fetch('https://random-data-api.com/api/users/random_user?size=10')
  .then((response) => {
    const responseDecode = response.json()
    resolve(responseDecode);
  })
  .catch((err) => {
    reject(err);
  }));

export { getUsers }