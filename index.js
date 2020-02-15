const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");

const passport = require("./libs/passport_fb");
const passportRouter = require("./modules/passportFB");

const { PORT, JWT_SECRET } = require("./config");

const App = express();

// Hook nessensaly tools for app
App.use(express.urlencoded({ extended: false }));
App.use(express.json());
App.use(helmet());
App.use(morgan());
App.use(passport.initialize());

// Hook jwt
App.use(
  jwt({
    secret: JWT_SECRET,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
  }).unless({ path: ["/", "/alive", "/generate"] })
);
App.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).end("Unautorized");
  }
});

App.get("/", function(req, res) {
  res.status(200).end();
});

App.use(passportRouter);

// For test only service is a live ?
App.get("/alive", function(req, res) {
  res.status(200).send(new Date());
});

App.get("/private", function(req, res) {
  res.status(200).send(req.user);
});

App.get("/generate", function(req, res) {
  res.status(200).send(jsonwebtoken.sign({ name: "Teepakorn.A" }, JWT_SECRET));
});

// Default 404
App.use(function(req, res) {
  res.status(404).end();
});

App.listen(PORT, function() {
  console.log("Running on port: " + PORT);
});
