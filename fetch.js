const fetch = require("node-fetch");
const user = async (url) => {
	var fetched;
	const data = await fetch(url);
	fetched = await data.json();
	console.log(fetched);
};

user("https://cat-fact.herokuapp.com/facts");
