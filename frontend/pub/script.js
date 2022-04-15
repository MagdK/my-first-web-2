function pageContent(subscribers) {
    let myStr = "";

    for(let subscriber of subscribers) {
        myStr = myStr.concat(
            `
            <div>
                <h1>${subscriber.name}</h1>
                <p>${subscriber.occupation}</p>
                <p>${subscriber.age}</p>
            </div>
            `
        )
    }
    return myStr;
};

async function fetchSubscriber() {
    const subscriberData = await fetch(`http://127.0.0.1:9001/api/subscribers.json`);
    return subscriberData.json();
};

async function loadEvent() {
    const subscribers = await fetchSubscriber();

    const rootElement = document.getElementById('root');
    rootElement.innerHTML = pageContent(subscribers.cards);
};

window.addEventListener("load", loadEvent);