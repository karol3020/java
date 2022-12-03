let str = 'Karol'
console.log(str.length)

let temperature = 22

temperature = temperature +4

console.log(temperature)

let celciuss = 10;
let fahrenheit = celciuss * 1.8 + 32

console.log(fahrenheit)

let subscribed = false
let loggedIn = true

if (subscribed === true ) {
    console.log('show the video')
}

else if (loggedIn === true) {
    console.log('tell the user to upgrade')
}

else {
    console.log('tell user to log into account')
}

let cash = 45
let price = 40
let diffrence = cash - price

if (cash > price) {
    console.log(`you paid extra - heres ${diffrence} dollars change`)
}

else if (cash === price) {
    console.log('you paid the exact amount, hava a nice day')
}

else {
    console.log(`not enought money - you still owe ${diffrence * -1} dollars`)
}

let cash2 = 50
let price2 = 40
let isStoreOpen = false

if (cash >= price || isStoreOpen === true ) {
    console.log('print the receipt')
}

let val = "Karol";

if (val) {
    console.log(!!val)
}

else {
    console.log(!!val)
}

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subscribed2 = false
let loggedIn2 = true

str = subscribed2 || loggedIn2 ? 'show the video' : 'hide the video'
console.log(str);


let cash3 = 50
let price3 = 40
let isStoreOpen2 = true

str = cash3 >= price3 && isStoreOpen2 ? 'give the receipt' : 'do not give recipt'
    console.log(str)



    //Loops //

     for ( let i = 0; i < 100; i = i + 1) {
        console.log(i);
    }

    for (let i = 1; i <= 20; ++i) {
        
        if (i % 3 === 0 && i % 5 === 0){
            console.log(`${i} -> Frontend Simplyfied`)
        }

        else if (i % 3 === 0) {
            console.log(`${i} -> Frontend`)
        }

        else if (i % 5 === 0) {
            console.log(`${i} -> Simplyfied`)
        }

        else (
            console.log(`${i} --> ${i}`)
        )
    }

    const string = "Frontend Simplyfied"

    for (let i = 0; i < 19; ++i ) {
        console.log(string[i])
    }

    //Funtions//

    //Function Definition //
    function welcomePersonToFES (firstName, lastName) {
        console.log(`Welcome to FES, ${firstName} ${lastName}`)
    }

    //Call the function //

    welcomePersonToFES(`Karol`, `Wlodarczyk`)
    

    function sumOfTwoNumbers(num1, num2) {
       return num1 + num2
    }

    console.log(sumOfTwoNumbers(40,20));

   // function convertCelciusToFahrenheit(celsius){
    //    return celsius * 1.8 + 32
    //}
   // console.log(convertCelciusToFahrenheit(0))
   // console.log(convertCelciusToFahrenheit(10))
   // console.log(convertCelciusToFahrenheit(30))

    //Arrow Function !!!!!//

    const convertCelciusToFahrenheit = (celciuss) =>{
    return celciuss * 1.8 + 32
}

    console.log(convertCelciusToFahrenheit(0))


    // Arrays //

   let arr = [1, 4, 9, 16]

let newArray = arr.map(() => {
    console.log()
    return undefined;
})

console.log(newArray)

let arr2 = [0, 10, 20,]

let newArray2 = arr2.map(element => element * 100)
console.log(newArray2)

let dollars = [1, 5, 10, 3]; 
let cents = []

 for (i = 0; i < dollars.length; ++i){
    cents.push(dollars[i] * 100);
}
 console.log(cents)

 //Objects //

 let user = [
    {
        username: "Karol",
        email: "karol@frontendsimplyfied.com",
        password: 'test123',
        subscriptionStatus: "VIP",
        discrodID: "KarolWlodarczyk#00012",
        lessonsCompleted: [0, 1, 2]
    },
    {
        username: "mitri",
        email: "mitri@frontendsimplyfied.com",
        password: 'mitri123',
        subscriptionStatus: "VIP",
        discrodID: "mitri#00012",
        lessonsCompleted: [0, 1]
    },
 ];

 function login(email, password) {
    for (let i = 0; i <user.length; ++i){
        if (user[i].email === email){
            if (user[i].password === password){
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            return;
        }
    }
    console.log('could not find an email that matches')
 }

 login('thisdoesnotexist@frontendsimplyfied.com', 'wrong password')

 function register (user) {
}

    
register({
 username:"karol",
 email: "karol@frontendsimplyfied.com",
 password: "test123",
 subscriptionStatus: "VIP",
 discrodID: "KarolWlodarczyk#00013",
 lessonsCompleted: [0, 1, 2]
});
console.log(user);
user.push(user)

//DOM//

//First way of accesing an element//
console.log(document.querySelector('#title'));

//The second way //
console.log(document.getElementById('title'));

//Change HTML //
document.querySelector('.title').innerHTML += 'Frontend Simplyfied'

//Change CSS//
document.querySelector('.title').style.fontSize = '16px'

function changeTitleToRed( ) {
    document.querySelector(".title").style.color='red'
    console.log('clicked')
}