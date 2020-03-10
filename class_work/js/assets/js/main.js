let form = document.getElementById('currencies');
let count_val = document.getElementById('count');
let conversation = document.getElementById('conversation');
let cur_date = document.getElementById('cur_date');
let [from, to] = Array.from(document.getElementsByClassName('currency-list'));
let currencies = '';


function getCurrencyList() {
    return fetchDataByUrl('http://www.nbrb.by/API/ExRates/Currencies').then(response => response);
}

function getCurrency(code, date=null) {
    date = (!!date)?date:(new Date()).toISOString().slice(0,10);
    return fetchDataByUrl('http://www.nbrb.by/api/exrates/rates/' + code + '?parammode=2&onDate='+date+'&Periodicity=1').then(response => response);
}

function submitForm(event) {
    event.preventDefault();
    showConversation();
}

async function showConversation() {
    Promise.all([getCurrency(from.value, cur_date.value), getCurrency(to.value, cur_date.value)]).then((values) => {
        let [cur1, cur2] = values;
        let rateCoef = ((cur1.Cur_OfficialRate/cur1.Cur_Scale) / (cur2.Cur_OfficialRate/cur2.Cur_Scale));
        let sum =count_val.value * rateCoef;
        conversation.innerText =   `${ count_val.value} ${cur1.Cur_Abbreviation} = ${sum.toFixed(2)} ${cur2.Cur_Abbreviation}`;
    }).catch(()=> conversation.innerText = 'error');
}


function fetchDataByUrl(url) {
    return fetch(url, {mode: 'cors'}).then(response => response.json())
}


form.addEventListener('submit', submitForm);

getCurrencyList().then((currencyList) => {
    currencies = currencyList
    currencyList.forEach((element) => {
        [from, to].forEach(select => {
            select.options[select.options.length] = new Option(element.Cur_Abbreviation, element.Cur_Abbreviation);
        })
    });
    [from, to].forEach(select => {
        select.addEventListener('change', () => showConversation())
    });
    currencies = currencyList;
});