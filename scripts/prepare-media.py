"""Regenerate web previews and GIFs, preserving all original media.
Run: python3 scripts/prepare-media.py (requires Pillow and ffmpeg).
"""
from pathlib import Path
from PIL import Image, ImageOps
import subprocess

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = {
    'arenax/rl-video-episode-0.mp4': 'arenax/rl-video-episode-0.gif',
    'arenax/franka_golf_mujoco.mp4': 'arenax/franka-golf.gif',
    'aes/IMG_1181.mov': 'aes/instrument-demo.gif',
}
PHOTOS = [
    'arenax/Unknown.jpg', 'arenax/arenademopic.png',
    'aes/aessyste.jpg', 'aes/aesdemopic.png', 'aes/IMG_1298.jpg',
    'epson/epsondemo.jpg', 'epson/launchball.jpg', 'epson/launchnone.jpg', 'epson/epsonlaunch.jpg',
    'syncere/syncereshipping.jpg', 'syncere/mewithlamp.jpg', 'syncere/syncere1.jpg', 'syncere/lamp.jpg',
    'ntu/singapore4.jpg', 'ntu/singapore1.jpg', 'ntu/singapore3.jpg', 'ntu/meandboyssingapore.jpg',
    'cl2/jeep.jpg', 'cl2/IMG_2228.PNG',
    'quadruped/robotfinal.png', 'quadruped/robot_irl.jpg',
    'openvla/openvla_model.jpg', 'spacemapper/slampic1.png',
    'mujoco-gripper/env.png', 'mujoco-gripper/sim.png',
]

# Subject-aware framing for the 4:3 gallery previews. Values are horizontal/
# vertical crop alignment; originals are always used for enlargement.
FRAMING = {
    'syncere/lamp.jpg': (0.5, 0.56),
    'syncere/syncereshipping.jpg': (0.5, 0.75),
    'syncere/mewithlamp.jpg': (0.52, 0.6),
    'syncere/syncere1.jpg': (0.5, 0.55),
    'ntu/singapore4.jpg': (0.5, 0.48),
    'ntu/singapore3.jpg': (0.5, 0.35),
    'ntu/singapore1.jpg': (0.5, 0.55),
    'ntu/meandboyssingapore.jpg': (0.5, 0.6),
    'aes/aessyste.jpg': (0.5, 0.53),
    'aes/IMG_1298.jpg': (0.82, 0.62),
    'epson/launchnone.jpg': (0.5, 0.92),
    'epson/epsonlaunch.jpg': (0.5, 0.63),
    'arenax/Unknown.jpg': (0.56, 0.40),
    'cl2/jeep.jpg': (0.5, 0.77),
}
# The model diagram needs its full extent, rather than cutting off labels.
DIAGRAMS = {'openvla/openvla_model.jpg'}

def preview_path(path):
    return path.parent / 'previews' / (path.name + '.jpg')

def main():
    for source, output in VIDEOS.items():
        src, dest = ROOT / 'images' / source, ROOT / 'images' / output
        if not dest.exists() or src.stat().st_mtime > dest.stat().st_mtime:
            subprocess.run([
                'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(src), '-an',
                '-filter_complex', '[0:v]fps=12,scale=640:480:force_original_aspect_ratio=decrease:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=3',
                '-loop', '0', str(dest),
            ], check=True)
        with Image.open(dest) as im:
            im.convert('RGB').save(dest.with_suffix('.poster.jpg'), quality=88)
    for name in PHOTOS:
        src = ROOT / 'images' / name
        with Image.open(src) as im:
            im = ImageOps.exif_transpose(im).convert('RGB')
            if name in DIAGRAMS:
                im = ImageOps.pad(im, (1200, 900), Image.Resampling.LANCZOS, color='white')
            else:
                if name == 'quadruped/robotfinal.png':
                    # Frame the simulated robot, rather than the surrounding floor.
                    width, height = im.size
                    im = im.crop((int(width * .23), int(height * .13), int(width * .73), int(height * .78)))
                im = ImageOps.fit(im, (1200, 900), Image.Resampling.LANCZOS,
                                  centering=FRAMING.get(name, (0.5, 0.5)))
            out = preview_path(src)
            out.parent.mkdir(exist_ok=True)
            im.save(out, quality=88, optimize=True)
    print('Prepared photo previews, looping GIFs, and static GIF posters.')

if __name__ == '__main__':
    main()
