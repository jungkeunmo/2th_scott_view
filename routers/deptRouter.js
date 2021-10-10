const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res)=> {
    const selectQuery = `
        SELECT * FROM DEPT;
    `;
    try {
        db.query(selectQuery, (err, rows) => {
            res.render("screens/dept", {rows});
        });
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
});

module.exports = router;