import "isomorphic-fetch";

export default () => {
  return fetch(
    `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // only keep 10 first results
      return data;
    });
};
