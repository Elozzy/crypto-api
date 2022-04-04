const express = require("express");
const router = express();
const passport = require("passport");

const walletRoute = require("./api/WalletRoute")

// Passport Middleware
router.use(passport.initialize());

// Passport Configuration
require("../config/passport")(passport);


//wallet address
router.use("/wallet", walletRoute )

module.exports = router;
