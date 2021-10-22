const router = require("express").Router();

console.log("zzzzzzzzz");
router.get("/" , (req, res ) => {
    console.log("azzzz");
    res.send("ezihriuez")
});
console.log("bbbbbbbbbb");
module.exports = router 