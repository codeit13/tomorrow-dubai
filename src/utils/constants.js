let BASE_URL =
  process.env.VUE_APP_MODE == "DEV" ? "http://localhost:3000" : "/";

export { BASE_URL };
