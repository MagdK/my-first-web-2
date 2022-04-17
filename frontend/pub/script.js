function pageContent(artists) {
    return artists.reduce((myStr, {title, photographer, dateCreated}) => {
        return myStr.concat(
            `
            <div>
                <h2>${title}</h2>
                <p>${photographer}</p>
                <p>${dateCreated}</p>
            </div>
            `
        )
    }, "")
};

const fetchJSON = async (url) => {
    const response = await fetch(url)
    return response.json();
};

async function fetchData() {
    return await fetchJSON("http://127.0.0.1:9001/data/data.json")
};

async function loadEvent() {
    const rootElement = document.getElementById('root');
    const artists = await fetchData();
    rootElement.insertAdjacentHTML("beforeend", pageContent(artists));
    
};

window.addEventListener("load", loadEvent);