// 1. Display current year
let year = document.getElementById("year");

year.innerText = new Date().getFullYear();


// 2. Technical skills
let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "SQL"
];

let descriptions = [
    [
        "Strong understanding of HTML fundamentals, including HTML5, semantic elements, headings, paragraphs, lists, tables, hyperlinks, and multimedia elements for creating well-structured web pages.",

        "Proficient in HTML forms, input types, form controls, labels, buttons, and form validation attributes for collecting user information efficiently.",

        "Experienced in using HTML elements and attributes to structure web content, organize page layouts, and improve accessibility.",

        "Solid understanding of webpage structure, hyperlinks, images, audio, video, and integration of CSS and JavaScript into HTML documents."
    ],
    [
        "Strong understanding of CSS fundamentals, including selectors, colors, backgrounds, fonts, borders, margins, and padding for styling web pages.",

        "Proficient in the CSS box model, display properties, positioning, Flexbox, and Grid for creating organized and responsive layouts.",

        "Experienced in applying pseudo-classes, pseudo-elements, transitions, transformations, and animations to enhance user interface design.",

        "Solid understanding of responsive web design using media queries, relative units, and layout techniques for creating mobile-friendly web pages."
    ],
    [
        "Strong understanding of JavaScript fundamentals, including variables, data types, operators, control statements, loops, and input/output handling for developing interactive web applications.",

        "Proficient in functions, arrays, objects, strings, arrow functions, callbacks, and ES6 features for writing clean, reusable, and maintainable code.",

        "Solid understanding of DOM manipulation and event handling for dynamically updating webpage content and responding to user interactions.",

        "Hands-on experience with form validation, error handling, and asynchronous JavaScript concepts, including callbacks, promises, and async/await, for building dynamic web applications."
    ],
    [
        "Writing programs using loops, functions, collections, and OOP."
    ],
    [
        "Working with queries, joins, and database operations."
    ]
];

let skillsList = document.getElementById("skillsList");
let skillMessage = document.getElementById("skillMessage");


// 3. Show selected skill
function showSkill(index) {
    let buttons = skillsList.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("aria-pressed", "false");
    }

    buttons[index].setAttribute("aria-pressed", "true");

    skillMessage.innerHTML = "";

    let heading = document.createElement("h3");
    heading.innerText = skills[index];

    let list = document.createElement("ul");

    for (let i = 0; i < descriptions[index].length; i++) {
        let item = document.createElement("li");
        item.innerText = descriptions[index][i];

        list.appendChild(item);
    }

    skillMessage.appendChild(heading);
    skillMessage.appendChild(list);
}


// 4. Create skill buttons
for (let i = 0; i < skills.length; i++) {
    let button = document.createElement("button");

    button.type = "button";
    button.innerText = skills[i];
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-controls", "skillMessage");

    button.onclick = function () {
        showSkill(i);
    };

    skillsList.appendChild(button);
}

showSkill(0);


// 5. Project details
// These are the local file locations you provided.
let projects = [
    {
        name: "Swiggy Website",
        technology: "HTML, CSS, JavaScript",
        description:
            "A food delivery website with restaurants and menus.",
        link:
            "file:///C:/Users/dell/OneDrive/Documents/HTML/Css/JS/swiggy.html"
    },
    {
        name: "Netflix Website",
        technology: "HTML, CSS, JavaScript",
        description:
            "A movie website with movie collections.",
        link:
            "file:///C:/Users/dell/OneDrive/Documents/HTML/Css/assignment1.html"
    },
    {
        name: "Knight Bite Website",
        technology: "HTML, CSS, JavaScript",
        description:
            "A restaurant website with food information.",
        link:
            "file:///C:/Users/dell/OneDrive/Documents/HTML/Css/JS/knightbight.html"
    }
];


// 6. Project elements
let projectList = document.getElementById("projectList");
let projectSearch = document.getElementById("projectSearch");
let projectCount = document.getElementById("projectCount");
let emptyMessage = document.getElementById("emptyMessage");


// 7. Display projects
function showProjects() {
    projectList.innerHTML = "";

    let search = projectSearch.value.toLowerCase().trim();
    let count = 0;

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let text = project.name + " " +
                project.technology + " " +
                project.description;

        text = text.toLowerCase();

        if (text.indexOf(search) !== -1) {
            let card = document.createElement("article");
            card.className = "card project-card";

            let title = document.createElement("h3");
            title.innerText = project.name;

            let technology = document.createElement("p");
            technology.className = "tag";
            technology.innerText = project.technology;

            let description = document.createElement("p");
            description.innerText = project.description;

            card.appendChild(title);
            card.appendChild(technology);
            card.appendChild(description);

            if (project.link.trim() !== "") {
                let link = document.createElement("a");

                link.innerText = "Open Project ↗";
                link.href = project.link;
                link.className = "button";
                link.target = "_blank";
                link.rel = "noopener noreferrer";

                link.setAttribute(
                    "aria-label",
                    "Open " + project.name + " in a new tab"
                );

                card.appendChild(link);
            } else {
                let message = document.createElement("p");

                message.className = "project-status";
                message.innerText = "Project link coming soon.";

                card.appendChild(message);
            }

            projectList.appendChild(card);
            count++;
        }
    }

    if (count === 1) {
        projectCount.innerText = "1 project found";
    } else {
        projectCount.innerText = count + " projects found";
    }

    if (count === 0) {
        emptyMessage.hidden = false;
    } else {
        emptyMessage.hidden = true;
    }
}


// 8. Search projects
projectSearch.oninput = function () {
    showProjects();
};

showProjects();


// 9. Back-to-top button
let topButton = document.getElementById("topButton");

function checkScroll() {
    if (window.scrollY > 300) {
        topButton.hidden = false;
    } else {
        topButton.hidden = true;
    }
}

window.onscroll = checkScroll;

topButton.onclick = function () {
    window.scrollTo(0, 0);
};

checkScroll();

// Resume buttons work directly through HTML links.