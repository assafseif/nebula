//POST API
export const PostApi = async (payload: any, url: string) => {
  console.log(payload, url);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  //   const data = await res.json();
  //   return data;
};

//GET API
// export const GetApi = async (url, jwt) => {
//   let token = getToken() || jwt;
//   const res = await fetch(url, {
//     method: "Get",
//     headers: {
//       Accept: "application/json",
//       "content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await res.json();
//   return data;
// };
