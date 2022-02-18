export const getUsers = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await res.json();

  console.log(users);
  return users;
};
