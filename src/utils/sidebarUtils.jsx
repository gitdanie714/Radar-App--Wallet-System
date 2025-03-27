export const handleResize = (setSidebarActive) => {
    setSidebarActive(window.innerWidth > 768);
  };
  
  export const toggleSidebar = (sidebarRef, setSidebarActive) => {
    setSidebarActive(prevState => !prevState);
  };
