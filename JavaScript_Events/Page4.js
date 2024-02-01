// Functions to Set, Get, and Check Cookies:

// Set  cookie example here
function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
    document.cookie = cookieValue;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === encodeURIComponent(name)) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return null;
}


function checkCookie(name) {
    return getCookie(name) !== null;
}

// Example usage: Im taking my details
setCookie('username', 'Suman Raj', 24);
console.log('Username cookie:', getCookie('username'));
console.log('Is username cookie set?', checkCookie('username'));
