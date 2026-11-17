# Website images

Each experience or project has its own folder. Put new photos in the matching folder:

- `syncere/`
- `arenax/`
- `aes/`
- `epson/`
- `cl2/`
- `ntu/`
- `mujoco-gripper/`
- `openvla/`
- `quadruped/`
- `spacemapper/`

`shared/` contains general site assets. Original logos and edited versions are kept together in each folder.

## Adding photos to a pop-up

Adding a file alone does not display it automatically. In `js/portfolio.js`, find the matching entry and add a `photos` array. List all photos you want shown, in order:

```js
"photos": [
    { "src": "images/syncere/photo-1.jpg", "alt": "Description of the first photo" },
    { "src": "images/syncere/photo-2.jpg", "alt": "Description of the second photo" }
],
```

Without a `photos` array, the pop-up uses its existing `image` field. Homepage thumbnails are set separately in `index.html`.

## Pop-up layout and media

Pop-ups show a two-column, 4:3 gallery beside the text. Clicking a tile opens the full image. Photo previews are cropped to 4:3 around the subject; original files are preserved and used when enlarged. The OpenVLA diagram is padded to preserve all its labels.

The `photos` array supports `src` (gallery preview), `full` (original photo for enlargement), `alt`, and `poster` (still frame used to pause a GIF), and optional `position` (CSS object-position for framing a GIF).

The three current videos have GIF versions alongside the originals. To regenerate previews and GIFs after editing originals, run `python3 scripts/prepare-media.py` from the project folder (requires Pillow and ffmpeg). Videos use 12 frames per second, up to 640 × 480 pixels, with their original proportions preserved.

Subject framing is configured in `FRAMING` inside `scripts/prepare-media.py`. Regenerate after changing a source photo or its crop. GIFs fill the gallery tiles using `object-position`; enlargement shows the uncropped animation.

Card images and gallery previews preload on entry. Full-resolution images begin loading in the background when their section opens, and repeat visits reuse the cached image.
