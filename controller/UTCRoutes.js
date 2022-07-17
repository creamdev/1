const express = require("express");
const router = express.Router();
const { getTime } = require("../service/getTime");
const timezone = require("../timezone.json");

router.get('',(req,res)=>{
    res.send(timezone)
})

router.get("/:id", (req, res) => {
  timezone.forEach((element) => {
    if (element.id == req.params.id) {
      res.send("Timezone " + element.name + ": " + getTime(element.timezone));
    }
  });
});

module.exports = router;
