const express = require("express");
const passport = require("../libs/passport_fb");

const router = express.Router();

router.get("/api/facebook/login", passport.authenticate("facebook"));
router.get(
  "/api/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/api/facebook/failed",
    successRedirect: "/api/facebook/success",
    session: false
  })
);
router.get("/api/facebook/failed", function(req, res) {
  res.status(200).send("facebook-failed");
});
router.get("/api/facebook/success", function(req, res) {
  res.status(200).send("facebook-success");
});

module.exports = router;
