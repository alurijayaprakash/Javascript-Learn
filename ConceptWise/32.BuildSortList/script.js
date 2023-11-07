const courseList = [
    {
        courseName : "Complete ReactJs Course",
        coursePrice : "2.3"
    },
    {
        courseName : "Complete Angular Course",
        coursePrice : "3.3"
    },
    {
        courseName : "Complete HTML Course",
        coursePrice : "1.2"
    },
    {
        courseName : "Complete CSS Course",
        coursePrice : "2.6"
    },
    {
        courseName : "Complete Data Science Course",
        coursePrice : "4.1"
    },
    {
        courseName : "Complete Rust Course",
        coursePrice : "2.9"
    },
]

function generateList(){
    // un-ordered list item
    ul = document.querySelector(".list-group");
    //to mitigate the dulication
    ul.innerHTML = "";

    courseList.forEach(course => {
        const li = document.createElement("li"); // <li></li>
        li.classList.add("list-group-item"); // <li class="list-group-item"></li>

        // till now we created elements , now create text node
        const cName = document.createTextNode(course.courseName);

        // add this text node to list item(li)
        li.appendChild(cName); // <li class="list-group-item">Complete Java Course</li>

        //create span element
        const span = document.createElement("span");  // <li class="list-group-item">Complete Java Course<span></span></li>
        span.classList.add("float-right"); // <li class="list-group-item">Complete Java Course<span class = "float-right"></span></li>

        //create text node
        const price = document.createTextNode("$" + course.coursePrice);
        span.appendChild(price); // <li class="list-group-item">Complete Java Course<span class = "float-right">$ 2.5</span></li>

        //span created but not injected to li element, insert it now
        li.appendChild(span);

        // add this li item to un-ordered list item(ul)
        ul.appendChild(li);

    });
}


// run func - method-1
// generateList()

// run func - method-2 - best
window.addEventListener("load", generateList);

//SORT

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    console.log("Sort fired");
    courseList.sort( (a,b) => a.coursePrice - b.coursePrice );
    generateList();
});

//Reverse-SORT

const rev_button = document.querySelector(".reverse-sort-btn");

rev_button.addEventListener("click", () => {
    console.log("Reverse-Sort fired")
    courseList.sort( (a,b) => b.coursePrice - a.coursePrice );
    generateList();
});