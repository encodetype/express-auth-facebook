module.exports = {
  // server
  PORT: process.env.PORT || 3000,

  // facebook
  FACEBOOK_CLIENT_ID:
    process.env.FACEBOOK_CLIENT_ID || "YOUR_FACEBOOK_CLIENT_ID",
  FACEBOOK_CLIENT_SECRET:
    process.env.FACEBOOK_CLIENT_SECRET || "YOUR_FACEBOOK_CLIENT_SECRET",
  FACEBOOK_URL_CALLBACK:
    process.env.FACEBOOK_URL_CALLBACK ||
    "http://localhost:3000/api/facebook/callback",

  // jwt
  JWT_SECRET: process.env.JWT_SECRET || "hhhh-_GgggL!!LLL01"
};
