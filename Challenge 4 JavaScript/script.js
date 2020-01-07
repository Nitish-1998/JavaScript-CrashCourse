let allButton=document.getElementsByTagName('button');
console.log(allButton);

let CopyAllButton=[];
for(let i=0;i<allButton.length;i++)
{
    CopyAllButton.push(allButton[i].classList[1]);
}

console.log(CopyAllButton);

function buttoncolorchange(buttonthingy)
{
    if(buttonthingy.value==='red')
    {
        buttonRed();
    }
    else if(buttonthingy.value==='green')
    {
        buttonGreen();
    }
    else if(buttonthingy.value==='yellow')
    {
        buttonYellow();

    }
    else if(buttonthingy.value==='reset')
    {
        buttonReset();
    }
    else if(buttonthingy.value==='random')
    {
        buttonRandom();
    }
}

function buttonRed()
{
    for(let i=0;i<allButton.length;i++)
    {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');

    }
}

function buttonGreen()
{
    for(let i=0;i<allButton.length;i++)
    {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');

    }
}

function buttonYellow()
{
    for(let i=0;i<allButton.length;i++)
    {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-warning');

    }
}

function buttonReset()
{
    for(let i=0;i<allButton.length;i++)
    {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(CopyAllButton[i]);

    }
}

function buttonRandom()
{
    let choices=['btn-primary','btn-success','btn-danger','btn-warning'];
    for(let i=0;i<allButton.length;i++)
    {
        let randomNo=Math.floor(Math.random()*4);
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(choices[randomNo])

    }
}