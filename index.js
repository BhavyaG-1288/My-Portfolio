
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("nav").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#mobile-menu");
    const navLinks = document.querySelector("#nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");  
    });
});


document.getElementById("resume-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    const resumePath = "assets/resume.pdf";  
    let link = document.createElement("a");
    link.href = resumePath;
    link.download = "YourName_Resume.pdf";  
    document.body.appendChild(link);
    link.click();  
    document.body.removeChild(link); 
});

AOS.init({
    duration: 1000, 
    once: true, 
  });
 