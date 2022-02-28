const express = require('express');
const router = express.Router();
const AppUserModel = require('../models/appUser');
router.get("/", async(req, res) => {
    try {
        const appUsers = await AppUserModel.find();
        res.json(appUsers);
    } catch (err) {
        res.end("Error occured" + err);
    }
})
router.post("/", async(req, res) => {
    try {
        const appUserDetail = new AppUserModel({
            name: req.body.name,
            email: req.body.email,
            isPaidMember: req.body.isPaidMember
        })
        const response = await appUserDetail.save();
        res.json(response);
    } catch (err) {
        res.end("Error occured" + err);
    }
})
router.get("/:id", async(req, res) => {
    try {
        const appUser = await AppUserModel.findById(req.params.id);
        res.json(appUser);
    } catch (err) {
        res.end("Error occured" + err);
    }
})
router.patch("/:id", async(req, res) => {
    try {
        const appUser = await AppUserModel.findById(req.params.id);
        appUser.isPaidMember = req.body.isPaidMember;
        const a1 = await appUser.save();
        res.json(a1);
    } catch (err) {
        res.end("Error occured" + err);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const appUser = await AppUserModel.findById(req.params.id);
        const a1 = await appUser.delete();
        res.json(a1);
    } catch (err) {
        res.end("Error occured" + err);
    }
})
module.exports = router;