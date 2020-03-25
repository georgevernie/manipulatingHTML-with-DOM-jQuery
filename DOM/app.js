//Function Calls
instructionOne(); //Creates a button which will tell the programmers good morning when it is clicked.
instructionTwo(); //Alerts the information that the user has entered into the input.
instructionThree(); //Creates aDiv and changes the background when the mouse moves inside the div or outside the div.
instructionFour(); //Creates a paragraph, which can be clicked and to give it a random color
instructionFive(); //Creates a button and outputs a name
instructionSix(); //Appends a li to ul and adds the names of some friends to the li. 

//? Function Declarations:

//Creates a button which will tell the programmers good morning when it is clicked.
function instructionOne(){
    let goodMorningBtn = document.createElement('button');
    let goodMorning = document.createTextNode('Good Morning!');
    
    goodMorningBtn.appendChild(goodMorning);
    document.body.prepend(goodMorningBtn);

    goodMorningBtn.addEventListener('click', function () {
        alert('Good morning all you amazing programmers!');
    });
}

//Alerts the information that the user has entered into the input.
function instructionTwo(){
    let userTxtAlertBtn = document.getElementById('textSubmit');
    userTxtAlertBtn.addEventListener('click', function () {
        let userTextContent = document.getElementById('textBox').value;
        alert(userTextContent);
    });
}

//Creates aDiv and changes the background when the mouse moves inside the div or outside the div.
function instructionThree(){
    let aDiv = document.querySelector('div');
    aDiv.id = 'instructionThreeDiv';
    aDiv.addEventListener('mouseover', function () {
        aDiv.style.background = 'purple';
    });
    aDiv.addEventListener('mouseout', function () {
        aDiv.style.background = 'blue';
    });
}

//Creates a paragraph, which can be clicked and to give it a random color
function instructionFour(){
    let myParagraph = document.createElement('p');
    myParagraph.id = 'instructionFourParagraph';
    let myParagraphText = document.createTextNode('Click me to change my text color!');
    myParagraph.appendChild(myParagraphText);
    document.getElementById('instructionThreeDiv').after(myParagraph);

    myParagraph.addEventListener('click', function () {
        //myParagraph.style.color = 'red'; for the intial part of the instruction.
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        myParagraph.style.color = ('rgb(' + r + ',' + g + ',' + b + ')');
    });
}

//Creates a button and outputs a name
function instructionFive(){
    let btn = document.createElement('button');
    let btnText = document.createTextNode('My Name');
    btn.appendChild(btnText);
    let aDiv = document.createElement('div');
    aDiv.style.background = 'goldenrod';
    aDiv.style.textAlign = 'center';
    document.getElementById('instructionFourParagraph').after(btn);
    btn.after(aDiv);
    btn.addEventListener('click', function () {
        let myName = document.createTextNode('Jonathan');
        let myNameSpan = document.createElement('span');
        myNameSpan.appendChild(myName);
        aDiv.appendChild(myNameSpan);
    });
}

//Appends a li to ul and adds the names of some friends to the li. 
function instructionSix(){
    let btnClickCount = 0; 
    let friendNameArray = 
    [   
        'Kaydence',
        'Karly',
        'Hayden',
        'Fatima',
        'Amelia',
        'Sanaa',
        'Zachary',
        'Darnell',
        'Joy',
        'Paige',
        'Jason',
        'Darryl',
        'Toby',
        'Ronald',
        'Erin'
    ];
    document.getElementById('friendNamesBtn').addEventListener('click',function(){
        if (btnClickCount < friendNameArray.length) {
            let friendLI = document.createElement('li');
            let friendName = document.createTextNode(friendNameArray[btnClickCount]);
            friendLI.appendChild(friendName);
            document.querySelector('ul').appendChild(friendLI);
            btnClickCount++;
        }
        else if (btnClickCount >= friendNameArray.length) {
            alert('Sorry, I am all out of friends.');
        }
    });  
}