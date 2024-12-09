//Set cookie
export function setCookie(key, value) {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    let espires = "expires" + date.toUTCString();
    document.cookie = `${key} = ${value}; ${espires}; path=/`
}

//Get cookie
export function getCookie(key) {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(s => s.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}