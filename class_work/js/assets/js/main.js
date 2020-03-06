let form = document.getElementById('currencies');
let count_val = document.getElementById('count');
let conversation = document.getElementById('conversation');
let [from, to] = Array.from(document.getElementsByClassName('currency-list'));


function getCurrencyList() {
    return fetchDataByUrl('http://www.nbrb.by/API/ExRates/Currencies').then(response => response);
}

function getCurrency(code) {
    return fetchDataByUrl('http://www.nbrb.by/api/exrates/rates/' + code + '?parammode=2').then(response => response);
}

let currencies = '';
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

function submitForm(event) {
    event.preventDefault();
    showConversation();
}

async function showConversation() {

    Promise.all([getCurrency(from.value), getCurrency(to.value)]).then((values) => {
        let [cur1, cur2] = values;
        let rateCoef = ((cur1.Cur_OfficialRate/cur1.Cur_Scale) / (cur2.Cur_OfficialRate/cur2.Cur_Scale));
        conversation.innerText =   `${ count_val.value} ${cur1.Cur_Abbreviation} = ${count_val.value * rateCoef} ${cur2.Cur_Abbreviation}`;
    });


    conversation.innerText = "";
}


function fetchDataByUrl(url) {
    return fetch(url, {mode: 'cors'}).then(response => response.json())
}

//
// console.log(form);
form.addEventListener('submit', submitForm);