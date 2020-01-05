//Challenge 1
function ageindays()
{
    let year=prompt("Enter Your Birth Year:-");
    let ageindayss=(2019-year)*365;
    var h1=document.createElement('h1');
    let textanswer=document.createTextNode('You Are '+ ageindayss +' Days Old.');
    h1.setAttribute('id','ageindayss');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset()
{
    document.getElementById('ageindayss').remove();

}