const newPreloader = () => {
    const preloaderWindow = document.querySelector(".preloader")
    
    if (preloaderWindow) { setTimeout(() => {
        preloaderWindow.style.display = "none"

    }, 2000) 

    }
    
}

window.addEventListener('load', newPreloader)

