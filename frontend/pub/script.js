function pageContent(subscribers) {
    let myStr = "";

    for(let subscriber of subscribers) {
        myStr = myStr.concat(
            `
            <div>
                <h2>${subscriber.name}</h2>
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
            <h1>Subscribers</h1>
            <button class="all-btn">All</button>
            <button class="under25-btn">Under 25</button>
            <button class="archived-btn">Archived</button>
         </div>
    `;
};

async function fetchSubscriber(filter) {
    const subscriberData = await fetch(`http://127.0.0.1:9001/subscribers/${filter}`);
    return subscriberData.json();
};


async function loadEvent() {
    const rootElement = document.getElementById('root');
    rootElement.insertAdjacentHTML("beforebegin", pageHeader());


    const allBtn = document.querySelector(".all-btn");
    allBtn.addEventListener("click", async e => {
        console.log("All")
        const subscribers = await fetchSubscriber('all');
        rootElement.innerHTML = pageContent(subscribers);
    });

    const under25Btn = document.querySelector(".under25-btn");
    under25Btn.addEventListener("click", async e => {
        console.log("Under 25");
        const subscribers = await fetchSubscriber('under25');
        rootElement.innerHTML = pageContent(subscribers);
    });

    const archivedBtn = document.querySelector(".archived-btn");
    archivedBtn.addEventListener("click", async e => {
        console.log("Archived");
        const subscribers = await fetchSubscriber('archived');
        rootElement.innerHTML = pageContent(subscribers);
    });
    
};

window.addEventListener("load", loadEvent);