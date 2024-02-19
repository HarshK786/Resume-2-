// Array of jokes for the jokes section
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
    "What did the Buddhist say to the hot dog vendor? Make me one with everything."
    // Add more jokes as needed
];
// Function to display a random joke
function displayRandomJoke() {
    const jokeText = document.getElementById("jokeText");
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.innerHTML = randomJoke;
}
// Initial display of a random joke
displayRandomJoke();
// Set up interval to change the joke every 30 seconds
setInterval(displayRandomJoke, 30000);
// Update the JavaScript code in your existing script.js
document.addEventListener("DOMContentLoaded", function () {
    const jokeText = document.getElementById("jokeText");
    const changeJokeBtn = document.getElementById("changeJokeBtn");
    // Array of jokes for the jokes section
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
        "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
        // Add more jokes as needed
    ];
    // Function to display a random joke
    function displayRandomJoke() {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeText.innerHTML = randomJoke;
    }
    function displayRandomJoke() {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeText.innerHTML = randomJoke;
        jokeText.classList.add("animated");
    }
    // Initial display of a random joke
    displayRandomJoke();
    // Set up event listener for the button click
    changeJokeBtn.addEventListener("click", function () {
        jokeText.classList.remove("animated");
        displayRandomJoke();
        // Add a delay and then reapply the animation class
        setTimeout(() => {
            jokeText.classList.add("animated");
        }, 10);
    });
    // Set up interval to change the joke every 30 seconds
    setInterval(function () {
        jokeText.classList.remove("animated");
        displayRandomJoke();
        // Add a delay and then reapply the animation class
        setTimeout(() => {
            jokeText.classList.add("animated");
        }, 10);
    }, 30000);
});
// Add the following JavaScript code to dynamically load content for the timeline
document.addEventListener("DOMContentLoaded", function () {
    const timelineContent = document.getElementById("timeline-content");
    // Sample data for the timeline (replace with your own information)
    const timelineData = [
        {
            date: "2022 - 2025",
            title: "Started my Journey",
            description: "Began my career in web development and gained foundational skills.",
        },
        {
            date: "2018 - 2020",
            title: "Junior Developer Role",
            description: "Worked as a junior developer, focusing on front-end technologies and UX/UI design.",
        },
        {
            date: "2020 - Present",
            title: "Senior Developer Role",
            description: "Promoted to a senior developer position, leading projects and mentoring junior team members.",
        },
    ];

    // Function to generate HTML for timeline entries
    function generateTimelineHTML(entry) {
        return `
            <div class="timeline-entry">
                <h3>${entry.date}</h3>
                <h4>${entry.title}</h4>
                <p>${entry.description}</p>
            </div>
        `;
    }
    // Function to dynamically load content for the timeline
    function loadTimelineContent() {
        timelineData.forEach((entry) => {
            const entryHTML = generateTimelineHTML(entry);
            timelineContent.innerHTML += entryHTML;
        });
    }
    // Call the function to load timeline content
    loadTimelineContent();
});
// This is just an example, you can use any library or framework you want
const sidebar = document.getElementById("sidebar");
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
  } else {
    sidebar.style.position = "static";
  }
});

//minibar button -->
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    toggleButton.addEventListener('click', function () {
        if (sidebar.style.left === '-200px') {
            sidebar.style.left = '0';
            content.style.marginLeft = '200px';
        } else {
            sidebar.style.left = '-200px';
            content.style.marginLeft = '20px';
        }
    });
});