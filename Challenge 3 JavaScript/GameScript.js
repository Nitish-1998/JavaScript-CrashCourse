function rpsGame(yourchoice)
{   
    let humanchoice,botchoice;
    
    humanchoice=yourchoice.id;
    console.log(humanchoice); 
    
    botchoice=numtochoice(rantoint());
    console.log(botchoice);

    result=decidewinner(humanchoice,botchoice);
    console.log(result);

    message=finalmessage(result);
    console.log(message);

    rpsfrontend(yourchoice.id,botchoice,message);
}

function rantoint()
{
    return Math.floor(Math.random()*3);
}

function numtochoice(number)
{
    return ['Rock','Paper','Scissor'][number];

}

function decidewinner(yourchoice,computerchoice)
{
    var rpsdatabase =
    {
        'Rock':{'Scissor':1 , 'Rock':0.5, 'Paper':0},
        'Paper':{'Rock':1 , 'Paper':0.5 , 'Scissor':0},
        'Scissor':{'Paper':1 , 'Scissor':0.5 , 'Rock':0},
    };

    var yourscore=rpsdatabase[yourchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourchoice];

    return [yourscore,computerscore];

}

function finalmessage([yourscore,computerscore])
{

    if(yourscore === 0)
    {
        return{'Message':'You Lost!' , 'Color':'red'};
    }
    else if(yourscore === 0.5)
    {
        
        return{'Message':'You Tied' , 'Color':'yellow'};

    }
    else(yourscore === 1) 
    {
        return{'Message': 'You Win' , 'Color':'green'};
    }

}

function rpsfrontend(humanimage,botimage,endmessage)
{
    var imagedatabase=
    {
        'Rock':document.getElementById('Rock').src,
        'Paper':document.getElementById('Paper').src,
        'Scissor':document.getElementById('Scissor').src,
    };

    //Removing the Images:-

    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissor').remove();
    
    let humandiv=document.createElement('div');
    let botdiv=document.createElement('div');
    let messagediv=document.createElement('div');

    humandiv.innerHTML= "<img src='"+ imagedatabase[humanimage] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgb(37, 50,233,1);'>"
    messagediv.innerHTML="<h1 style='color: " + endmessage['Color'] + "; font-size:60px; padding:30px;'>" + endmessage['Message'] +"</h1>"
    botdiv.innerHTML= "<img src='"+ imagedatabase[botimage] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgb(243,38,24,1);'>"
    
    document.getElementById('flex-box-div').append(humandiv);
    document.getElementById('flex-box-div').append(messagediv);
    document.getElementById('flex-box-div').append(botdiv);
}