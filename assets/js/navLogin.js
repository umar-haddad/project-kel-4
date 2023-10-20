//

const navLinkButton = document.querySelector(".nav-link-button");
const navLinkButton2 = document.querySelector(".nav-link-button-2");
const navLinkUser = document.querySelector(".nav-link-dropdown");
const navLinkName = document.querySelector(".nav-link-name");
const navLinkLogout = document.querySelector(".nav-link-logout");



const renderNavbarUser = () => {
   const user = JSON.parse(localStorage.getItem('loggedInUser'));
   if(user){
      navLinkButton.classList.add("hidden");
      navLinkButton2.classList.add("hidden");
      navLinkUser.classList.remove("hidden");
      navLinkName.innerHTML = user.firstName;
   }else {
      navLinkButton.classList.remove("hidden");
      navLinkButton2.classList.remove("hidden");
      navLinkUser.classList.add("hidden");   
   }
 };

const logout = () => {
   localStorage.removeItem('loggedInUser');
   renderNavbarUser();
}

navLinkLogout.addEventListener('click', logout);

renderNavbarUser();