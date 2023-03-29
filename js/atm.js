
//data base
let cust =[
    {   
        Name: 'Avi Cohen',
        pin: 1234,
        amount: 1000,
    },
    {   
        Name: 'Aviv dan',
        pin: 1111,
        amount: 1000,
    },
    {   
        Name: 'joe Cohen',
        pin: 0000,
        amount: 15000,
    }   
];


let cancel = document.getElementById('cancel');
let clear = document.getElementById('clear');
let enter = document.getElementById('enter');
let i =0
let attempt = 0;
let  attempt1 = 0
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button0 = document.getElementById('button0');
let buttondel = document.getElementById('delete');
let buttonspa = document.getElementById('space');
i = Math.floor((Math.random() * 3));
let receiptpaper = document.getElementById('receiptpaper');

function welcome(){
    
    console.log(cust[i].Name, cust[i].pin)
    let image = document.getElementById('image')    
    card.style.animationName='example';


    content.innerHTML ='<form><h2>WELCOME, ' + cust[i].Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
    keypad();
    enter.onclick = checkPin;
    clear.onclick = welcome;
    cancel.onclick = reload;
    
};

welcome()

//check the pin code 

function checkPin(){
    console.log(number.value, cust[i].pin)
    if (Number(number.value) == Number(cust[i].pin)){
        mainPage();
    } else {
        content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
        attempt++ 
        if (attempt == 3){
            card.style.display = 'none';
            content.innerHTML = '<h2>INVALID PIN . 3 ATTEMPTED CARD IS DISCARDED.</h2>';
            setTimeout(reload, 1000);
        } else {
            setTimeout(welcome, 1000);
        }
    }
};



//main page

function mainPage(){
    content.innerHTML = '<h2>TO PROCEED, SELECT FROM THE OPTIONS BELOW.</h2>'

    option1.textContent = 'DEPOSIT';
    option2.textContent = 'WITHDRAWAL';
    option3.textContent = 'CHECK BALANCE';
    option4.textContent = 'CHANGE PIN';
    option5.textContent = '';
    option6.textContent = 'EXIT';

    opbut1.onclick = deposit;
    opbut2.onclick = withdraw;
    opbut3.onclick = checkBalance;
    opbut4.onclick = changePin;
    opbut6.onclick = exit;
};

//deposit option

function deposit(){

        content.innerHTML = '<form><h2>How much would you like to Deposite?</h2><input id="number" type=number max="9999">'
        keypad();
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';
    
        enter.onclick = function(){
            if((Number(number.value)%50==0)||(Number(number.value)%20==0)){
                let custAmount = Number(cust[i].amount) + Number(number.value)

                cust[i].amount = custAmount
    
                content.innerHTML = '<h2>YOUR NEW BALANCE FOR AMOUNT IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'
    
                setTimeout(mainPage, 1000);
            }
            else{
                content.innerHTML = '<h2>INVALID DEPOSIT</h2>'
                setTimeout(mainPage, 1000); 
            }
            opbut3.onclick = mainPage;
            }
};

function keypad(){

    let keypad = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

    let number = document.getElementById('number'); 

    keypad.forEach(function (key,idx) {
        key.addEventListener('click', function(){
            console.log(Number(keypad[idx].value)); 
            number.value += Number(keypad[idx].value);
        });
    });

};





//withdraw option
function withdraw(){

    keypad();
    option1.textContent = '50';
    option2.textContent = '100';
    option3.textContent = '150';
    option4.textContent = '300';
    option5.textContent = 'other';
    option6.textContent = '';
    opbut1.onclick = withdraw50;
    opbut2.onclick = withdraw100;
    opbut3.onclick = withdraw150;
    opbut4.onclick = withdraw300;
    opbut5.onclick = withdrawOther;

    }

function withdraw50(){
    let custAmount = Number(cust[i].amount) - 50

    cust[i].amount = custAmount

    content.innerHTML = '<h2>YOUR NEW BALANCE FOR AMOUNT IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'

    setTimeout(mainPage, 1000);
    opbut1.onclick = 0;
    opbut2.onclick = 0;
    opbut3.onclick = 0;
    opbut4.onclick = 0;
    opbut5.onclick = 0;
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
}

function withdraw100(){
    let custAmount = Number(cust[i].amount) - 100

    cust[i].amount = custAmount

    content.innerHTML = '<h2>YOUR NEW BALANCE FOR AMOUNT IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'

    setTimeout(mainPage, 1000);
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    opbut1.onclick = 0;
    opbut2.onclick = 0;
    opbut3.onclick = 0;
    opbut4.onclick = 0;
    opbut5.onclick = 0;
}

