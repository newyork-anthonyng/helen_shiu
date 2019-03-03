const fs = require("fs-extra");
const { IMAGE_DIRECTORY, SNAPSHOTS_DIRECTORY } = require("./constants");

fs.copy(IMAGE_DIRECTORY, SNAPSHOTS_DIRECTORY, err => {
    if (err) {
        return console.error(err);
    }

    console.log("Successfully saved images to snapshots");
});