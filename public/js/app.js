async function getForecast (address) {

    document.querySelector('.weatherInfo').innerHTML = '<p>Loading...</p>';

    const response = await fetch(`http://192.168.68.113:3000/weather?address=${address}`);

    const data = await response.json();

    if(data.error) {
        document.querySelector('.weatherInfo').innerHTML = `<p class='error'>${data.error}</p>`;
    } else {

        const markup = `

        <p>The weather for ${data.location} is: ${data.forecast}</p>
        
        `
        document.querySelector('.weatherInfo').innerHTML = markup;

    }


}


const weatherform = document.querySelector('form');
const search = document.querySelector('#address');

weatherform.addEventListener('submit', (e) => {

    e.preventDefault()

    getForecast(search.value);


})


