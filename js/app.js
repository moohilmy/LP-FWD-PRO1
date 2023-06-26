// const sections = Array.form(document.qurerySelectorAll('section'));


let i = 0;

// function createSection(){
//     i++;
//     const content = `    <section id="section${i}" data-nav="Section ${i}">
//     <div class="landing__container">
//     <h2>Section ${i}</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

//     <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
//     </div>
//     </section>`
//     document.querySelector('main').insertAdjacentHTML('beforeend',content);
// };


function createSection(){
    i++;
        const   major = document.createElement("section");
        major.setAttribute("ID",`section${i}`);
        major.setAttribute("data-nav",`section ${i}`);
        document.body.querySelector("main").appendChild(major);
        const landing = document.createElement("div");
        landing.setAttribute("class","landing__container");
        major.appendChild(landing)
        const head = document.createElement("h2");
        head.textContent = `Section ${i}`;
        landing.appendChild(head)
        const p1 = document.createElement("p");
        const textOne = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
        p1.appendChild(textOne)
        landing.appendChild(p1)
        const p2 = document.createElement("p");
        const textTwo = document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
        p2.appendChild(textTwo)
        landing.appendChild(p2)
}

// const navBar = document.getElementById("navbar__list");
// const createNavItems = () => {
//     navBar.innerHTML = "";
//     document.querySelectorAll("section").forEach((section) => {
//         const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
//         navBar.insertAdjacentHTML("beforeend", listItem);
//     });
// };

const navBar = document.getElementById("navbar__list");
// function createNavItems(){
//         navBar.innerHTML = "";
//         document.querySelectorAll("section").forEach((section) => {
//         sectionName = section.getAttribute("data-nav");
//         sectionLink = section.getAttribute("id");
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `<a href="#${sectionLink}" data-nav="${section.id}" class="menu__link">${sectionName}</a>`
//         navBar.appendChild(listItem);
//     })
// };

function createNavItems(){
    navBar.innerHTML = "";
    const sections = document.querySelectorAll("section")
    for(section of sections){
    sectionName = section.getAttribute("data-nav");
    sectionLink = section.getAttribute("id");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${sectionLink}" data-nav="${section.id}" class="menu__link">${sectionName}</a>`
    navBar.appendChild(listItem);
}
};
const up = document.querySelector(".up")

window.onscroll = function() {
	// document.querySelectorAll("section").forEach(function(active) {
    // let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	// if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
    // active.classList.add("your-active-class");
    // activeLink.classList.add("active-link");
    // }
    // else{
    //     active.classList.remove("your-active-class");
    //     activeLink.classList.remove("active-link");
    // }
	// })
    const sections =document.querySelectorAll("section")
    for (let active of sections){
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ){
            active.classList.add("your-active-class")
        }else{
            active.classList.remove("your-active-class")
        }
    }
    if (scrollY >= 1100){
        up.classList.add("show");
    }else{
        up.classList.remove("show");
    }
}

up.onclick = function(){
    window.scrollTo(
        {
            top:0,
            behavior:"smooth",
        }
    )
}




createSection();createSection();createSection();
createNavItems();



document.getElementById("btn").addEventListener("click", () => {
    createSection();
    createNavItems();
});



