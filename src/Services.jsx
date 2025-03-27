export function isauthenticated(){
    var authenticated = localStorage.getItem("userid")?true:false;
    return authenticated;
}
export function isActive(myroute){
   
    return window.location.pathname == myroute? true: false;
    /*
    if(pathparams == myroute){
        return true
    }
    else{
        return false
    }*/

}
export var config={
    baseurl:"https://radar2.pythonanywhere.com",
    routeconfig:{
        dashboard:"/dashboard",
        login:"/",
        modal:"/modal",
        question: "/question",
        usermanagement: "/usermanagement" ,
        subjectmanagement: "/subjectmanagement",
        assigment: "/assigment" 
    },
    loginstate:["signup", "login"]
}

// Function to toggle sidebar visibility
export const toggleSidebar = (sidebarRef, setSidebarActive) => {
    const isCurrentlyActive = sidebarRef.current.classList.contains('active');
    setSidebarActive(!isCurrentlyActive);
    sidebarRef.current.classList.toggle('active', !isCurrentlyActive);
  };
  
  // Function to hide the toggle button on wide screens
  export const handleResize = (setSidebarActive) => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setSidebarActive(true); // Show sidebar on wide screens
    } else {
      setSidebarActive(false); // Hide sidebar on smaller screens by default
    }
  };
  
// Toggles the visibility of a password input field.
export const toggleVisibility = (isVisible, setIsVisible) => {
  setIsVisible(!isVisible);
};