function withdraw150(){
    let custAmount = Number(cust[i].amount) - 150

    cust[i].amount = custAmount

    content.innerHTML = '<h2>YOUR NEW BALANCE FOR AMOUNT IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'

    setTimeout(mainPage, 1000);
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    opbut1.onclick = 0;
    opbut2.onclick = 0;
    opbut3.onclick = 0;
    opbut4.onclick = 0;
    opbut5.onclick = 0;
}

function withdraw300(){
    let custAmount = Number(cust[i].amount) - 300

    cust[i].amount = custAmount

    content.innerHTML = '<h2>YOUR NEW BALANCE FOR AMOUNT IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'

    setTimeout(mainPage, 1000); 
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    opbut1.onclick = 0;
    opbut2.onclick = 0;
    opbut3.onclick = 0;
    opbut4.onclick = 0;
    opbut5.onclick = 0;
}

function withdrawOther(){
    content.innerHTML ='<form><h2>ENTER WITHRAW</h2><input id="number" type=number max="9999">'
        enter.onclick = function(){
            let custAmount = Number(cust[i].amount) - Number(number.value)

            cust[i].amount = custAmount

            content.innerHTML = '<h2>YOUR NEW BALANCE FOR AMOUNT IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'

            setTimeout(mainPage, 1000);
            option1.textContent = '';
            option2.textContent = '';
            option3.textContent = '';
            option4.textContent = '';
            option5.textContent = '';
            option6.textContent = '';
            opbut1.onclick = 0;
            opbut2.onclick = 0;
            opbut3.onclick = 0;
            opbut4.onclick = 0;
            opbut5.onclick = 0;
        }
}





//check Balance option
function checkBalance(){
    option6.textContent = 'EXIT';
    content.innerHTML = '<h2>YOUR CURRENT BALANCE IS $' + Number(cust[i].amount).toFixed(2) + '</h2>'
    opbut6.onclick = mainPage;
                setTimeout(mainPage, 1000);
            option1.textContent = '';
            option2.textContent = '';
            option3.textContent = '';
            option4.textContent = '';
            option5.textContent = '';
            option6.textContent = '';
            opbut1.onclick = 0;
            opbut2.onclick = 0;
            opbut3.onclick = 0;
            opbut4.onclick = 0;
            opbut5.onclick = 0;
};



function changePin(){
    content.innerHTML = '<form><h2>ENTER YOUR CURRENT PIN</h2><input id="number" type=number max="9999">'

    keypad();

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    enter.onclick = function(){
        if (Number(number.value) == Number(cust[i].pin)){
            content.innerHTML = '<h2>ENTER YOUR NEW PIN</h2><input id="number" type=number max="9999">';
            keypad();
            let nnumber = document.getElementById('number')
            enter.onclick = function(){
                cust[i].pin = nnumber.value
                content.innerHTML = '<h2>YOUR NEW PIN NUMBER IS ' + cust[i].pin + '.<h2>';
                setTimeout(mainPage, 1000);
            }
            cancel.onclick = mainPage;
            opbut6.onclick = mainPage;
        } else {            content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
            attempt1++
            if (attempt1 == 3){
                card.style.display = 'none';
                content.innerHTML = '<h2>INVALID PIN.</h2>';
                setTimeout(reload, 1000);
            } else {
                setTimeout(changePin, 1000);
            }
        }

    }
}


function exit(){
    content.innerHTML = '<form><h2>EXIT.<br> ARE YOU SURE? </h2>';

    option1.textContent = 'YES';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = 'NO';
    opbut1.onclick = function(){
        content.innerHTML = '<h2>PLEASE TAKE YOUR CARD AND RECEIPT</h2>'
        receiptpaper.innerHTML = '<h3 class="rcph">ATM <br>' + cust[i].Name + '</h3><br> <p class="rcp">YOUR CURRENT BALANCE FOR CHECKING: $' + cust[i].amount.toFixed(2) + '<br></p> <h3 class="rcph">THANK YOU!<h3>'
        receiptpaper.style.animationName='example1';
        card.style.animationFillMode = 'backwards'
        setTimeout(reload, 1000);
        
    
    }
    opbut6.onclick = function(){
        mainPage();
    }   
}

function reload(){
    location.assign('./index.html');
};