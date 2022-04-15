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

function pageHeader() {
    return`
        <div>
            <h1>Subscribers</hs>
            <button class="all-btn">All</button>
            <button class="under25-btn">Under 25</button>
         </div>
    `;
};

async function fetchSubscriber() {
    const subscriberData = await fetch(`http://127.0.0.1:9001/subscribers/all`);
    return subscriberData.json();
};


async function loadEvent() {
    const subscribers = await fetchSubscriber();
    const rootElement = document.getElementById('root');
    
    // const allBtn = document.querySelector(".all-btn");
    // const under25Btn = document.querySelector(".under25-btn");

    rootElement.insertAdjacentHTML("beforebegin", pageHeader());
    rootElement.innerHTML = pageContent(subscribers);
};

window.addEventListener("load", loadEvent);