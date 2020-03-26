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
    //let goodMorningBtn = $("<button>Good Morning!</button");
    $('#instructionOne').before("<button id=goodMorning>Good Morning!</button>");
    
    $('#goodMorning').click(function(){
        alert('Good morning all you amazing programmers!');
    })  
}

//Alerts the information that the user has entered into the input.
function instructionTwo(){
    let userTxtAlertBtn = $('#textSubmit');
    userTxtAlertBtn.click(function(){
        let userTextContent = $('#textBox').val();
        alert(userTextContent);
    });
}

//Creates aDiv and changes the background when the mouse moves inside the div or outside the div.
function instructionThree(){
    let aDiv = $('.hoverDiv');
    aDiv.hover(function(){
        $(this).css({background:'purple'});
    },
    function(){
        $(this).css({background:'blue'});
    })
}

//Creates a paragraph, which can be clicked to give it a random color
function instructionFour(){
    let myParagraph = $('<p id=instructionFourParagraph>This paragraphs text changes to a random color when it is clicked!</p>');
    $('#instructionFour').after(myParagraph);
    myParagraph.click(function(){
         let r = Math.floor(Math.random() * 256);
         let g = Math.floor(Math.random() * 256);
         let b = Math.floor(Math.random() * 256);
         $(this).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
    });  
}

//Creates a button and outputs a name
function instructionFive(){
    let btn = $('<button>Show My Name</button>');
    let aDiv = $('<div></div>');
    aDiv.css({background: 'goldenrod', 'textAlign': 'center'});
    $('#instructionFive').after(btn);
    btn.after(aDiv);
    btn.click(function (){
        let myNameSpan = $('<span>Jonathan</span>');
        aDiv.append(myNameSpan);
    });
}

//Appends a li to the ul and adds the names of some friends to the li. 
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
    $('#friendNamesBtn').click(function(){
        if (btnClickCount < friendNameArray.length) {
            let friendLI = $('<li>' + friendNameArray[btnClickCount] + '</li>');
            $('ul').append(friendLI);
            btnClickCount++;
        }
        else if (btnClickCount >= friendNameArray.length) {
            alert('Sorry, I am all out of friends.');
        }
    });      
}