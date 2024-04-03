const getposts = async (endpoint) => {
  try {
    let result = await fetch(
      `https://jsonplaceholder.typicode.com/${endpoint}`
    );
    let data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
