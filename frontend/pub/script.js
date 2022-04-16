const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json();
};

const pageContent = (name, occupation) => {
    return
    `
        <section>
            <div>
                <h2>${name}</h2>
                <p>${occupation}</p>
            </div>
        </section>
    `;
};

async function loadEvent() {
    const rootElement = document.getElementById('root');
    
};

window.addEventListener("load", loadEvent);