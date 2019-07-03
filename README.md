# Testing
Images in `snapshots/` represent what the website should look like.

You make CSS changes and want to see if there are unintended changes.

```sh
npm run getScreenshots
```

This saves screenshots of the current website. Files are saved to `images/`.


```sh
npm run diffImages
```

This compares the `images/` and `snapshots/` images. `diff.png` images are created for any differences found.


```sh
npm run saveSnapshots
```

This overrides the `snapshots/` images with the `images/` images. You run this if you are satisfied with the changes.