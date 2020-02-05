const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(response => response.json()))
  );
  console.log("users", users);
};


// error handling
const getData = async function() {
  try{
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(response => response.json()))
    );
    console.log("users", users);
  } catch (err) {
    console.error('ooops', err);
  }
};
