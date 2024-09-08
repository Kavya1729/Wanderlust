const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const methodOverride = require("method-override");
const {isLoggedIn} = require("../middleware.js");

//Index Route
router.get("", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

//NEW ROUTE
router.get("/new",isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

//SHOW ROUTE
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        req.flash("error", "Listing doesn't exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}));

//CREATE ROUTE
router.post("/", isLoggedIn,async (req, res, next) => {
    // Assuming the image URL is provided in req.body.listing.url
    const imageUrl = req.body.listing.image;

    // Creating a new Listing instance with image URL
    const newListing = new Listing({
        ...req.body.listing,
        image: { url: imageUrl } // Set the image URL here
    });

    try {
        // Save the new listing to the database
        await newListing.save();
        req.flash("success", "New listing created!");
        // Redirect to the listings page after successful insertion
        res.redirect("/listings");
    } catch (err) {
        next(err);
    }
});

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn, async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing doesn't exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
});

//UPDATE ROUTE

router.put("/:id", isLoggedIn, async (req, res) => {
    console.log("here");
    let { id } = req.params;
    let { title, description, image, price, country, location } = req.body.listing;

    try {
        // Update the listing with the provided ID, including the image URL
        await Listing.findByIdAndUpdate(id, {
            title: title,
            description: description,
            image: { url: image },
            price: price,
            country: country,
            location: location
        });
        // Redirect to the updated listing page
        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    } catch (error) {
        // Handle any errors that occur during update
        console.error("Error occurred while updating listing:", error);
        // Redirect to an error page or send an error response
        res.status(500).send("Error occurred while updating listing.");
    }
});

//DELETE ROUTE
router.delete("/:id",isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
});

module.exports = router;