const main = () => {
    const contractAddress = '0x815fbc898931b27a88d306b8588e83703075e7bf';
    const tokeId = '1';
    

    const fetchData = async () => {
        const responseObj = await fetch(`https://deep-index.moralis.io/api/v2/nft/${contractAddress}/${tokeId}/owners?chain=rinkeby&format=decimal`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'iSzqU0Vl1JfFFVYPVJVZYyfQkNKQ2DRAGLAB2wolFha01WrUweMOvQm4EI0oHUOg'
            },
        });

        const response = await responseObj.json();
        const totalOwners = response?.total;

        let gifSrc;
        switch(totalOwners) {
            case 1: gifSrc = './assets/gifs/1.gif'; break;
            case 2: gifSrc = './assets/gifs/2.gif'; break;
            case 3: gifSrc = './assets/gifs/3.gif'; break;
            case 4: gifSrc = './assets/gifs/4.gif'; break;
            case 5: gifSrc = './assets/gifs/5.gif'; break;
            default:  gifSrc = ''; break;
        }

        const loaderElement = document.querySelector('.preloader');
        loaderElement.style.display = "none";

        const imgElement = document.querySelector('.gif');
        imgElement.src = gifSrc;
        imgElement.style.display = "block";
    }

    fetchData();
}

main();