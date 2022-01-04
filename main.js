const menu_btn = document.getElementById("menu-btn");
const peace_btn = document.getElementById("peace_btn");
const sidebar = document.getElementById("sidebar-container");

let sideBar = false; //boolean that determines whether the sidebar is open (false for closed, true for open)
function toggleSidebar() {
    if(!sideBar) {
        sidebar.classList.add("open");
        sideBar = true;
    }
    else {
        sidebar.classList.remove("open");
        sideBar = false;
    }
}

menu_btn.addEventListener("click", () => {
    console.log("menu has been toggled");
    toggleSidebar();
});