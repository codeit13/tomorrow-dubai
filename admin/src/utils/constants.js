let BASE_URL = "https://tomorrowluxuryproperty.com/api";
// let BASE_URL = "http://localhost:5000/api";

let config = {};

const setConfig = (key, value) => {
  config[key] = value;
};

export { BASE_URL, config, setConfig };
