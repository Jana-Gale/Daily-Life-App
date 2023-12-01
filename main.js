//select input
let input = document.querySelector("input");
let u_List = document.querySelector("ul");

function addList() {
    if (input.value === "") {
        alert("You must enter somting.")
            // 

    } else {

        u_List.insertAdjacentHTML("afterbegin",
            `
            <li>${input.value}
            <div id="check-oppration">
            <input type="checkbox" name="yes" id="Dones">
            <label for="Done" class="Done">
                Done
            </label>

            <input type="checkbox" name="yes" id="Stills">
            <label for="Still" class="Still">
               Still
            </label>
                    <span class="Remove-btn">&times;</span>
            </div>
           
        </li>
        `
        )
        AddLocalStorage()

        input.value = ""
    }

}



//Event ul 

u_List.addEventListener("click", (event) => {
    if (event.target.classList.contains("Remove-btn")) {
        let parent = event.target.parentElement
        grand_parent = parent.parentElement
        grand_parent.remove()
        console.log(grand_parent);
        AddLocalStorage()
    }
    // else if (event.target.classList.contains("Done")) {
    //     console.log("Done");
    //     let icon_Check = event.target.querySelector("i")
    //     console.log(icon_Check);

    //     icon_Check.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`

    // }
})



//delete icon
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        u_List.innerHTML = ""
        AddLocalStorage()
    }
})


//Add Local storage

const AddLocalStorage = () => {
    localStorage.setItem("Data", u_List.innerHTML)

}


//display data from local storage

const ReadFromLocalStorage = () => {
    u_List.innerHTML = localStorage.getItem("Data")

}
ReadFromLocalStorage()