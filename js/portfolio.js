const portfolioEntries = [
    {
        "title": "ArenaX Labs",
        "lead": "Training robots using RL in simulation.",
        "body": "I helped create robotic environments for ArenaX ML competitions using MuJoCo and IsaacLab. \n\n I helped build a modular RL training pipeline for internal research. \n\n I also got the chance to work with and research SOTA RL literature. Extremely grateful to my CEO [Brandon](https://www.linkedin.com/in/brandon-da-silva-a67496a7/) for providing me with guidance and opportunities to learn.",
        "image": "images/arenax/arenademopic.png",
        "alt": "Robot training in IsaacLab",
        "code": null,
        "photos": [
            {
                "src": "images/arenax/rl-video-episode-0.gif",
                "alt": "Policy rollout in manipulation task",
                "poster": "images/arenax/rl-video-episode-0.poster.jpg",
                "position": "50% 50%"
            },
            {
                "src": "images/arenax/franka-golf.gif",
                "alt": "Custom Franka arm golf simulation",
                "poster": "images/arenax/franka-golf.poster.jpg",
                "position": "50% 50%"
            },
            {
                "src": "images/arenax/previews/Unknown.jpg.jpg?v=2",
                "full": "images/arenax/Unknown.jpg",
                "alt": "Web Assembly MuJoCo Humanoid robot simulation"
            },
            {
                "src": "images/arenax/previews/arenademopic.png.jpg?v=2",
                "full": "images/arenax/arenademopic.png",
                "alt": "Parallel RL robot training in Isaac Lab"
            }
        ]
    },
    {
        "title": "CL2 Lab",
        "lead": "Undergraduate Research Assistant",
        "body": "Helped with research: \n Kron-Reduced Connectivity Control for an Aerial Relay Network with Moving Ground Agents by Matteo Golin*, Ethan Woo, Stephen L. Smith, [Yash Vardhan Pant](https://yashpant.github.io). (Under Review ECC2027) \n\n Worked with Autoware and ROS2 on a Jeep Cherokee.\n\n Interfaced sensors on an Indro drone to run VIO.",
        "image": "images/cl2/jeep.jpg",
        "alt": "Self-driving Jeep Cherokee platform",
        "code": null,
        "photos": [
            {
                "src": "images/cl2/previews/jeep.jpg.jpg?v=2",
                "full": "images/cl2/jeep.jpg",
                "alt": "Jeep Cherokee Running Autoware"
            },
            {
                "src": "images/cl2/previews/IMG_2228.PNG.jpg?v=2",
                "full": "images/cl2/IMG_2228.PNG",
                "alt": "Experiments for Kron-Reduced Connectivity Control"
            }
        ]
    },
    {
        "title": "Advanced Electrophoresis Solutions",
        "lead": "Protein analysis using electrophoresis.",
        "body": "Worked on embedded systems. \n\n Implemented a PetaLinux OS on a custom STM32-based board. Wrote custom sensor/device drivers in C and C++.",
        "image": "images/aes/aesdemopic.png",
        "alt": "Electrophoresis instruments",
        "code": null,
        "photos": [
            {
                "src": "images/aes/previews/aessyste.jpg.jpg?v=2",
                "full": "images/aes/aessyste.jpg",
                "alt": "Prototype piping machine"
            },
            {
                "src": "images/aes/instrument-demo.gif",
                "alt": "Instrument demonstration",
                "poster": "images/aes/instrument-demo.poster.jpg",
                "position": "50% 43%"
            },
            {
                "src": "images/aes/previews/aesdemopic.png.jpg?v=2",
                "full": "images/aes/aesdemopic.png",
                "alt": "Electrophoresis instrument"
            },
            {
                "src": "images/aes/previews/IMG_1298.jpg.jpg?v=1",
                "full": "images/aes/IMG_1298.jpg",
                "alt": "Custom embedded board"
            }
        ]
    },
    {
        "title": "Epson Canada",
        "lead": "First internship",
        "body": "Developed algorithms to capture golf ball movement and calculate spin and velocity for a golf launch monitor prototypes \n\n Thank you to [Mark](https://www.linkedin.com/in/wenjie-xue-8583b51a0/) for guidance and mentorship during my internship.",
        "image": "images/epson/epsondemo.jpg",
        "alt": "Golf launch monitor prototype",
        "code": null,
        "photos": [
            {
                "src": "images/epson/previews/epsondemo.jpg.jpg?v=2",
                "full": "images/epson/epsondemo.jpg",
                "alt": "Golf launch monitor prototype"
            },
            {
                "src": "images/epson/previews/launchball.jpg.jpg?v=2",
                "full": "images/epson/launchball.jpg",
                "alt": "Multi-shutter golf ball motion during testing"
            },
            {
                "src": "images/epson/previews/launchnone.jpg.jpg?v=2",
                "full": "images/epson/launchnone.jpg",
                "alt": "Launch monitor electronics"
            },
            {
                "src": "images/epson/previews/epsonlaunch.jpg.jpg?v=2",
                "full": "images/epson/epsonlaunch.jpg",
                "alt": "Event camera launch monitor test setup"
            }
        ]
    },
    {
        "title": "Zero-Shot VLA Manipulator Simulation Interface",
        "lead": "Simulator designed to test VLAs.",
        "body": "Connected a MuJoCo simulation pipeline to OpenVLA. \n\n Virtual camera and joint states from MuJoCo. \n\n Model hosted on a GCP virtual machine.",
        "image": "images/openvla/openvla_model.jpg",
        "alt": "OpenVLA architecture",
        "code": "https://github.com/ethancpwoo/mujocoarm_VLA",
        "photos": [
            {
                "src": "images/openvla/previews/openvla_model.jpg.jpg?v=2",
                "full": "images/openvla/openvla_model.jpg",
                "alt": "OpenVLA model architecture"
            }
        ]
    },
    {
        "title": "Quadrupedal Simulation",
        "lead": "Teaching a quadruped to walk.",
        "body": "Built with my (friend)[https://www.linkedin.com/in/yang--lu/]: he handled the mechanics, I handled autonomy. Trained a walking policy in PyBullet with RL (DDPG) \n\n Transferred to the robot with Arduino commands and ROS2.",
        "image": "images/quadruped/robot_irl.jpg",
        "alt": "Quadruped robot",
        "code": "https://github.com/ethancpwoo/quadrupedal-sim",
        "photos": [
            {
                "src": "images/quadruped/previews/robot_irl.jpg.jpg?v=2",
                "full": "images/quadruped/robot_irl.jpg",
                "alt": "Physical quadruped robot"
            },
            {
                "src": "images/quadruped/previews/robotfinal.png.jpg?v=2",
                "full": "images/quadruped/robotfinal.png",
                "alt": "Quadruped robot in simulation"
            }
        ]
    },
    {
        "title": "SLAM SpaceMapper Robot",
        "lead": "Learning about SLAM.",
        "body": "Ran monocular ORB-SLAM on a Raspberry Pi 3 with an Arducam. \n\n Designed the robot in OnShape and commanded with an L298N motor controller.",
        "image": "images/spacemapper/slampic1.png",
        "alt": "Map created using ORB-SLAM",
        "code": "https://github.com/ethancpwoo/SLAM-SpaceMapper",
        "photos": [
            {
                "src": "images/spacemapper/previews/slampic1.png.jpg?v=2",
                "full": "images/spacemapper/slampic1.png",
                "alt": "SpaceMapper wheeled robot"
            }
        ]
    },
    {
        "title": "Syncere",
        "lead": "Home Robotics and Learning",
        "body": "Trained laundry folding flow-based robotic policies. \n\n I was able to learn so much about the current landscape of robotics thanks to both [Aaron](https://www.linkedin.com/in/aaron-hao-tan/) and [Angus](https://www.linkedin.com/in/angus-fung-phd/).",
        "image": "images/syncere/bysyncere_logo.jpeg",
        "alt": "Syncere logo",
        "code": null,
        "photos": [
            {
                "src": "images/syncere/previews/syncere1.jpg.jpg?v=2",
                "full": "images/syncere/syncere1.jpg",
                "alt": "Team with robotic lamps"
            },
            {
                "src": "images/syncere/previews/lamp.jpg.jpg?v=2",
                "full": "images/syncere/lamp.jpg",
                "alt": "Lume"
            },
            {
                "src": "images/syncere/previews/syncereshipping.jpg.jpg?v=2",
                "full": "images/syncere/syncereshipping.jpg",
                "alt": "Team with first shipment"
            },
            {
                "src": "images/syncere/previews/mewithlamp.jpg.jpg?v=2",
                "full": "images/syncere/mewithlamp.jpg",
                "alt": "Me with Lume"
            }
        ]
    },
    {
        "title": "Nanyang Technological University",
        "lead": "Exchange in Singapore.",
        "body": "I spent a term on exchange at Nanyang Technological University in Singapore.",
        "image": "images/ntu/ntu-crest-crop.png",
        "alt": "Nanyang Technological University crest with a lion",
        "code": null,
        "photos": [
            {
                "src": "images/ntu/previews/singapore4.jpg.jpg?v=2",
                "full": "images/ntu/singapore4.jpg",
                "alt": "Green courtyard at NTU"
            },
            {
                "src": "images/ntu/previews/singapore3.jpg.jpg?v=2",
                "full": "images/ntu/singapore3.jpg",
                "alt": "NTU campus architecture"
            },
            {
                "src": "images/ntu/previews/singapore1.jpg.jpg?v=2",
                "full": "images/ntu/singapore1.jpg",
                "alt": "Singapore skyline at night"
            },
            {
                "src": "images/ntu/previews/meandboyssingapore.jpg.jpg?v=2",
                "full": "images/ntu/meandboyssingapore.jpg",
                "alt": "Friends during exchange in Singapore"
            }
        ]
    },
    {
        "title": "MuJoCo Gripper Manipulator",
        "lead": "Physics-based peg insertion with a robotic gripper.",
        "body": "Built a MuJoCo peg-insertion simulation with terminal-based gripper teleoperation, demonstration recording, and behavior cloning training and evaluation.",
        "image": "images/mujoco-gripper/gripper-icon.svg?v=5",
        "alt": "Illustration of a robotic gripper inserting a peg",
        "code": "https://github.com/ethancpwoo/MuJoCo-Gripper-Manipulator",
        "photos": [
            {
                "src": "images/mujoco-gripper/previews/env.png.jpg",
                "full": "images/mujoco-gripper/env.png",
                "alt": "MuJoCo gripper and peg-insertion environment"
            },
            {
                "src": "images/mujoco-gripper/previews/sim.png.jpg",
                "full": "images/mujoco-gripper/sim.png",
                "alt": "Gripper above the peg-insertion task in simulation"
            }
        ]
    }
];
(() => {
    const dialog = document.querySelector('.work-window');
    const close = dialog.querySelector('.close-window');
    const gallery = dialog.querySelector('.photo-gallery');
    const motionToggle = dialog.querySelector('.motion-toggle');
    const viewer = document.querySelector('.image-viewer');
    const viewerImage = viewer.querySelector('.enlarged-image');
    const viewerClose = viewer.querySelector('.close-image');
    const viewerMotion = viewer.querySelector('.viewer-motion');
    let opener, photoOpener, currentPhotos = [], selectedPhoto;
    let paused = false;
    const fullImageCache = new Map();

    function preloadFullPhotos(photos) {
        for (const photo of photos) {
            if (!photo.full || fullImageCache.has(photo.full)) continue;
            const image = new Image();
            image.decoding = 'async';
            image.fetchPriority = 'low';
            fullImageCache.set(photo.full, image);
            image.onload = () => fullImageCache.set(photo.full, true);
            image.onerror = () => fullImageCache.delete(photo.full);
            image.src = photo.full;
        }
    }

    function updateMotion() {
        gallery.querySelectorAll('img').forEach((image, index) => {
            const photo = currentPhotos[index];
            if (photo.poster) image.src = paused ? photo.poster : photo.src;
        });
        motionToggle.textContent = paused ? 'Play GIFs' : 'Pause GIFs';
        if (selectedPhoto?.poster && viewer.open) {
            viewerImage.src = paused ? selectedPhoto.poster : selectedPhoto.src;
            viewerMotion.textContent = paused ? 'Play GIF' : 'Pause GIF';
        }
    }
    function enlarge(photo, button) {
        selectedPhoto = photo;
        photoOpener = button;
        viewerImage.src = photo.poster && paused ? photo.poster : (photo.full || photo.src);
        viewerImage.alt = photo.alt;
        viewer.querySelector('.image-caption').textContent = photo.alt;
        viewerMotion.hidden = !photo.poster;
        viewerMotion.textContent = paused ? 'Play GIF' : 'Pause GIF';
        viewer.showModal();
        viewerClose.focus({ preventScroll: true });
    }
    function toggleMotion() { paused = !paused; updateMotion(); }
    motionToggle.addEventListener('click', toggleMotion);
    viewerMotion.addEventListener('click', toggleMotion);

    document.querySelectorAll('[data-entry]').forEach(button => {
        button.addEventListener('click', () => {
            const entry = portfolioEntries[Number(button.dataset.entry)];
            opener = button;
            paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            dialog.querySelector('#window-title').textContent = entry.title;
            dialog.querySelector('.window-dates').textContent = button.querySelector('.card-date')?.textContent || '';
            const lead = dialog.querySelector('.window-lead');
            lead.textContent = entry.lead;
            lead.hidden = !entry.lead;
            const description = dialog.querySelector('.window-description');
            description.replaceChildren();
            // Support [name](https://...) links while keeping the rest plain text.
            const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
            let cursor = 0;
            for (const match of entry.body.matchAll(linkPattern)) {
                description.append(document.createTextNode(entry.body.slice(cursor, match.index)));
                const link = document.createElement('a');
                link.textContent = match[1];
                link.href = match[2];
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                description.append(link);
                cursor = match.index + match[0].length;
            }
            description.append(document.createTextNode(entry.body.slice(cursor)));
            const code = dialog.querySelector('.window-code');
            code.hidden = !entry.code;
            if (entry.code) code.href = entry.code;
            else code.removeAttribute('href');
            currentPhotos = entry.photos || [{ src: entry.image, alt: entry.alt }];
            gallery.replaceChildren();
            gallery.classList.toggle('single-photo', currentPhotos.length === 1);
            for (const photo of currentPhotos) {
                const tile = document.createElement('button');
                tile.type = 'button';
                tile.className = 'gallery-tile';
                tile.setAttribute('aria-label', `Enlarge: ${photo.alt}`);
                tile.setAttribute('aria-haspopup', 'dialog');
                const image = document.createElement('img');
                image.src = photo.poster && paused ? photo.poster : photo.src;
                image.alt = photo.alt;
                if (photo.position) image.style.objectPosition = photo.position;
                tile.append(image);
                tile.addEventListener('click', () => enlarge(photo, tile));
                gallery.append(tile);
            }
            motionToggle.hidden = !currentPhotos.some(photo => photo.poster);
            motionToggle.textContent = paused ? 'Play GIFs' : 'Pause GIFs';
            dialog.showModal();
            dialog.scrollTop = 0;
            close.focus({ preventScroll: true });
            preloadFullPhotos(currentPhotos);
        });
    });
    function closeOnBackdrop(event) {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
    }
    close.addEventListener('click', () => dialog.close());
    viewerClose.addEventListener('click', () => viewer.close());
    dialog.addEventListener('click', closeOnBackdrop);
    viewer.addEventListener('click', closeOnBackdrop);
    viewer.addEventListener('close', () => {
        viewerImage.removeAttribute('src');
        selectedPhoto = null;
        photoOpener?.focus({ preventScroll: true });
    });
    dialog.addEventListener('close', () => {
        gallery.replaceChildren();
        currentPhotos = [];
        opener?.focus({ preventScroll: true });
    });
})();
