const birdElem = document.querySelector('[data-bird]');
const BIRD_SPEED = .5;
const JUMP_DURATION = 125;
let timeSinceLastJump = Number.POSITIVE_INFINITY;

export const setupBird = () => {
    setTop(window.innerHeight / 2);
    document.removeEventListener('keydown', handleJump);
    document.addEventListener('keydown', handleJump);
}

export const updateBird = delta => {
    if (timeSinceLastJump < JUMP_DURATION) {
        setTop(getTop() - BIRD_SPEED * delta);
    } else {
        setTop(getTop() + BIRD_SPEED * delta);
    }

    timeSinceLastJump += delta;

    console.log(getTop())
}

export const getBirdRect = () => {
    return birdElem.getBoundingClientRect();
}

const setTop = top => {
    birdElem.style.setProperty('--bird-top', top);
}

const getTop = () => {
    return parseFloat(getComputedStyle(birdElem).getPropertyValue('--bird-top'))
}

const handleJump = e => {
    if (e.code !== 'Space') return;

    timeSinceLastJump = 0;

}