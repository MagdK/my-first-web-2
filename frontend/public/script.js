const pageContentHTML = (memories) => {
    return memories.map(memory => {
        // destructuring example from json
        const {occasion, year} = memory
        return (
            `
            <div>
                <p>${occasion}</p>
                <p>${year}</p>
            </div>
            `
        )
    }).join("")
};

fetchMemories = async () => {
    const memoryData = await fetch(`http://127.0.0.1:9003/data`);
    return memoryData.json();
};

const parseJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
};

loadEvent = async () => {
    const memories = await fetchMemories();
    const rootElement = document.getElementById("root");

    rootElement.innerHTML = pageContentHTML(memories);

    /*movies.sort(function(a, b){return a.year - b.year});
//     console.log(movies); */
};

window.addEventListener("load", loadEvent);