const pageContentHTML = (memories) => {
    return memories.map(memory => {
        return (
            `
            <div>
                <p>${memory.memory}</p>
                <p>${memory.occasion}</p>
                <p>${memory.year}</p>
            </div>
            `
        )
    }).join("")
}

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
};

window.addEventListener("load", loadEvent);