export function animateCSS(element, animationName, callback?) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (callback && typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

export enum ANIMATIONS {
    ZOOMIN = 'zoomIn',
    ZOOMOUT = 'zoomOut'
}