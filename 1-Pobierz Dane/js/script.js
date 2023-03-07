

let btnpobierzDane = document.getElementById('pobierz_dane');

const getDane = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {
            let dImie = document.getElementById('Imie');
            let dNazwisko = document.getElementById('Nazwisko');
            let dZawod = document.getElementById('Zawod');
            let dFirma = document.getElementById('Firma');

            dImie.innerText = `Imie: ${data.imie}`;
           dNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
           dZawod.innerText = `Zawod: ${data.zawod}`;
            dFirma.innerText = `Firma: ${data.firma}`;

            document.body.appendChild(dImie);
            document.body.appendChild(dNazwisko);
            document.body.appendChild(dZawod);
            document.body.appendChild(dFirma);
            
        })
        .catch(error => {
            console.error(error);
        })

}

btnpobierzDane.addEventListener('click', getDane);





/* let wyswietlaneDane = document.getElementById('dane-programisty')
    
wyswietlaneDane.innerText = `Dane: ${data.body}`;
 document.body.appendChild('dane-programisty'); */
