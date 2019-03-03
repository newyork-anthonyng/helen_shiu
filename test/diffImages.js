const looksSame = require("looks-same");
const path = require("path");
const fs = require("fs-extra");
const { IMAGE_DIRECTORY, SNAPSHOTS_DIRECTORY } = require("./constants");

const snapshots = fs.readdirSync(path.resolve(__dirname, "../snapshots"));

// compare images in `snapshot/` and `images/` directory
// create diff file if there are any differences
snapshots.forEach(snapshot => {
    const snapshotImage = path.resolve(__dirname, `../${SNAPSHOTS_DIRECTORY}${snapshot}`);
    const currentImage = path.resolve(__dirname, `../${IMAGE_DIRECTORY}${snapshot}`);

    looksSame(snapshotImage, currentImage, (error, result) => {
        if (error) {
            return console.error(error);
        }

        if (!result.equal) {
            const diffFilename = path.resolve(__dirname, `../diff.${snapshot}`);
            looksSame.createDiff({
                reference: snapshotImage,
                current: currentImage,
                diff: diffFilename,
                highlightColor: "#ff00ff"
            }, () => {
                console.error(`Differences found for ${snapshot}`);
                console.error(`diff image saved at ${diffFilename}`);
            });
        }
    });
});