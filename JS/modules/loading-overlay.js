const bodyElem = document.querySelector('body');

function showLoadingOverlay () {
    bodyElem.innerHTML = `
    <section class="loading-overlay">
        <img src="/assets/logo.svg" alt="logo">
        <h3>For all your timing needs</h3>
    </section>
    `;
}

function hideLoadingOverlay () {
    /* insert main html here*/
}

export {showLoadingOverlay, hideLoadingOverlay};