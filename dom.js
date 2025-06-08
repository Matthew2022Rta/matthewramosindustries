let galaxiaPlayer = null;
let galaxiaGameOver = false;
let alienIntervals = [];
let pacmanPlayer = null;
let pacmanGameOver = false;
let pacmanPlayerIndex = 0;
let startMusic = null;

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main-content');

  function renderHome() {
    main.innerHTML = `




        <img src="/headshot.png" alt="Headshot" width="200" />
        <nav>
          <ul style="display: flex; gap: 20px; list-style: none;">
            <li><a href="#" id="nav-home">Home</a></li>
            <li><a href="#" id="nav-resume">Resume</a></li>
            <li><a href="#" id="nav-contact">Contact</a></li>
               <li><a href="#" id="galaxia">Play Space Monkey!</a></li> 
          </ul>
        </nav>
        <h2>Welcome to my portfolio!</h2>
        <p>Hi, I'm Matthew Ramos—a hands-on builder, creative thinker, and aspiring computer scientist currently studying at New York University. I grew up in Elmhurst, Queens, where my curiosity took shape through toys made from duct tape and hours spent engineering with LEGOs. That same inventive spirit still drives me today, whether I’m building a flamethrower, restoring an Acura TL, or developing machine learning models. My work spans a range of disciplines—from carpentry and automotive repair to software development and engineering design. I’ve restored homes, designed foldable skateboards, built electric guitars from shovels, and trained computer vision models. Whether it’s physical fabrication or coding complex systems, I thrive at the intersection of creativity and technical precision. Outside the workshop and classroom, I enjoy snowboarding, longboarding, working on cars, sewing, and exploring how things work. My portfolio reflects my passion for learning through doing, solving real-world problems, and building things that are both functional and meaningful.</p>
      <h1>Personal Projects</h1>

      <h2>Space Monkey — Retro-Inspired Arcade Game</h2>
      <p><strong>Duration:</strong> May 2025 – June 2025</p>
      <p><strong>Location:</strong> Elmhurst, NY</p>
      
      <h3>Project Overview</h3>
      <p>
        Space Monkey is a browser-based, multi-level arcade game built with pure JavaScript, HTML, and CSS — inspired by retro classics such as Galaxian, Pac-Man, Donkey Kong, Frogger, Space Invaders, and Breakout. Developed without any game engines or frameworks, the project demonstrates advanced DOM manipulation, game loop architecture, and full interactive design. The game was deployed on a personal website as part of a larger retro arcade suite.
      </p>
      
      <div id="spacemonkey-gallery" style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;"></div>
      
    <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
  ${[1, 2, 3, 4, 5, 6].map(i => `
    <img src="game${i}.png" alt="games Post ${i}" style="height: 200px; flex-shrink: 0;" />
  `).join('')}
</div>
      
      <h3>Key Activities</h3>
      <ul style="line-height: 1.8;">
        <li><strong>Engineered Dynamic Game Architecture:</strong> Built multi-level progression, state management, and win/lose conditions entirely in JavaScript.</li>
        <li><strong>Implemented Real-Time Gameplay:</strong> Leveraged DOM manipulation and event handling to create smooth, interactive experiences.</li>
        <li><strong>Developed Collision Detection:</strong> Designed both rectangular and grid-based collision detection systems.</li>
        <li><strong>Created Modular Game Design:</strong> Built reusable components for game expansion and level integration.</li>
        <li><strong>Integrated Custom Soundtracks:</strong> Added dynamic audio per level to enhance user experience.</li>
        <li><strong>Optimized Performance:</strong> Applied performance optimization techniques for animation timing and responsiveness.</li>
      </ul>
      
      <h3>Skills Gained</h3>
      <ul>
        <li>Advanced JavaScript (ES6+) and DOM manipulation</li>
        <li>Game loop architecture & state management</li>
        <li>Event-driven programming & performance optimization</li>
        <li>Modular front-end development (HTML/CSS/JS)</li>
      </ul>
      

   <h2>OnlyCars – Real-Time Forum Web App</h2>
    <p><strong>Duration:</strong> January 2025 – Present</p>
    <p><strong>Role:</strong> Full-Stack Developer</p>
    <p><strong>Location:</strong> Elmhurst, NY</p>

    <h3>Project Overview</h3>
    <p>
      OnlyCars is a real-time, full-stack web forum built for car enthusiasts to post, share, and comment on vehicle builds and modifications. Designed with a MERN-style stack (MongoDB, Express, Node.js) and Handlebars, it includes robust authentication, real-time content updates, and media uploads. Users can create profiles, post car projects with photos via Multer, and interact in a live, session-managed environment.
    </p>


    <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
  ${[1, 2, 3].map(i => `
    <img src="onlycars${i}.png" alt="OnlyCars Post ${i}" style="height: 200px; flex-shrink: 0;" />
  `).join('')}
</div>

    <h3>Key Activities</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Built Authentication & Session Management:</strong> Implemented secure sign-up/log-in with Passport.js and maintained sessions for all user interactions.</li>
      <li><strong>Developed Real-Time Posting System:</strong> Enabled users to create posts with images and display them in a live-updated feed.</li>
      <li><strong>Handled File Uploads:</strong> Integrated Multer to support secure and scalable image uploads.</li>
      <li><strong>Designed and Validated Schemas:</strong> Used Mongoose to enforce data integrity and backend validation.</li>
      <li><strong>Test-Driven Development:</strong> Wrote unit tests using Mocha and Chai to ensure backend reliability and catch errors early.</li>
    </ul>

    <h3>Skills Gained</h3>
    <ul>
      <li>Full-Stack Web Development (JavaScript, Node.js, Express, MongoDB, Handlebars)</li>
      <li>User Authentication & Access Control</li>
      <li>File Upload Handling (Multer)</li>
      <li>Database Modeling with Mongoose</li>
      <li>Backend Testing with Mocha & Chai</li>
    </ul>





        <h2>Flamethrower Engineering Project</h2>
    <p><strong>Duration:</strong> July 2023 – August 2023</p>
    <p><strong>Role:</strong> Designer & Engineer</p>
    <p><strong>Inspiration:</strong> The Boring Company's "Not-a-Flamethrower"</p>

    <h3>Project Overview</h3>
    <p>
      This project focused on designing a functional, push-button flamethrower inspired by The Boring Company's “Not-a-Flamethrower.” 
      I sourced materials carefully and implemented strict safety protocols to ensure a balance between performance and user protection.
    </p>

    <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
      ${[1, 2, 3].map(i => `
        <img src="flamethrower${i}.png" alt="Flamethrower Build ${i}" style="height: 200px; flex-shrink: 0;" />
      `).join('')}
    </div>

    <h3>Key Activities</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Design & Assembly:</strong> Built a flamethrower with push-button ignition and ergonomic housing using a Nerf gun frame to secure internal components.</li>
      <li><strong>Safety & Testing:</strong> Conducted extensive propane safety tests, eliminated leak risks, and implemented safety protocols for pressurized fuels, including night testing scenarios.</li>
    </ul>

    <h3>Skills Gained</h3>
    <ul>
      <li>Creative Problem-Solving</li>
      <li>Risk Management</li>
      <li>Materials Sourcing</li>
      <li>Safety Protocols</li>
    </ul>




          <h2>Acura TL Restoration & Modification</h2>
    <p><strong>Duration:</strong> June 2024 – July 2024</p>
    <p><strong>Role:</strong> Automotive Modifier</p>

    <h3>Project Overview</h3>
    <p>
      I undertook a full mechanical and aesthetic restoration of my Acura TL, addressing functionality,
      safety, and design. This hands-on project involved diagnostics, part replacements, and major interior
      and exterior improvements.
    </p>
 <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
      ${[...Array(12).keys()].map(i => {
      const index = i + 1;
      return `<img src="acura${index}.png" alt="Acura ${index}" style="height: 200px; flex-shrink: 0;" />`;
    }).join('')}
    </div>

    <h3>Key Activities</h3>
    <ul style="line-height: 1.8;">
      <li>
        <strong>Diagnostics & Repairs:</strong> Researched error codes and malfunctions using automotive forums and manuals. Diagnosed and replaced faulty parts such as <strong>coil packs</strong> and the <strong>Vapor Canister Purge Solenoid Valve</strong> with high-quality alternatives.
      </li>
      <li>
        <strong>Entertainment System Upgrade:</strong> Installed a modern double-DIN radio system with a backup camera. Adapted the unit to seamlessly fit the dashboard and ensured proper wiring and functionality.
      </li>
      <li>
        <strong>Interior & Exterior Restoration:</strong> Reupholstered the interior with hand-sewn leather, addressed ripped seat issues with foam padding, and repainted the exterior for a fresh new look.
      </li>
    </ul>

    <h3>Skills Gained</h3>
    <ul>
      <li>Automotive Diagnostics & Repair</li>
      <li>Electrical Wiring & Console Integration</li>
      <li>Hand-Sewing & Upholstery</li>
      <li>Mechanical Problem Solving</li>
    </ul>


      <h2>House Renovation Project – 554 Sullivan Trail</h2>
    <p><strong>Duration:</strong> April 2012 – August 2023</p>
    <p><strong>Role:</strong> Carpenter & Renovator</p>
    <p><strong>Location:</strong> Pocono Mountain, Pennsylvania</p>

    <h3>Project Overview</h3>
    <p>
      Over a span of 11 years, I worked on a full-scale renovation of a family home, developing carpentry,
      electrical, and logistical skills alongside my academic responsibilities.
    </p>

    <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
      ${[1, 2, 3, 5, 6, 7].map(i => `
        <img src="house${i}.png" alt="House Renovation ${i}" style="height: 200px; flex-shrink: 0;" />
      `).join('')}
    </div>

    <h3>Key Activities</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Carpentry & Structural Work:</strong> Framed walls to build structural strength and durability.</li>
      <li><strong>Electrical Wiring & Safety:</strong> Installed and upgraded electrical systems to meet modern safety standards. Replaced outdated wiring, swapped old light fixtures for energy-efficient LED lighting, and installed ceiling fans in each room to improve air circulation. Additionally, set up a home security system by wiring and mounting surveillance cameras at key exterior and interior locations.</li>
      <li><strong>Paint & Design:</strong> Enhanced aesthetic appeal and protect surfaces from environmental damage. Tasks included surface preparation (sanding, priming, and patching), selecting appropriate paint types and finishes for different materials, and applying multiple coats with precision to ensure durability and a professional finish</li>
      <li><strong>Insulation Install</strong> Installed R-40 batt insulation in the crawlspace to improve thermal efficiency and energy conservation. Applied spray foam insulation along structural cracks and seams to seal air leaks, enhance moisture control, and ensure a tight building envelope. This work contributed to improved indoor comfort and long-term reduction in heating and cooling costs.</li>
      <li><strong>Material Management & Logistics:</strong> Transported materials and completed weekend installations while balancing school.</li>
    </ul>

    <h3>Skills Gained</h3>
    <ul>
      <li>Carpentry</li>
      <li>Electrical Wiring</li>
      <li>Project Management</li>
      <li>Problem Solving</li>
      <li>Time Management</li>
    </ul>

  <h2>Electric Shovel Guitar Project</h2>
    <p><strong>Duration:</strong> December 2022 – January 2023</p>
    <p><strong>Role:</strong> Designer & Fabricator</p>
    <p><strong>Objective:</strong> Build a fully functional electric slide guitar inside a coal shovel</p>

    <h3>Project Overview</h3>
    <p>
      This project fused metal fabrication and electrical wiring to transform a coal shovel into a unique,
      playable electric slide guitar. I read wiring blueprints, attached pickups and controls, and fabricated 
      all mounting hardware using scrap metal, ensuring the instrument was both functional and visually striking.
    </p>

 
    <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
      ${[1, 2, 3, 4, 5].map(i => `
        <img src="shovel${i}.png" alt="Shovel Guitar ${i}" style="height: 200px; flex-shrink: 0;" />
      `).join('')}
    </div>

    <h3>Key Activities</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Electrical Wiring:</strong> Connected guitar pickups, volume knob, and audio jack using blueprint guidance. Troubleshooted signal paths to ensure clean output.</li>
      <li><strong>Metal Fabrication & Assembly:</strong> Designed and cut templates to shape the shovel for component mounting, and crafted custom hardware to secure strings.</li>
      <li><strong>Creative Problem-Solving:</strong> Solved design challenges to balance aesthetics with functionality while preserving the original shovel form.</li>
    </ul>

    <h3>Skills Gained</h3>
    <ul>
      <li>Electrical Wiring</li>
      <li>Metal Fabrication</li>
      <li>Creative Problem-Solving</li>
      <li>Blueprint Reading</li>
    </ul>


    <h2>Foldable Skateboard Engineering Project</h2>
    <p><strong>Duration:</strong> July 2023 – August 2023</p>
    <p><strong>Role:</strong> Designer & Engineer</p>
    <p><strong>Objective:</strong> Enhance portability and storage for skateboard design</p>

    <h3>Project Overview</h3>
    <p>
      This project focused on solving the everyday problem of skateboard storage by designing a foldable 
      skateboard that maintains structural strength while occupying less space. The final board folds in half 
      with three custom locking mechanisms and supports up to 170 lbs.
    </p>

    <div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px; border: 1px solid #ccc;">
      ${[1, 2, 3].map(i => `
        <img src="skate${i}.png" alt="Skateboard Project ${i}" style="height: 200px; flex-shrink: 0;" />
      `).join('')}
    </div>

    <h3>Key Activities</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Design & Engineering:</strong> Created a compact folding mechanism supported by three locking points for stability under load.</li>
      <li><strong>Problem Solving & Testing:</strong> Addressed structural design issues and successfully conducted stress and load-bearing tests to ensure safety and usability.</li>
    </ul>

    <h3>Skills Gained</h3>
    <ul>
      <li>Structural Design</li>
      <li>Mechanical Engineering</li>
      <li>Practical Problem Solving</li>
    </ul>

        `;

    attachNavEvents();
  }
 
  function renderResume() {
    main.innerHTML = `
        <button id="back-btn" style="margin-bottom: 10px;">← Back</button>
        <embed src="Ramos_Matthew_Resume.pdf" type="application/pdf" width="100%" height="600px" />
        <div style="margin-top: 20px;">
          <a href="Ramos_Matthew_Resume.pdf" download>
            <button>Download PDF</button>
          </a>
        </div>
      `;

    document.getElementById('back-btn').addEventListener('click', renderHome);
  }
  function renderContact() {
    main.innerHTML = `
          <h2>Contact Me</h2>
          <ul style="line-height: 2; font-size: 1.1em;">
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/matthew-ramos-255a422b3" target="_blank">matthew-ramos-255a422b3</a></li>
            <li><strong>Email:</strong> <a href="mailto:matthewramos2777@gmail.com">matthewramos2777@gmail.com</a></li>
            <li><strong>NYU Email:</strong> <a href="mailto:mtr8975@nyu.edu">mtr8975@nyu.edu</a></li>
            <li><strong>Phone:</strong> <a href="tel:134777713746">+1 (347) 771-3746</a></li>
          </ul>
          <button id="back-btn" style="margin-top: 20px;">← Back</button>
        `;

    document.getElementById('back-btn').addEventListener('click', renderHome);
  }
  function uploadanidea() {
    main.innerHTML = `
        <h2>Submit a Project Idea</h2>
        <form id="ideaForm"
              action="/submit-idea"
              method="POST"
              style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 500px;">
            
            <input name="name" required placeholder="Your Name" />
            <input name="email" type="email" required placeholder="Your Email" />
            <textarea name="idea" required placeholder="Describe your project idea..." rows="6"></textarea>
            <button type="submit">Submit</button>
        </form>
        <p style="font-size: 0.9rem;">Form will be submitted to Google Sheet via Express backend.</p>
        `;
  }


  function renderStartScreen() {
    const main = document.getElementById('main-content');
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      bgMusic = null;
  }

  // 🚀 START start screen music
  if (startMusic) {
      startMusic.pause();
      startMusic.currentTime = 0;
  }
  startMusic = new Audio('mainsong.mp3');
  startMusic.loop = true;
  startMusic.volume = 0.5;
  startMusic.play().catch(err => {
      console.error('Start screen music failed:', err);
  });

    main.innerHTML = `
    <button id="back-btn" style="margin-top: 20px;">← Back</button>
        <div style="position: relative; width: 800px; height: 600px; margin: 50px auto; text-align: center;">
            <img src="maintitle.png" alt="Game Title" style="width: 100%; height: auto;">

            <button id="start-game-btn" style="
                position: absolute;
                bottom: -550px;
                left: 50%;
                transform: translateX(-50%);
                padding: 20px 40px;
                font-size: 24px;
                background: green;
                color: white;
                border: none;
                border-radius: 12px;
                cursor: pointer;
            ">Start Game</button>
        </div>
    `;
    document.getElementById('back-btn').addEventListener('click', () => {
      if (startMusic) {
          startMusic.pause();
          startMusic.currentTime = 0;
          startMusic = null;
      }
      renderHome();
  });
    // Add click handler for start button
  document.getElementById('start-game-btn').onclick = () => {
      if (startMusic) {
          startMusic.pause();
          startMusic.currentTime = 0;
          startMusic = null;
      }
      renderGalaxia();
  };
}
  let bgMusic = null;
  let bgMusicPromise = null;
  let froggerStarted = false; 
  function renderGalaxia() {
   
      // Stop any previous music
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        bgMusic = null;
    }
    
    bgMusic = new Audio('song1.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    
    bgMusicPromise = bgMusic.play().catch(err => {
        if (err.name !== 'AbortError') {
            console.error('Audio play failed:', err);
        }
    });
    
    main.innerHTML = `
    <button id="back-btn" style="margin: 10px; padding: 10px 20px; font-size: 18px; cursor: pointer;">← Back</button>
    <h2>Level 1</h2>
    <p id="score">Score: 0</p>
    <div id="galaxia" style="position: relative; width: 400px; height: 670px; background: url('space.png') no-repeat center center; 
    background-size: cover; 
    overflow: hidden;">
    </div>
`;

// Add event listener to Back button
document.getElementById('back-btn').addEventListener('click', () => {
    stopGalaxiaGame(); // stop intervals + game state
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        bgMusic = null;
    }
    renderHome();
});
    initGalaxiaGame();
  }
  let enemySpawnerInterval = null;
  let galaxiaPlayer; // global player ref
  let galaxiaGameOver = false; // global game over flag
  let inAsteroidField = false;
  let asteroidFieldTimer = null;
  let asteroidRowSpawner = null;
  let asteroidWave = 0;
  let asteroidWaveCooldown = false;

  function galaxiaKeyHandler(e) {
    if (galaxiaGameOver) return;

    const left = parseInt(galaxiaPlayer.style.left);

    if (e.key === 'ArrowLeft' && left > 0) {
      galaxiaPlayer.style.left = (left - 20) + 'px';
    } else if (e.key === 'ArrowRight' && left < 360) {
      galaxiaPlayer.style.left = (left + 20) + 'px';
    } else if (e.key === ' ') {
      shootBullet(galaxiaPlayer);
    }
  }

  function initGalaxiaGame() {
    galaxiaGameOver = false;
    const galaxia = document.getElementById('galaxia');
    let score = 0;
    let gameOver = false;
    let hasTriggeredAsteroids = false;
    inAsteroidField = false;
    asteroidWave = 0;
    asteroidWaveCooldown = false;
  
    if (asteroidFieldTimer) {
      clearTimeout(asteroidFieldTimer);
      asteroidFieldTimer = null;
    }
  
    if (asteroidRowSpawner) {
      clearInterval(asteroidRowSpawner);
      asteroidRowSpawner = null;
    }
    const player = document.createElement('img');
    player.src = 'monkeyspaceship1.png';
    player.id = 'player';
    player.style.position = 'absolute';
    player.style.bottom = '10px';
    player.style.left = '180px';
    player.style.width = '40px';
    player.style.height = '40px';
    galaxia.appendChild(player);

    // Player movement → define handler INSIDE so it sees shootBullet!
    function galaxiaKeyHandler(e) {
      if (gameOver) return;

      const left = parseInt(player.style.left);

      if (e.key === 'ArrowLeft' && left > 0) {
        player.style.left = (left - 20) + 'px';
      } else if (e.key === 'ArrowRight' && left < 360) {
        player.style.left = (left + 20) + 'px';
      } else if (e.key === ' ') {
        shootBullet(player);
      }
    }

    // Attach key handler
    document.removeEventListener('keydown', galaxiaKeyHandler);
    document.addEventListener('keydown', galaxiaKeyHandler);
     enemySpawnerInterval = setInterval(() => {
      if (galaxiaGameOver) return;
      spawnEnemy();
    }, 1000);
    // Now shootBullet is visible here:
    function shootBullet(player) {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      bullet.style.position = 'absolute';
      bullet.style.left = (parseInt(player.style.left) + 15) + 'px';
      bullet.style.bottom = '50px';
      bullet.style.width = '10px';
      bullet.style.height = '20px';
      bullet.style.background = 'red';
      galaxia.appendChild(bullet);

      const bulletInterval = setInterval(() => {
        const bottom = parseInt(bullet.style.bottom);
        if (bottom >= 670) {
          bullet.remove();
          clearInterval(bulletInterval);
        } else {
          bullet.style.bottom = (bottom + 10) + 'px';
          checkCollision(bullet, bulletInterval);
        }
      }, 30);
    }

    function spawnEnemy() {
      if (galaxiaGameOver || inAsteroidField) return;  // Don't spawn if in asteroid mode!

      const enemy = document.createElement('img');
      const type = Math.random() < 0.7 ? 1 : 2;

      if (type === 1) {
        enemy.src = 'alienspaceship1.png';
        enemy.setAttribute('data-health', '1');
      } else {
        enemy.src = 'alienspaceship2.png';
        enemy.setAttribute('data-health', '2');
      }

      enemy.classList.add('enemy');
      enemy.style.position = 'absolute';
      enemy.style.top = '0px';
      enemy.style.left = Math.floor(Math.random() * 360) + 'px';
      enemy.style.width = '40px';
      enemy.style.height = '40px';
      galaxia.appendChild(enemy);

      const enemyMoveInterval = setInterval(() => {
        if (galaxiaGameOver || inAsteroidField) {
          clearInterval(enemyMoveInterval);
          enemy.remove();
          return;
        }

        enemy.style.top = (parseInt(enemy.style.top) + 5) + 'px';

        const enemyRect = enemy.getBoundingClientRect();
        const galaxiaRect = galaxia.getBoundingClientRect();
        if (enemyRect.bottom >= galaxiaRect.bottom) {
          enemy.remove();
          clearInterval(enemyMoveInterval);
          triggerGameOver();
        }
      }, 50);
    }

    function startAsteroidField() {
      inAsteroidField = true;
      console.log("ASTEROID FIELD STARTED!");

      // Start spawning rows of asteroids every 1 sec
      asteroidRowSpawner = setInterval(() => {
        if (!inAsteroidField) return;
        spawnAsteroidRow();
      }, 2850);  // 1 row per second

      // End asteroid field after 20 seconds
      asteroidFieldTimer = setTimeout(() => {
        inAsteroidField = false;
        clearInterval(asteroidRowSpawner);
        console.log("ASTEROID FIELD ENDED!");
      }, 20000);
    }
    function spawnAsteroidRow() {
      const rowParts = [];
      const galaxia = document.getElementById('galaxia');
      const galaxiaWidth = galaxia.clientWidth;
      const asteroidSize = 40;
      const gapWidth = 100;

      // Random gap position
      const gapStart = Math.floor(Math.random() * (galaxiaWidth - gapWidth));

      for (let i = 0; i < galaxiaWidth; i += asteroidSize) {
        // CORRECTED: Check if asteroid is COMPLETELY outside the gap
        if (i + asteroidSize <= gapStart || i >= gapStart + gapWidth) {
          const part = document.createElement('div');
          part.className = 'asteroid';
          part.style.position = 'absolute';
          part.style.left = `${i}px`;
          part.style.top = '0px';
          part.style.width = `${asteroidSize}px`;
          part.style.height = `${asteroidSize}px`;
          part.style.background = 'gray';
          part.style.border = '2px solid darkgray';
          galaxia.appendChild(part);
          rowParts.push(part);
        }
      }

      // Animate falling row
      const moveInterval = setInterval(() => {
        if (galaxiaGameOver || !inAsteroidField) {
          rowParts.forEach(p => p.remove());
          clearInterval(moveInterval);
          return;
        }

        rowParts.forEach(p => {
          p.style.top = (parseInt(p.style.top) + 8) + 'px';

          // Get player reference correctly
          const player = document.getElementById('player');
          if (player) {
            const rect = p.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();

            // Collision detection
            if (
              rect.left < playerRect.right &&
              rect.right > playerRect.left &&
              rect.top < playerRect.bottom &&
              rect.bottom > playerRect.top
            ) {
              triggerGameOver();
            }
          }

          // Clean up off screen
          if (parseInt(p.style.top) > 670) {
            p.remove();
          }
        });
      }, 30);
    }

    function checkCollision(bullet, bulletInterval) {
      const enemies = document.querySelectorAll('.enemy');
      enemies.forEach((enemy) => {
        const bulletRect = bullet.getBoundingClientRect();
        const enemyRect = enemy.getBoundingClientRect();

        if (
          bulletRect.left < enemyRect.right &&
          bulletRect.right > enemyRect.left &&
          bulletRect.top < enemyRect.bottom &&
          bulletRect.bottom > enemyRect.top
        ) {
          bullet.remove();
          clearInterval(bulletInterval);

          let health = parseInt(enemy.getAttribute('data-health'));
          health--;
          if (health <= 0) {
            // Change image to explosion
            enemy.src = 'shipexplosion.png';
            enemy.classList.remove('enemy'); // Optional: prevent further collision

            // After a short delay, remove the enemy
            setTimeout(() => {
              enemy.remove();
            }, 300);  // 300ms explosion duration (adjust as you like)

            // Add score
            score += (enemy.src.includes('alienspaceship2.png')) ? 30 : 10;
          } else {
            enemy.setAttribute('data-health', health);
          }
          document.getElementById('score').innerText = `Score: ${score}`;

          // 👉 Trigger asteroid field at 750 pts (only once)
          if (score >= 750 && asteroidWave === 0 && !asteroidWaveCooldown) {
            startNextAsteroidWave();
          }


          // Check win condition
          if (score >= 1400) {//1400 1200
            triggerWin();
          }
        }
      });
    }
    function startNextAsteroidWave() {
      if (galaxiaGameOver) return;
      if (asteroidWaveCooldown) return;
      asteroidWave++;
      inAsteroidField = true;
      asteroidWaveCooldown = true;

      console.log(`🚀 Starting Asteroid Wave ${asteroidWave}`);

      // You can make waves harder by changing spawn rate:
      const spawnRate = Math.max(500, 2000 - asteroidWave * 200);  // min 500ms spawn

      asteroidRowSpawner = setInterval(() => {
        if (!inAsteroidField) return;
        spawnAsteroidRow();
      }, spawnRate);

      asteroidFieldTimer = setTimeout(() => {
        inAsteroidField = false;
        clearInterval(asteroidRowSpawner);
        console.log(`🌟 Asteroid Wave ${asteroidWave} ended!`);

        // 10 sec break for player to shoot enemies
        setTimeout(() => {
          asteroidWaveCooldown = false;
          console.log(`🛸 Break over! AUTO-starting next wave...`);

          // 🚀 AUTO-START NEXT WAVE:
          startNextAsteroidWave();

        }, 25000);  // 10 sec break between waves

      }, 20000);  // 20 sec wave
    }

    function triggerGameOver() {
      if (score < 1400) {
        galaxiaGameOver = true;
        clearInterval(enemySpawnerInterval);

        const message = document.createElement('div');
        message.style.position = 'absolute';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.color = 'white';
        message.style.fontSize = '24px';
        message.innerText = 'GAME OVER';
        galaxia.appendChild(message);

        const restartLevelBtn = document.createElement('button');
        restartLevelBtn.innerText = 'Restart Level';
        restartLevelBtn.style.position = 'absolute';
        restartLevelBtn.style.top = '60%';
        restartLevelBtn.style.left = '50%';
        restartLevelBtn.style.transform = 'translate(-50%, -50%)';
        restartLevelBtn.style.padding = '10px 20px';
        restartLevelBtn.style.fontSize = '24px';
        restartLevelBtn.style.cursor = 'pointer';
        restartLevelBtn.onclick = () => {
          stopGalaxiaGame(); 
          renderGalaxia();  // RESTART this level
        };

        // --- RESTART GAME BUTTON ---
        const restartGameBtn = document.createElement('button');
        restartGameBtn.innerText = 'Restart Game';
        restartGameBtn.style.position = 'absolute';
        restartGameBtn.style.top = '70%';
        restartGameBtn.style.left = '50%';
        restartGameBtn.style.transform = 'translate(-50%, -50%)';
        restartGameBtn.style.padding = '10px 20px';
        restartGameBtn.style.fontSize = '24px';
        restartGameBtn.style.cursor = 'pointer';
        restartGameBtn.onclick = () => {
          stopGalaxiaGame(); 
          renderGalaxia(); // THIS is what makes aliens show again!
        };

        galaxia.appendChild(restartLevelBtn);
        galaxia.appendChild(restartGameBtn);
      }
    }

    function triggerWin() {
      galaxiaGameOver = true;
      clearInterval(enemySpawnerInterval);

      const message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.color = 'yellow';
      message.style.fontSize = '24px';
      message.innerText = 'YOU WIN!';
      galaxia.appendChild(message);

      document.removeEventListener('keydown', galaxiaKeyHandler);

      // After 3 seconds → switch to Pacman game!
      setTimeout(() => {
       // renderFroggerLevel()
        //renderDonkeyKongLevel()
       // renderLevel5()
       stopGalaxiaGame(); 
       // renderFroggerLevel()
        renderPacmanLevel();//1400
      }, 3000);
    }
  }
  function stopGalaxiaGame() {
    galaxiaGameOver = true;

    if (asteroidRowSpawner) {
        clearInterval(asteroidRowSpawner);
        asteroidRowSpawner = null;
    }

    if (asteroidFieldTimer) {
        clearTimeout(asteroidFieldTimer);
        asteroidFieldTimer = null;
    }

    if (enemySpawnerInterval) {
        clearInterval(enemySpawnerInterval);
        enemySpawnerInterval = null;
    }

    // 💥 MOST IMPORTANT:
    // Stop the "auto-start next wave" timers:
    asteroidWaveCooldown = true;  // prevent future auto-starts
    inAsteroidField = false;      // stop any pending spawns
}
  //pacman leve;l
  // --- Pac-Monkey Level Code ---

  let pacmanGameOver = false;
  let pacmanScore = 0;
  let pacmanPlayerIndex;
  let pacmanPlayer;
  let pacmanCells = [];
  let pacmanKeyHandler;

  function renderPacmanLevel() {
    main.innerHTML = `
        <h2>Level 2</h2>
        <p id="score-pacman">Score: 0</p>
        <div id="pacman" style="position: relative; width: 640px; height: 640px; background: black; display: grid; grid-template-columns: repeat(16, 40px); grid-template-rows: repeat(16, 40px); gap: 2px; border: 4px solid green;"></div>
    `;

    initPacmanGame();
  }

  function renderPacmanLevel() {
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
  }
  
  bgMusic = new Audio('song2.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  
  bgMusic.play().catch(err => {
      if (err.name !== 'AbortError') {
          console.error('Audio play failed:', err);
      }
  });
    main.innerHTML = `
     <button id="back-btn" style="margin: 10px; padding: 10px 20px; font-size: 18px; cursor: pointer;">← Back</button>
      <h2>Level 2</h2>
      <p id="score-pacman">Score: 0</p>
      <div id="pacman" style="position: relative; width: 2560px; height: 1760px; background: black; display: grid; grid-template-columns: repeat(64, 40px); grid-template-rows: repeat(44, 40px); gap: 2px; border: 4px solid green;"></div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    stopPacmanGame();
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        bgMusic = null;
    }
    renderHome();
});
function stopPacmanGame() {
  pacmanGameOver = true;
  document.removeEventListener('keydown', pacmanKeyHandler);
  // Also clear alien intervals if you track them:
  alienIntervals.forEach(clearInterval);
  alienIntervals = [];
}
    //renderDonkeyKongLevel();
    initPacmanGame();
  }

  function initPacmanGame() {
    let playerDirection = 'right';
    let playerHasGun = false;
    let bananaCollected = false;
    pacmanGameOver = false;
    pacmanScore = 0;
    pacmanCells = [];
    let aliens = [];
    const alienCount = 7;

    const originalMaze = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    //   const originalMaze = [
    //    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    //     [1,0,0,0,3,3,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,3,3,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,1,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
    //     [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //     [1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    //     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    // ];
    const maze = originalMaze;
    const rows = maze.length;
    const cols = maze[0].length;
    const cellSize = 40;
    const gap = 2;
    const containerWidth = cols * cellSize + (cols - 1) * gap;
    const containerHeight = rows * cellSize + (rows - 1) * gap;

    const pacman = document.getElementById('pacman');
    pacman.innerHTML = '';
    pacman.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    pacman.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    pacman.style.width = `${containerWidth}px`;
    pacman.style.height = `${containerHeight}px`;

    // Build grid and dots
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cellValue = originalMaze[r][c];
        const cell = document.createElement('div');
        cell.style.width = '40px';
        cell.style.height = '40px';
        cell.style.position = 'relative';

        if (cellValue === 0) {
          cell.style.background = 'blue';  // Wall
        } else if (cellValue === 1) {
          cell.style.background = 'grey';  // Path
          // Add DOT!
          const dot = document.createElement('div');
          dot.className = 'dot';
          dot.style.width = '10px';
          dot.style.height = '10px';
          dot.style.borderRadius = '50%';
          dot.style.background = 'white';
          dot.style.position = 'absolute';
          dot.style.top = '50%';
          dot.style.left = '50%';
          dot.style.transform = 'translate(-50%, -50%)';
          cell.appendChild(dot);
        } else if (cellValue === 2) {
          if (pacmanScore >= 2300) {//2300
            // Render banana
            cell.style.background = 'brown';
            const banana = document.createElement('img');
            banana.src = 'banana.png';
            banana.style.width = '100%';
            banana.style.height = '100%';
            banana.style.zIndex = 2;
            banana.className = 'banana';
            cell.appendChild(banana);
          } else {
            cell.style.background = 'blue';  // Blocked until score 2300
          }
        }

        pacman.appendChild(cell);
        pacmanCells.push(cell);  // <-- You forgot this → pacmanCells was empty!
      }
    }
    // Place player at starting position (1,1)
    let playerRow = 1, playerCol = 1;
    let pacmanPlayerIndex = playerRow * cols + playerCol;
    let pacmanPlayer = document.createElement('img');
    pacmanPlayer.src = 'monkeyangry.png';
    pacmanPlayer.style.width = `${cellSize}px`;
    pacmanPlayer.style.height = `${cellSize}px`;
    pacmanPlayer.style.background = 'grey';
    pacmanCells[pacmanPlayerIndex].appendChild(pacmanPlayer);

    // --- ALIEN ENEMY LOGIC ---
    function randomPathCell() {
      // Find all indices of path cells (maze[r][c] === 1), not on player
      const pathCells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (maze[r][c] === 1 && !(r === playerRow && c === playerCol)) {
            pathCells.push({ r, c });
          }
        }
      }
      return pathCells[Math.floor(Math.random() * pathCells.length)];
    }

    function spawnAliens() {
      for (let i = 0; i < alienCount; i++) {
        const { r, c } = randomPathCell();
        const idx = r * cols + c;
        const alien = document.createElement('img');
        alien.src = 'aliens.png';
        alien.className = 'alien';
        alien.style.width = `${cellSize}px`;
        alien.style.height = `${cellSize}px`;
        pacmanCells[idx].appendChild(alien);
        aliens.push({ row: r, col: c, img: alien, idx: idx, dir: null });
      }
    }

    function moveAliens() {
      for (let i = 0; i < aliens.length; i++) {
        const alien = aliens[i];
        // Remove from old cell
        pacmanCells[alien.row * cols + alien.col].removeChild(alien.img);

        // Choose random valid direction (not through wall)
        const directions = [
          { dr: -1, dc: 0 }, // up
          { dr: 1, dc: 0 },  // down
          { dr: 0, dc: -1 }, // left
          { dr: 0, dc: 1 },  // right
        ];
        // Don't reverse unless stuck
        let possible = [];
        for (const d of directions) {
          const nr = alien.row + d.dr, nc = alien.col + d.dc;
          if (
            nr >= 0 && nr < rows &&
            nc >= 0 && nc < cols &&
            maze[nr][nc] === 1
          ) {
            if (alien.dir && alien.dir.dr === -d.dr && alien.dir.dc === -d.dc) continue;
            possible.push(d);
          }
        }
        if (possible.length === 0) {
          // Only possible move is to reverse
          for (const d of directions) {
            const nr = alien.row + d.dr, nc = alien.col + d.dc;
            if (
              nr >= 0 && nr < rows &&
              nc >= 0 && nc < cols &&
              maze[nr][nc] === 1
            ) {
              possible.push(d);
            }
          }
        }
        const dir = possible[Math.floor(Math.random() * possible.length)];
        alien.row += dir.dr;
        alien.col += dir.dc;
        alien.dir = dir;
        alien.idx = alien.row * cols + alien.col;

        // Place in new cell
        pacmanCells[alien.idx].appendChild(alien.img);

        // Check collision with player
        if (alien.row === playerRow && alien.col === playerCol) {
          gameOver();
        }
      }
    }
    function shootBullet() {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      bullet.style.position = 'absolute';
      bullet.style.width = '10px';
      bullet.style.height = '10px';
      bullet.style.background = 'yellow';
      bullet.style.borderRadius = '50%';
      bullet.style.zIndex = 10;

      let bulletYOffset = 25;  // 👈 tweak this value (5-8 is good)

      bullet.style.left = (playerCol * cellSize + cellSize / 2 - 5) + 'px';
      bullet.style.top = (playerRow * cellSize + cellSize / 2 - 5 + bulletYOffset) + 'px';

      document.getElementById('pacman').appendChild(bullet);

      let dx = 0, dy = 0;
      if (playerDirection === 'left') dx = -4;
      else if (playerDirection === 'right') dx = 4;
      else if (playerDirection === 'up') dy = -4;
      else if (playerDirection === 'down') dy = 4;

      const bulletInterval = setInterval(() => {
        let left = parseInt(bullet.style.left);
        let top = parseInt(bullet.style.top);

        // Move bullet
        bullet.style.left = (left + dx) + 'px';
        bullet.style.top = (top + dy) + 'px';

        // Recompute current grid cell
        let bulletRow = Math.floor((parseInt(bullet.style.top) + 5 - bulletYOffset) / cellSize);
        let bulletCol = Math.floor((parseInt(bullet.style.left) + 5) / cellSize);

        // Check if wall
        if (
          bulletRow < 0 || bulletRow >= rows ||
          bulletCol < 0 || bulletCol >= cols ||
          maze[bulletRow][bulletCol] === 0
        ) {
          bullet.remove();
          clearInterval(bulletInterval);
          return;
        }

        // Check collision with aliens
        for (let i = 0; i < aliens.length; i++) {
          const alien = aliens[i];
          if (alien.row === bulletRow && alien.col === bulletCol) {
            const alienCell = pacmanCells[alien.row * cols + alien.col];
            alienCell.removeChild(alien.img);
            aliens.splice(i, 1);
            bullet.remove();
            clearInterval(bulletInterval);

            pacmanScore += 200;
            document.getElementById('score-pacman').innerText = `Score: ${pacmanScore}`;
            break;
          }
        }
      }, 20);
    }
    
    function gameOver() {
      pacmanGameOver = true;
      document.removeEventListener('keydown', pacmanKeyHandler);
      alienIntervals.forEach(clearInterval);
      const message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.color = 'red';
      message.style.fontSize = '48px';
      message.style.fontWeight = 'bold';
      message.style.textShadow = '2px 2px 8px black';
      message.innerText = 'Game Over!';
      pacman.appendChild(message);


      const restartLevelBtn = document.createElement('button');
      restartLevelBtn.innerText = 'Restart Level';
      restartLevelBtn.style.position = 'absolute';
      restartLevelBtn.style.top = '60%';
      restartLevelBtn.style.left = '50%';
      restartLevelBtn.style.transform = 'translate(-50%, -50%)';
      restartLevelBtn.style.padding = '10px 20px';
      restartLevelBtn.style.fontSize = '24px';
      restartLevelBtn.style.cursor = 'pointer';
      restartLevelBtn.onclick = () => {
        renderPacmanLevel(); // restart level 2
      };

      const restartGameBtn = document.createElement('button');
      restartGameBtn.innerText = 'Restart Game';
      restartGameBtn.style.position = 'absolute';
      restartGameBtn.style.top = '70%';
      restartGameBtn.style.left = '50%';
      restartGameBtn.style.transform = 'translate(-50%, -50%)';
      restartGameBtn.style.padding = '10px 20px';
      restartGameBtn.style.fontSize = '24px';
      restartGameBtn.style.cursor = 'pointer';
      restartGameBtn.onclick = () => {
        renderGalaxia(); // restart from level 1
      };

      pacman.appendChild(restartLevelBtn);
      pacman.appendChild(restartGameBtn);
    }

    // --- END ALIEN LOGIC ---

    // Win condition checker
    function checkLevelComplete() {
      if (!document.querySelector('.dot')) {
        pacmanGameOver = true;
        document.removeEventListener('keydown', pacmanKeyHandler);
        alienIntervals.forEach(clearInterval);
        animateWallsAndShowNextLevel();
      }
    }

    // Movement handler
    document.removeEventListener('keydown', pacmanKeyHandler);
    pacmanKeyHandler = function (e) {
      if (pacmanGameOver) return;
      if (playerHasGun && e.key === ' ') {
        shootBullet();
      }
      let [dr, dc] = [0, 0];
      if (e.key === 'ArrowLeft') {
        dc = -1;
        playerDirection = 'left';
      } else if (e.key === 'ArrowRight') {
        dc = 1;
        playerDirection = 'right';
      } else if (e.key === 'ArrowUp') {
        dr = -1;
        playerDirection = 'up';
      } else if (e.key === 'ArrowDown') {
        dr = 1;
        playerDirection = 'down';
      }
      let nr = playerRow + dr, nc = playerCol + dc;
      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        maze[nr][nc] !== 0
      ) {
        pacmanCells[pacmanPlayerIndex].removeChild(pacmanPlayer);
        playerRow = nr; playerCol = nc;
        pacmanPlayerIndex = playerRow * cols + playerCol;
        pacmanCells[pacmanPlayerIndex].appendChild(pacmanPlayer);

        // Collect dot
        const dot = pacmanCells[pacmanPlayerIndex].querySelector('.dot');
        if (dot) {
          dot.remove();
          pacmanScore += 10;
          document.getElementById('score-pacman').innerText = `Score: ${pacmanScore}`;
          if (pacmanScore >= 2300 && !bananaCollected && !document.querySelector('img[src="banana.png"]')) {//2300
            // Update banana tile
            const bananaIndex = 11 * cols + 16;  // YOUR banana location
            const bananaCell = pacmanCells[bananaIndex];
            bananaCell.innerHTML = '';
            bananaCell.style.background = 'grey';
            const banana = document.createElement('img');
            banana.src = 'banana.png';
            banana.style.width = '100%';
            banana.style.height = '100%';
            banana.style.zIndex = 2;
            banana.className = 'banana';
            bananaCell.appendChild(banana);

          }
          checkLevelComplete();
        }
        const banana = pacmanCells[pacmanPlayerIndex].querySelector('.banana');
        if (banana && !bananaCollected) {
          // Player collected banana → change to monkeyangrygun!
          pacmanPlayer.src = 'monkeyangrygun.png';

          // Optional: remove the banana (if you want to "collect" it)
          banana.remove();

          // Optional: give bonus points?
          pacmanScore += 100;
          document.getElementById('score-pacman').innerText = `Score: ${pacmanScore}`;
          bananaCollected = true;
          playerHasGun = true;
        }
      }

      // Check collision with any alien
      for (const alien of aliens) {
        if (alien.row === playerRow && alien.col === playerCol) {
          gameOver();
        }
      }
    }
      ;
    document.addEventListener('keydown', pacmanKeyHandler);

    // WALL COLOR ANIMATION (unchanged)
    function animateWallsAndShowNextLevel() {
      const wallCells = Array.from(pacmanCells).filter(cell =>
        cell.style.background === 'blue'
      );
      const colors = ['red', 'yellow', 'green', 'blue'];
      let cycle = 0;
      let colorStep = 0;
      const totalCycles = 2 * colors.length;

      function animateStep() {
        wallCells.forEach(cell => {
          cell.style.background = colors[colorStep % colors.length];
        });
        colorStep++;
        cycle++;
        if (cycle < totalCycles) {
          setTimeout(animateStep, 200);
        } else {
          showNextLevelMessage();
        }
      }
      animateStep();
    }

    function showNextLevelMessage() {
      const message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.color = 'white';
      message.style.fontSize = '48px';
      message.style.fontWeight = 'bold';
      message.style.textShadow = '2px 2px 8px black';
      message.innerText = 'Next Level!';
      document.getElementById('pacman').appendChild(message);

      // --- ADD THIS TO PROCEED TO DONKEY KONG LEVEL ---
      setTimeout(() => {
       // renderFroggerLevel()
        renderDonkeyKongLevel();
      }, 2000); // 2 seconds delay
    }

    // --- Start everything ---
    spawnAliens();
    // Move aliens every 350ms
    alienIntervals.push(setInterval(() => {
      if (!pacmanGameOver) moveAliens();
    }, 350));
  }




  ///donkey kong


  function renderDonkeyKongLevel() {
    const main = document.getElementById('main-content');
  
    // Stop any previous music
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  
    // Load Donkey Kong music
    bgMusic = new Audio('song3.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
  
    bgMusic.play().catch(() => {
      document.addEventListener('keydown', () => {
        bgMusic.play();
      }, { once: true });
    });
    main.innerHTML = `
      <h2>Level 3</h2>
      <p id="dk-score">Score: 0</p>
      <div id="donkeykong" style="position:relative; width: 640px; height: 600px; background: black; border: 4px solid purple; overflow:hidden"></div>
  `;
    initDonkeyKongGame();
  }
  const donkeyKongGrid = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 5, 0, 3, 3, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 3, 3, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 5, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  let donkeyKongGameOver = false;
  let barrelSpawner = null;
  let animId = null;

  function renderDonkeyKongLevel() {
    const main = document.getElementById('main-content');
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  
    // Load Donkey Kong music
    bgMusic = new Audio('song3.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
  
    bgMusic.play().catch(() => {
      document.addEventListener('keydown', () => {
        bgMusic.play();
      }, { once: true });
    });
    main.innerHTML = `
     <button id="back-btn" style="margin: 10px; padding: 10px 20px; font-size: 18px; cursor: pointer;">← Back</button>
    <h2>Level 3</h2>
    <div id="donkeykong" style="position:relative; background:black; border:4px solid purple; overflow:hidden; display:grid; grid-template-columns: repeat(32, 32px); grid-template-rows: repeat(28, 32px);"></div>
  `;
  document.getElementById('back-btn').addEventListener('click', () => {
    stopDonkeyKongGame();
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        bgMusic = null;
    }
    renderHome();
});
    initDonkeyKongGame();
  }

  function initDonkeyKongGame() {

    const gravity = 0.001;     // slow fall → about 2 seconds
    const jumpPower = -3.0;
    const grid = donkeyKongGrid;
    const rows = grid.length;
    const cols = grid[0].length;
    const cellSize = 32;
    const dk = document.getElementById('donkeykong');
    dk.innerHTML = '';
    let dkCells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const val = grid[r][c];
        const cell = document.createElement('div');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.position = 'relative';
        if (val === 1) cell.style.background = '#c0392b';
        else if (val === 2) {
          cell.style.background = 'black';
          const ladder = document.createElement('div');
          ladder.style.width = '8px';
          ladder.style.height = '100%';
          ladder.style.background = '#00ffff';
          ladder.style.margin = 'auto';
          ladder.style.position = 'absolute';
          ladder.style.left = '50%';
          ladder.style.transform = 'translateX(-50%)';
          cell.appendChild(ladder);
          cell.className = 'ladder';
        } else if (val === 4) {
          cell.style.background = 'black';
          const barrels = document.createElement('img');
          barrels.src = 'barrels.png';
          barrels.style.width = '100%';
          barrels.style.height = '100%';
          barrels.style.zIndex = 2;
          cell.appendChild(barrels);
        } else if (val === 5) {
          cell.style.background = '#4444ff';
          cell.className = 'fall';

        }
        else if (val === 6) {
          // Draw like ladder color, but NOT climbable
          cell.style.background = '#00ffff';  // same color as ladder
          cell.className = 'blockedLadder';   // mark as solid!
        }
        else {
          cell.style.background = 'black';
        }
        dk.appendChild(cell);
        dkCells.push(cell);
      }
    }
    // Render Alien King as a 2x2 block
    for (let r = 1; r <= 2; r++) {
      for (let c = 4; c <= 5; c++) {
        if (grid[r][c] === 3 && r === 1 && c === 4) {
          const king = document.createElement('img');
          king.src = 'alienking.png';
          king.style.position = 'absolute';
          king.style.left = '0';
          king.style.top = '0';
          king.style.width = `${cellSize * 2}px`;
          king.style.height = `${cellSize * 2}px`;
          king.style.zIndex = 5;
          king.style.pointerEvents = 'none';
          dkCells[r * cols + c].appendChild(king);
        }
      }
    }
    // Place player at bottom left
    let playerRow = rows - 2;
    let playerCol = 1;
    let playerY = playerRow;
    let playerX = playerCol;
    let vy = 0;
    let vx = 0;
    let isJumping = false;
    let onGround = false;
    donkeyKongGameOver = false;
    let playerImg = document.createElement('img');
    playerImg.src = 'monkeyangry.png';
    playerImg.style.background = 'grey'
    playerImg.style.width = '100%';
    playerImg.style.height = '100%';
    playerImg.style.zIndex = 3;
    playerImg.alt = 'Monkey';
    dkCells[playerRow * cols + playerCol].appendChild(playerImg);

    // Barrel logic (simplified for example)

    function spawnBarrel() {
      // Choose a random floor (look for floor rows)
      let floorRows = [];
      for (let r = 0; r < donkeyKongGrid.length - 1; r++) {
        if (donkeyKongGrid[r + 1].some(cell => cell === 1)) {
          floorRows.push(r);
        }
      }

      // Pick a random row above a floor
      let y = floorRows[Math.floor(Math.random() * floorRows.length)];
      let x = 2; // start barrel at column 2
      let direction = 1; // start moving right

      let barrel = document.createElement('img');
      barrel.src = 'barrelrolls.png';
      barrel.style.position = 'absolute';
      barrel.style.background = 'black'
      barrel.style.width = '28px';
      barrel.style.height = '28px';
      barrel.style.left = `${x * 32}px`;
      barrel.style.top = `${y * 32}px`;
      barrel.style.zIndex = 4;
      barrel.style.pointerEvents = 'none';
      dk.appendChild(barrel);

      function barrelLoop() {
        if (donkeyKongGameOver) {
          dk.removeChild(barrel);
          return;
        }

        // Move horizontally
        x += 0.08 * direction;
        barrel.style.left = `${x * 32}px`;

        // If hit wall, reverse direction
        let nextCol = Math.floor(x + 0.5);
        if (isSolid(y, nextCol)) {
          direction *= -1;
          x += 0.1 * direction; // small nudge
        }

        // Collision with player
        let playerR = Math.round(playerY);
        let playerC = Math.round(playerX);
        if (
          Math.abs(playerR - y) < 0.5 &&
          Math.abs(playerC - x) < 0.5
        ) {
          // PLAYER DIES
          donkeyKongGameOver = true;
          document.onkeydown = null;
          clearInterval(barrelSpawner);
          cancelAnimationFrame(animId);
          const msg = document.createElement('div');
          msg.style.position = 'absolute';
          msg.style.top = '50%';
          msg.style.left = '50%';
          msg.style.transform = 'translate(-50%, -50%)';
          msg.style.color = 'red';
          msg.style.fontSize = '48px';
          msg.style.fontWeight = 'bold';
          msg.innerText = 'YOU DIED!';
          dk.appendChild(msg);

          const restartLevelBtn = document.createElement('button');
          restartLevelBtn.innerText = 'Restart Level';
          restartLevelBtn.style.position = 'absolute';
          restartLevelBtn.style.top = '60%';
          restartLevelBtn.style.left = '50%';
          restartLevelBtn.style.transform = 'translate(-50%, -50%)';
          restartLevelBtn.style.padding = '10px 20px';
          restartLevelBtn.style.fontSize = '24px';
          restartLevelBtn.style.cursor = 'pointer';
          restartLevelBtn.onclick = () => {
            renderDonkeyKongLevel(); // restart this level
          };

          const restartGameBtn = document.createElement('button');
          restartGameBtn.innerText = 'Restart Game';
          restartGameBtn.style.position = 'absolute';
          restartGameBtn.style.top = '70%';
          restartGameBtn.style.left = '50%';
          restartGameBtn.style.transform = 'translate(-50%, -50%)';
          restartGameBtn.style.padding = '10px 20px';
          restartGameBtn.style.fontSize = '24px';
          restartGameBtn.style.cursor = 'pointer';
          restartGameBtn.onclick = () => {
            renderGalaxia(); // restart full game
          };

          dk.appendChild(restartLevelBtn);
          dk.appendChild(restartGameBtn);
          return;
        }

        requestAnimationFrame(barrelLoop);
      }

      requestAnimationFrame(barrelLoop);
    }

    let barrelSpawner = setInterval(() => {
      if (donkeyKongGameOver) {
        clearInterval(barrelSpawner);
        return;
      }
      spawnBarrel();
    }, 1200);

    // --- PLATFORMER PHYSICS ---
    function isSolid(row, col) {
      if (row < 0 || row >= rows || col < 0 || col >= cols) return true;
      let value = grid[Math.round(row)][Math.round(col)];
      return value === 1 || value === 6; // 6 is solid!
    }
    function isLadder(row, col) {
      if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
      return grid[Math.round(row)][Math.round(col)] === 2;
    }
    function isFall(row, col) {
      if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
      return grid[Math.round(row)][Math.round(col)] === 5;
    }
    function updatePlayerDOM() {
      for (const cell of dkCells) {
        if (cell.contains(playerImg)) cell.removeChild(playerImg);
      }
      let r = Math.round(playerY), c = Math.round(playerX);
      dkCells[r * cols + c].appendChild(playerImg);
    }
    function fallToBottom() {
      let c = Math.round(playerX);
      let r = Math.round(playerY);
      let targetRow = r;
      while (
        targetRow + 1 < rows &&
        (isFall(targetRow + 1, c) || !isSolid(targetRow + 1, c) && !isLadder(targetRow + 1, c))
      ) {
        targetRow++;
      }
      playerY = targetRow;
      vy = 0;
      updatePlayerDOM();
    }

    function checkWin() {
      if (
        (Math.round(playerY) === 1 || Math.round(playerY) === 2) &&
        (Math.round(playerX) === 4 || Math.round(playerX) === 5)
      ) {
        // 🚀 ADD THIS GUARD to prevent multiple triggers:
        if (froggerStarted) return;
        froggerStarted = true;
    
        donkeyKongGameOver = true;
        document.onkeydown = null;
        clearInterval(barrelSpawner);
        const msg = document.createElement('div');
        msg.style.position = 'absolute';
        msg.style.top = '50%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.color = 'yellow';
        msg.style.fontSize = '48px';
        msg.style.fontWeight = 'bold';
        msg.innerText = 'YOU WIN!';
        dk.appendChild(msg);
    
        setTimeout(() => {
          renderFroggerLevel();
        }, 2000);
      }
    }

    // --- GAME LOOP ---
    let animId;
    function gameLoop() {
      // Gravity
      if (!isLadder(playerY, playerX)) {
        vy += gravity;
      } else {
        vy = 0;
        onGround = false;
      }

      playerY += vy;
      let currentFloorRow = -1;
      for (let r = Math.round(playerY); r < rows - 1; r++) {
        if (isSolid(r + 1, playerX)) {
          currentFloorRow = r;
          break;
        }
      }

      // --- Set max jump height ---
      let maxJumpY = currentFloorRow - 0.8;

      // --- Limit jump ---
      if (vy < 0 && playerY < maxJumpY) {
        playerY = maxJumpY;
        vy = 0;
      }
      playerX += vx;
      if (playerX < 0) playerX = 0;
      if (playerX > cols - 1) playerX = cols - 1;
      // Collision with ground/platform/ladder
      let belowY = playerY + 0.51;
      let below = isSolid(belowY, playerX) || isLadder(belowY, playerX);
      if (isLadder(playerY, playerX) && isSolid(Math.floor(playerY) + 1, playerX)) {
        vy = 0;
        isJumping = false;
        onGround = true;
      }
      if (vy >= 0) { // falling
        if (below) {
          playerY = Math.floor(playerY);
          vy = 0;
          isJumping = false;
          onGround = true;
        } else {
          onGround = false;
        }
      } else { // jumping up
        let aboveY = playerY - 0.2;
        if (isSolid(aboveY, playerX)) {
          playerY = Math.ceil(playerY);
          vy = 0;
        }
      }
      // Left/right collision
      if (vx !== 0) {
        let nextCol = Math.round(playerX);
        if (isSolid(playerY, nextCol)) {
          playerX = Math.round(playerX - vx);
          vx = 0;
        }
      }
      // --- FALL TILE LOGIC ---
      if (isFall(playerY, playerX)) {
        fallToBottom();
      }
      updatePlayerDOM();
      checkWin();
      animId = requestAnimationFrame(gameLoop);
    }
    animId = requestAnimationFrame(gameLoop);

    // --- CONTROLS ---
    document.onkeydown = function (e) {
      if (donkeyKongGameOver) return;
      if (e.repeat) return;
      if (e.key === 'ArrowLeft') {
        let targetCol = Math.round(playerX) - 1;
        if (!isSolid(playerY, targetCol)) {
          playerX = targetCol;
          updatePlayerDOM();
        }
      } else if (e.key === 'ArrowRight') {
        let targetCol = Math.round(playerX) + 1;
        if (!isSolid(playerY, targetCol)) {
          playerX = targetCol;
          updatePlayerDOM();
        }
      } else if (e.key === 'ArrowUp') {
        if (isLadder(playerY, playerX)) {
          let targetRow = Math.round(playerY) - 1;
          if (!isSolid(targetRow, playerX)) {
            playerY = targetRow;
            updatePlayerDOM();
          }
        }
      } else if (e.key === 'ArrowDown') {
        if (isLadder(playerY, playerX)) {
          let targetRow = Math.round(playerY) + 1;
          if (!isSolid(targetRow, playerX)) {
            playerY = targetRow;
            updatePlayerDOM();
          }
        }
      } else if (e.key === ' ' && onGround && !isLadder(playerY, playerX)) {
        vy = jumpPower;
        vx = 0;
        isJumping = true;
      } else if (e.key === 'a' && onGround) {
        vy = jumpPower * 0.8;
        vx = -1;
        isJumping = true;
      } else if (e.key === 'd' && (onGround || isLadder(playerY, playerX))) {
        vy = jumpPower * 0.8;
        vx = 1;
        isJumping = true;
      }
    };
  }
  function stopDonkeyKongGame() {
    donkeyKongGameOver = true;

    if (barrelSpawner) {
        clearInterval(barrelSpawner);
        barrelSpawner = null;
    }

    if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
    }

    document.onkeydown = null;
}

  /////frogger game 
  function renderFroggerLevel() {
    
    const grid = froggerGrid;
    const rows = grid.length;
    const cols = grid[0].length;
    const cellSize = 64;
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  
    // Load Donkey Kong music
    bgMusic = new Audio('song4.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
  
    bgMusic.play().catch(() => {
      document.addEventListener('keydown', () => {
        bgMusic.play();
      }, { once: true });
    });
    main.innerHTML = `
      <style>
          .cell { box-sizing: border-box; }
          .grass { background-color: orange; }
          .road { background-color: black; }
          .river {
      background-image: url('greenlava.png');
      background-size: cover;
      background-position: center;
    }
          .goal { background-color: lightblue; }
       .frogger-car {
  background-color: black;
  background-image: url('barrelrolls.png');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}
  .frogger-log {
  background-color: black;
  background-image: url('platform.png');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}
      </style>
 <button id="back-btn" style="margin: 10px; padding: 10px 20px; font-size: 18px; cursor: pointer;">← Back</button>
      <h2>Level 4</h2>
      <div id="frogger" style="
          position: relative; 
          width: ${cols * cellSize}px; 
          height: ${rows * cellSize}px; 
          background: black; 
          display: grid; 
          grid-template-columns: repeat(${cols}, ${cellSize}px); 
          grid-template-rows: repeat(${rows}, ${cellSize}px);">
      </div>
  `;
  document.getElementById('back-btn').addEventListener('click', () => {
    stopFroggerGame();
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        bgMusic = null;
    }
    renderHome();
});
    initFroggerGame();
  }
  const froggerGrid = [
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Goal row (lily pads or safe zone) 4 area is where the alien king will be-alienking.png
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // Road row (cars moving)
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // Road row (cars moving)
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Road row (cars moving) [3,3,3,3,3,3,3,3,3,3], // River row (with logs moving)
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // River row (with logs moving)
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // River row (with logs moving)
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Grass row (safe zone)
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // Road row (cars moving)
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // Road row (cars moving)
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // Road row (cars moving)
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Grass row (safe zone) 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // River row (with logs moving)
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // River row (with logs moving)
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// // Grass row (safe zone) start
  ];
  let gameOver = false;
  function initFroggerGame() {
    const carSpawnCooldowns = {};
    const logSpawnCooldowns = {};
    const logSpeed = 2;
    let ridingLog = null;
    const grid = froggerGrid;
    const rows = grid.length;
    const cols = grid[0].length;
    const cellSize = 64;
    let lives = 3;
    gameOver = false;

  
    // Player setup
    let playerRow = rows - 1;
    let playerCol = Math.floor(cols / 2);
    let playerX = playerCol * cellSize;
    let playerY = playerRow * cellSize;
    let onLog = false;
    let currentLog = null;
  
    // Create grid
    const frogger = document.getElementById('frogger');
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
  
        // Set terrain types
        switch (grid[r][c]) {
          case 0: cell.classList.add('goal'); break;
          case 1: cell.classList.add('grass'); break;
          case 2: cell.classList.add('road'); break;
          case 3: cell.classList.add('river'); break;
          case 4:
            cell.classList.add('goal');
            break;
        }
  
        frogger.appendChild(cell);
        cells.push(cell);
      }
    }
    const king = document.createElement('img');
    king.src = 'alienking.png';
    king.style.position = 'absolute';
  
    // "4" area is rows 0-1, cols 2-3
    const kingRowStart = 0;
    const kingRowEnd = 1;
    const kingColStart = 2;
    const kingColEnd = 3;
  
    king.style.left = (kingColStart * cellSize) + 'px';
    king.style.top = (kingRowStart * cellSize) + 'px';
    king.style.width = ((kingColEnd - kingColStart + 1) * cellSize) + 'px';
    king.style.height = ((kingRowEnd - kingRowStart + 1) * cellSize) + 'px';
  
    frogger.appendChild(king);
  
    // Add player
    const player = document.createElement('img');
    player.src = 'monkeyangry.png';
    player.style.position = 'absolute';
    player.style.width = cellSize + 'px';
    player.style.transition = 'left 0.2s, top 0.2s';
    player.style.zIndex = '10';
    frogger.appendChild(player);
    updatePlayerPosition();
  
    // Moving objects
    let cars = [];
    let logs = [];
  
    function spawnCar(row) {
      const car = {
        element: document.createElement('div'),
        col: 0,
        row: row,
        direction: 1
      };
      car.element.className = 'frogger-car';
      car.element.style.position = 'absolute';
      car.element.style.width = cellSize + 'px';
      car.element.style.height = cellSize + 'px';
      car.element.style.borderRadius = '8px';
      car.element.style.top = (row * cellSize) + 'px';
      car.element.style.left = (car.col * cellSize) + 'px';
      frogger.appendChild(car.element);
      cars.push(car);
    }
  
    function spawnLog(row) {
      const log = {
        element: document.createElement('div'),
        col: cols - 2,
        row: row,
        direction: -1
      };
      log.element.className = 'frogger-log';
      log.element.style.position = 'absolute';
      log.element.style.width = (cellSize * 2) + 'px';
      log.element.style.height = cellSize + 'px';
      
      log.element.style.borderRadius = '8px';
      log.element.style.top = (row * cellSize) + 'px';
      log.element.style.left = (log.col * cellSize) + 'px';
      frogger.appendChild(log.element);
      logs.push(log);
    }
  
    let lastCarMoveTime = 0;
    let lastLogMoveTime = 0;
    const carMoveDelay = 500;
    const logMoveDelay = 700;
  
    function loseLife() {
      gameOver = true;
    
      // Show "YOU DIED!" message
      const msg = document.createElement('div');
      msg.style.position = 'absolute';
      msg.style.top = '50%';
      msg.style.left = '50%';
      msg.style.transform = 'translate(-50%, -50%)';
      msg.style.color = 'red';
      msg.style.fontSize = '48px';
      msg.style.fontWeight = 'bold';
      msg.style.zIndex = '100';
      msg.innerText = 'YOU DIED!';
      document.getElementById('frogger').appendChild(msg);
    
      // Show "Restart Level" button
      const restartLevelBtn = document.createElement('button');
      restartLevelBtn.innerText = 'Restart Level';
      restartLevelBtn.style.position = 'absolute';
      restartLevelBtn.style.top = '60%';
      restartLevelBtn.style.left = '50%';
      restartLevelBtn.style.transform = 'translate(-50%, -50%)';
      restartLevelBtn.style.padding = '10px 20px';
      restartLevelBtn.style.fontSize = '24px';
      restartLevelBtn.style.cursor = 'pointer';
      restartLevelBtn.style.zIndex = '100';
      document.getElementById('frogger').appendChild(restartLevelBtn);
    
      // Restart button logic
      restartLevelBtn.onclick = () => {
        // Remove message and button
        msg.remove();
        restartLevelBtn.remove();
    
        // Reset player
        playerRow = rows - 1;
        playerCol = Math.floor(cols / 2);
        playerX = playerCol * cellSize;
        playerY = playerRow * cellSize;
        updatePlayerPosition();
    
        // Reset game state
        gameOver = false;
    
        // Restart update loop
        update();
      };
    }
  
    function updatePlayerPosition() {
      player.style.left = playerX + 'px';
      player.style.top = playerY + 'px';
    }
  
    function update() {
      if (gameOver) return;
  
      const currentTime = Date.now();
  
      // Move cars
      if (currentTime - lastCarMoveTime > carMoveDelay) {
        // Move all cars
        cars.forEach(car => {
          car.col += car.direction;
      
          // Wrap cars
          if (car.col >= cols) car.col = 0;
          if (car.col < 0) car.col = cols - 1;
      
          car.element.style.left = (car.col * cellSize) + 'px';
          car.element.style.top = (car.row * cellSize) + 'px';
        });
      
        // Despawn cars that are "too close" to another car → avoid traffic jam
        cars = cars.filter((car, index, arr) => {
          // Simple despawn rule: if too many cars in same row, remove extras
          const carsInRow = arr.filter(c => c.row === car.row);
          const indexInRow = carsInRow.indexOf(car);
      
          // Keep max 3 cars per row
          return indexInRow < 3;
        });
      
        lastCarMoveTime = currentTime;
      }
  
      // Move logs
      if (currentTime - lastLogMoveTime > logMoveDelay) {
        logs.forEach(log => {
          log.col += log.direction;
      
          // No wrapping! Just update position
          const logX = log.col * cellSize;
          log.element.style.left = logX + 'px';
          log.element.style.top = (log.row * cellSize) + 'px';
        });
      
        // Despawn logs that are off screen
        logs = logs.filter(log => {
          const logX = log.col * cellSize;
      
          // Keep logs that are visible
          if (logX >= -cellSize * 2 && logX <= cols * cellSize) {
            return true;
          }
      
          // Else remove log element
          log.element.remove();
          return false;
        });
      
        lastLogMoveTime = currentTime;
      }
  
      // Spawn cars and logs
      for (let r = 0; r < froggerGrid.length; r++) {
        if (froggerGrid[r][0] === 2) { // road row
          if (!carSpawnCooldowns[r]) carSpawnCooldowns[r] = 0;
          if (currentTime > carSpawnCooldowns[r]) {
            spawnCar(r);
            carSpawnCooldowns[r] = currentTime + 2000 + Math.random() * 1000;
          }
        }
        if (froggerGrid[r][0] === 3) { // river row
          if (!logSpawnCooldowns[r]) logSpawnCooldowns[r] = 0;
          if (currentTime > logSpawnCooldowns[r]) {
            spawnLog(r);
            logSpawnCooldowns[r] = currentTime + 3000 + Math.random() * 1000;
          }
        }
      }
  
      // Car collision check
      if (grid[playerRow][0] === 2) {
        cars.forEach(car => {
          const carX = car.col * cellSize;
          const carY = car.row * cellSize;
          const playerX = playerCol * cellSize;
          const playerY = playerRow * cellSize;
          if (playerX < carX + cellSize &&
              playerX + cellSize > carX &&
              playerY < carY + cellSize &&
              playerY + cellSize > carY) {
            loseLife();
            return;
          }
        });
      }
  
      // River collision check
      if (grid[playerRow][0] === 3) { // river row
        let onLog = false;
        let logDirection = 0;
      
        // First, check if player is on any log
        logs.forEach(log => {
          if (log.row === playerRow) {
            const logX = log.col * cellSize;
            const logLeft = logX;
            const logRight = logX + (cellSize * 2);
            const playerLeft = playerX;
            const playerRight = playerX + cellSize;
      
            // Check overlap
            if (playerLeft < logRight && playerRight > logLeft) {
              onLog = true;
              logDirection = log.direction;
            }
          }
        });
      
        if (onLog) {
          // Now, move player along with the log
          playerX += logDirection * logSpeed;
      
          // Wrap around horizontally
          if (playerX < 0) playerX = (cols - 1) * cellSize;
          if (playerX >= cols * cellSize) playerX = 0;
      
          // Update playerCol for collision checks
          playerCol = Math.floor(playerX / cellSize);
          updatePlayerPosition();
        } else {
          // Player is in river but NOT on a log → DIE
          loseLife();
          return;
        }
      }
  
      // Win condition
      if (grid[playerRow][playerCol] === 4) {
        gameOver = true;
      
        // Create "You Win" sign
        const winSign = document.createElement('div');
        winSign.textContent = 'YOU WIN!';
        winSign.style.position = 'absolute';
        winSign.style.left = '50%';
        winSign.style.top = '50%';
        winSign.style.transform = 'translate(-50%, -50%)';
        winSign.style.fontSize = '48px';
        winSign.style.color = 'gold';
        winSign.style.fontWeight = 'bold';
        winSign.style.padding = '20px';
        winSign.style.background = 'rgba(0,0,0,0.8)';
        winSign.style.border = '5px solid gold';
        winSign.style.borderRadius = '20px';
        winSign.style.zIndex = '100';
        winSign.id = 'win-sign';
      
        document.getElementById('frogger').appendChild(winSign);
        setTimeout(() => {
          renderLevel5();
        }, 2000);
      }
  
      requestAnimationFrame(update);
    }
  
    // Controls
    document.onkeydown = function(e) {
      if (gameOver) return;
      switch (e.key) {
        case 'ArrowUp':
          if (playerRow > 0) playerRow--;
          playerY = playerRow * cellSize;
          break;
        case 'ArrowDown':
          if (playerRow < rows - 1) playerRow++;
          playerY = playerRow * cellSize;
          break;
        case 'ArrowLeft':
          if (playerCol > 0) playerCol--;
          playerX = playerCol * cellSize;
          break;
        case 'ArrowRight':
          if (playerCol < cols - 1) playerCol++;
          playerX = playerCol * cellSize;
          break;
      }
      updatePlayerPosition();
    };
  
    froggerAnimationId = requestAnimationFrame(update);
  }
  function stopFroggerGame() {
    gameOver = true;

    if (froggerAnimationId) {
        cancelAnimationFrame(froggerAnimationId);
        froggerAnimationId = null;
    }

    document.onkeydown = null;
}
  
/////level5

const level5grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 7, 7, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 7, 7, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 8, 8, 5, 5, 5, 5, 8, 8, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 5, 8, 8, 8, 8, 8, 8, 8, 8, 5, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 5, 5, 5, 5, 8, 8, 5, 5, 5, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 5, 5, 8, 8, 5, 5, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0],
    [0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0],
    [0,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11, 11,11, 0],
    [0,13,13,13,13,13,13,13,13,13,13,13,13, 10, 13, 13, 12, 13, 13,10, 13,13,13,13,13,13,13,13,13,13,13,0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   ];


  function renderLevel5() {
    const main = document.getElementById('main-content');
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
    bgMusic = new Audio('song5.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    bgMusic.play();
  
    main.innerHTML = `
       <button id="back-btn" style="margin: 10px; padding: 10px 20px; font-size: 18px; cursor: pointer;">← Back</button>
    <h2>Level 5</h2>
    <div id="mothership-grid" style="position:relative; 
      width: ${32*40}px; 
      height: ${24*40}px; 
      background: url('space.png') no-repeat center center; 
      background-size: cover;"></div>
  `;
    // 🚀 Add Back button click:
    document.getElementById('back-btn').addEventListener('click', () => {
      stopMothershipGame();
      if (bgMusic) {
          bgMusic.pause();
          bgMusic.currentTime = 0;
          bgMusic = null;
      }
      renderHome();
  });
    initMothershipGame();
  }
  
  let playerShotsFired = 0;
  let playerCanShoot = true;  // NEW - controls if player is allowed to shoot
let mothershipAttacking = false;
let mothershipAnimationId = null; 
  function initMothershipGame() {
    let shieldActive = false;
let shieldCells = []; 
    let alienVolleyCount = 0;
let maxAlienVolley = 5;

    const grid = level5grid;
    const rows = grid.length;
    const cols = grid[0].length;
    const cellSize = 40;
    const container = document.getElementById('mothership-grid');
    let gameOver = false;
    let cells = [];
    let playerProjectiles = [];
    let alienProjectiles = [];
    let lastAlienShot = Date.now();
  
    // Create grid cells
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement('div');
        cell.style.position = 'absolute';
        cell.style.left = c * cellSize + 'px';
        cell.style.top = r * cellSize + 'px';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        
        switch(grid[r][c]) {
          case 7: 
          cell.style.background = 'black';
          break;
          case 2: cell.style.background = 'red'; break;
          case 3: cell.style.background = 'orange'; break;
          case 4: cell.style.background = 'yellow'; break;
          case 5: cell.style.background = 'green'; break;
          case 6: cell.style.background = 'blue'; break;
          case 8: cell.style.background = 'purple'; break;
          case 9: cell.style.background = 'lightblue'; break;
          case 10: cell.innerHTML = `<img src="controlpanel.png" style="width:100%">`; break;
          case 11: cell.style.background = 'grey'; break;
          case 12: cell.innerHTML = `<img src="monkeyangry.png" style="width:100%">`; break;
          case 13:cell.style.background = 'grey'; break;
        }
        
        cells.push({element: cell, row: r, col: c, value: grid[r][c]});
        container.appendChild(cell);
      }
    }
    const alienKing = document.createElement('img');
    alienKing.src = 'alienking.png';
    alienKing.style.position = 'absolute';
    // Set where to position it — for example:
    alienKing.style.left = (15 * cellSize) + 'px';  // column 15
    alienKing.style.top = (3 * cellSize) + 'px';    // row 3
    alienKing.style.width = (cellSize * 2) + 'px';  // 2x2 size
    alienKing.style.height = (cellSize * 2) + 'px';
    container.appendChild(alienKing);
    // Shooting mechanics
    container.onclick = function(e) {
      if(gameOver) return;
    
      // 🚀 Block shooting if not allowed:
      if(!playerCanShoot) return;
    
      // 🚀 Normal shooting:
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      const projectile = document.createElement('div');
      projectile.style.position = 'absolute';
      projectile.style.background = 'white';
      projectile.style.width = '10px';
      projectile.style.height = '10px';
      projectile.style.borderRadius = '50%';
      projectile.dataset.type = 'player';
      
      const startX = cells.find(c => c.value === 12).col * cellSize + cellSize/2;
      const startY = cells.find(c => c.value === 12).row * cellSize;
      projectile.style.left = startX + 'px';
      projectile.style.top = startY + 'px';
      
      container.appendChild(projectile);
      playerProjectiles.push({
        element: projectile,
        x: startX,
        y: startY,
        dx: Math.cos(Math.atan2(clickY - startY, clickX - startX)) * 10,
        dy: Math.sin(Math.atan2(clickY - startY, clickX - startX)) * 10
      });
    
      // 🚀 Count shots:
      playerShotsFired++;
    
      // 🚀 After 7 shots → disable player shooting:
      if(playerShotsFired >= 5) {
        playerCanShoot = false;
        mothershipAttacking = true;
      }
    };
 
    function update() {
      if(gameOver) return;
  
      // Update player projectiles
      playerProjectiles.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;
        p.element.style.left = p.x + 'px';
        p.element.style.top = p.y + 'px';
    
        const col = Math.floor(p.x / cellSize);
        const row = Math.floor(p.y / cellSize);
    
        // 🚀 Step 4: Check shield collision first:
        for(let s = 0; s < shieldCells.length; s++) {
            const shield = shieldCells[s];
            if(shield.row === row && shield.col === col) {
                // Destroy shield block
                shield.element.remove();
                shieldCells.splice(s, 1);
    
                // Remove player projectile
                p.element.remove();
                playerProjectiles.splice(index, 1);
    
                // If shield gone → Mothership attacks again
                if(shieldCells.length === 0) {
                    shieldActive = false;
                    mothershipAttacking = true;
                    lastAlienShot = Date.now();
                }
    
                return;  // Important — stop here!
            }
        }
    
        // 🚀 Now normal cell collision:
        if(col >= 0 && col < cols && row >= 0 && row < rows) {
            const cell = cells.find(c => c.row === row && c.col === col);
            if(cell && cell.value !== 0 && cell.value !== 1 && cell.value !== 12 && cell.value !== 9 && cell.value !== 10 && cell.value !== 11) {
                handleDamage(cell, 'player');
                p.element.remove();
                playerProjectiles.splice(index, 1);
            }
        }
    
        // 🚀 If bullet goes out of screen:
        if(p.x < 0 || p.x > cols*cellSize || p.y < 0 || p.y > rows*cellSize) {
            p.element.remove();
            playerProjectiles.splice(index, 1);
        }
    });
  
      // Alien shooting
      if(mothershipAttacking && Date.now() - lastAlienShot > 500) {  // faster shots!
        const shootableCells = cells.filter(c => 
            c.value >= 2 && c.value <= 8 && Math.random() < 0.1
        );
    
        shootableCells.forEach(cell => {
            const projectile = document.createElement('div');
            projectile.style.position = 'absolute';
            projectile.style.background = 'red';
            projectile.style.width = '10px';
            projectile.style.height = '10px';
            projectile.dataset.type = 'alien';
    
            const startX = cell.col * cellSize + cellSize/2;
            const startY = cell.row * cellSize + cellSize;
            projectile.style.left = startX + 'px';
            projectile.style.top = startY + 'px';
    
            container.appendChild(projectile);
            alienProjectiles.push({
                element: projectile,
                x: startX,
                y: startY,
                dy: 5
            });
    
            // Count this shot:
            alienVolleyCount++;
        });
    
        lastAlienShot = Date.now();
    
        // 🚀 After full volley → unlock player:
        if(alienVolleyCount >= maxAlienVolley) {
          // Instead of unlocking player → spawn shield!
          spawnShield();
          shieldActive = true;
          playerShotsFired = 0;
          playerCanShoot = true;  // allow shooting to break shield
          mothershipAttacking = false;
          alienVolleyCount = 0;
      }
    }
  
      // Update alien projectiles
      alienProjectiles.forEach((p, index) => {
        p.y += p.dy;
        p.element.style.top = p.y + 'px';
  
        const col = Math.floor(p.x / cellSize);
        const row = Math.floor(p.y / cellSize);
        
        if(row >= 0 && row < rows) {
          const cell = cells.find(c => c.row === row && c.col === col);
          if(cell && (cell.value === 9 || cell.value === 10 || cell.value === 11 || cell.value === 12 || cell.value === 13)) {
              handleDamage(cell, 'alien');
              p.element.remove();
              alienProjectiles.splice(index, 1);
          }
      }
        
        if(p.y > rows*cellSize) {
          p.element.remove();
          alienProjectiles.splice(index, 1);
        }
      });
  
      requestAnimationFrame(update);
    }
    function showVictoryScreen() {
      const victory = document.createElement('div');
      victory.style.position = 'absolute';
      victory.style.top = '50%';
      victory.style.left = '50%';
      victory.style.transform = 'translate(-50%, -50%)';
      victory.style.fontSize = '48px';
      victory.style.color = 'gold';
      victory.style.fontWeight = 'bold';
      victory.style.padding = '20px';
      victory.style.background = 'rgba(0,0,0,0.8)';
      victory.style.border = '5px solid gold';
      victory.style.borderRadius = '20px';
      victory.innerText = 'YOU WIN!';
  
      const restartBtn = document.createElement('button');
      restartBtn.innerText = 'Restart Game';
      restartBtn.style.position = 'absolute';
      restartBtn.style.top = '70%';
      restartBtn.style.left = '50%';
      restartBtn.style.transform = 'translate(-50%, -50%)';
      restartBtn.style.padding = '10px 20px';
      restartBtn.style.fontSize = '24px';
      restartBtn.style.cursor = 'pointer';
  
      restartBtn.onclick = () => {
          renderGalaxia();  // Restart game!
      };
  
      const container = document.getElementById('mothership-grid');
      container.appendChild(victory);
      container.appendChild(restartBtn);
  }
    function spawnShield() {
      // Example: place 2 rows of 8 blocks, starting at row 5, columns 12-19
      const startRow = 12;
      const startCol = 12;
      const shieldWidth = 8;
      const shieldHeight = 2;
  
      for (let r = 0; r < shieldHeight; r++) {
          for (let c = 0; c < shieldWidth; c++) {
              const gridRow = startRow + r;
              const gridCol = startCol + c;
  
              const shieldBlock = document.createElement('div');
              shieldBlock.style.position = 'absolute';
              shieldBlock.style.left = gridCol * cellSize + 'px';
              shieldBlock.style.top = gridRow * cellSize + 'px';
              shieldBlock.style.width = cellSize + 'px';
              shieldBlock.style.height = cellSize + 'px';
              shieldBlock.style.background = 'cyan';
              shieldBlock.style.border = '2px solid white';
              shieldBlock.dataset.type = 'shield';
  
              container.appendChild(shieldBlock);
  
              // Add to shield list
              shieldCells.push({
                  element: shieldBlock,
                  row: gridRow,
                  col: gridCol
              });
          }
      }
  }
    function handleDamage(cell, source) {
      if(cell.value === 7 && source === 'player') {
        // Player hit the alien king → start mothership explosion
        gameOver = true;
        alienKing.src = 'shipexplosion.png';
    alienKing.style.background = 'black';

        // Start mothership explosion sequence:
        startMothershipExplosion();
        return;
    }
  
      if((cell.value === 12 || cell.value === 13) && source === 'alien') {
          // Alien breached player ship — show YOU DIED screen
          const msg = document.createElement('div');
          msg.style.position = 'absolute';
          msg.style.top = '50%';
          msg.style.left = '50%';
          msg.style.transform = 'translate(-50%, -50%)';
          msg.style.color = 'red';
          msg.style.fontSize = '48px';
          msg.style.fontWeight = 'bold';
          msg.style.zIndex = '100';
          msg.innerText = 'YOU DIED!';
          container.appendChild(msg);
  
          // Restart Level button
          const restartLevelBtn = document.createElement('button');
          restartLevelBtn.innerText = 'Restart Level';
          restartLevelBtn.style.position = 'absolute';
          restartLevelBtn.style.top = '60%';
          restartLevelBtn.style.left = '50%';
          restartLevelBtn.style.transform = 'translate(-50%, -50%)';
          restartLevelBtn.style.padding = '10px 20px';
          restartLevelBtn.style.fontSize = '24px';
          restartLevelBtn.style.cursor = 'pointer';
          restartLevelBtn.style.zIndex = '100';
          container.appendChild(restartLevelBtn);
  
          restartLevelBtn.onclick = () => {
              renderLevel5();
          };
  
          // Restart Game button
          const restartGameBtn = document.createElement('button');
          restartGameBtn.innerText = 'Restart Game';
          restartGameBtn.style.position = 'absolute';
          restartGameBtn.style.top = '70%';
          restartGameBtn.style.left = '50%';
          restartGameBtn.style.transform = 'translate(-50%, -50%)';
          restartGameBtn.style.padding = '10px 20px';
          restartGameBtn.style.fontSize = '24px';
          restartGameBtn.style.cursor = 'pointer';
          restartGameBtn.style.zIndex = '100';
          container.appendChild(restartGameBtn);
  
          restartGameBtn.onclick = () => {
              renderGalaxia();
          };
  
          gameOver = true;
          return;
      }
  
      // Default damage behavior — explosion
      cell.element.innerHTML = `<img src="shipexplosion.png" style="width:100%">`;
      setTimeout(() => {
          cell.element.style.background = 'black';
          cell.element.innerHTML = '';
      }, 300);
  
      // Mark cell as destroyed
      cell.value = 0;
  }
  function startMothershipExplosion() {

    // 🚀 First, clear 2x2 under alienKing:
    for(let r = 3; r <= 4; r++) {
        for(let c = 15; c <= 16; c++) {
            const cell = cells.find(cell => cell.row === r && cell.col === c);
            if(cell) {
                cell.value = 0;
                cell.element.style.background = 'black';
                cell.element.innerHTML = `<img src="shipexplosion.png" style="width:100%">`;
            }
        }
    }

    // 🚀 Then start explosion loop:
    let explosionInterval = setInterval(() => {
        const targets = cells.filter(c =>
            c.value === 2 || c.value === 3 || c.value === 4 ||
            c.value === 5 || c.value === 6 || c.value === 7 || c.value === 8
        );

        if(targets.length === 0) {
            clearInterval(explosionInterval);

            // 🚀 Background to space.png:
            const container = document.getElementById('mothership-grid');
            container.style.background = `url('space.png') no-repeat center center`;
            container.style.backgroundSize = 'cover';

            // 🚀 AlienKing to space.png:
            alienKing.src = 'space.png';
            alienKing.style.background = 'black';

            // 🚀 Show YOU WIN:
            showVictoryScreen();
            return;
        }

        // Pick random target:
        const target = targets[Math.floor(Math.random() * targets.length)];
        target.element.style.background = 'black';
        target.element.innerHTML = `<img src="shipexplosion.png" style="width:100%">`;
        target.value = 0;
    }, 100);
}
  
mothershipAnimationId = requestAnimationFrame(update);
  }
  function stopMothershipGame() {
    // 🚀 Set gameOver true
    gameOver = true;

    // 🚀 Cancel animation frame
    if (mothershipAnimationId) {
        cancelAnimationFrame(mothershipAnimationId);
        mothershipAnimationId = null;
    }

    // 🚀 Remove controls
    document.onkeydown = null;

    // 🚀 Optional: Remove onclick shooting
    const container = document.getElementById('mothership-grid');
    if (container) {
        container.onclick = null;
    }
}
  // To start the Donkey Kong level, call:
  function attachNavEvents() {
    const homeBtn = document.getElementById('nav-home');
    const resumeBtn = document.getElementById('nav-resume');
    const contact = document.getElementById("nav-contact")
    const uploadanideabtn = document.getElementById("send-a-idea-or-a-project")
    const galaxia = document.getElementById('galaxia')

    if (homeBtn) homeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderHome();
    });

    if (resumeBtn) resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderResume();
    });

    if (contact) contact.addEventListener('click', (e) => {
      e.preventDefault();
      renderContact();
    })
    // if (uploadanideabtn) uploadanideabtn.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   uploadanidea();
    // })
    if (galaxia) galaxia.addEventListener('click', (e) => {
      e.preventDefault();
      //renderLevel5()
      renderStartScreen();
    })
  }


  // Initial load
  attachNavEvents(); // assumes nav already exists in HTML (layout.html)
});

// const originalMaze = [
//   1[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   2[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   3[0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0],
//   4[0, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 7, 7, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 7, 7, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 5, 6, 5, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 5, 5, 5, 5, 8, 8, 5, 5, 5, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 5, 5, 8, 8, 5, 5, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0],
//   [0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0],
//   [0,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11, 11,11, 0],
//   [0,11,11,11,11,11,11,11,11,11,11,11,11, 10, 9, 9, 12, 9, 9,10, 11,11,11,11,11,11,11,11,11,11,11,11, 0]
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19, 20,21,22,23,24,25,26,27,28,29,30,31,32],
//7 is where the alien king labeled alienking.png
//1 is where space is
//2,3,4,5,6,8 is the color of the parts of the ship object red,orange,yellow,green,blue,purple
//10 is control panel labeled  controlpanel.png
//12 is the monkeyangry.png 
//the entire ship ,2,3,4,5,6,7,8 is suppose to be able to be shot part by part, 
//all of the 9 is going to be light blue, 11 is grey and the 9,10,11 can be shot apart. the alien space ship shoots down to my ship and the player aims with the mouse and shoots down a brick if it hits the alienspaceship then render that part shipexplosion.png and makethe part disapear.
//the alien ship shoots the player ship and then render that part shipexplosion.png and makethe part disapear. if the player shoots at 7, player wins, if the alien ship hits and breaks through 9 or 11, the player dies. the alien ship shoots every 7 seconds