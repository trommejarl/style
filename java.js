console.log("main.js is running...");

//*Knap kopier mørkeblå*//

function copyText(htmlElement)
{
  if (!htmlElement){
    return;
}

let elementText = htmlElement.innerText;

let inputElement = document.createElement('input');
inputElement.setAttribute('value', elementText);
document.body.appendChild(inputElement);
inputElement.select();
document.execCommand('copy');
inputElement.parentNode.removeChild(inputElement);

}

document.querySelector('#copy-text-btn').onclick =
function ()
{
  copyText(document.querySelector('#text-f2'));

  alert("Hex kode kopiret")
}

//*Knap kopier lyseblå*//


document.querySelector('#copy-text-btn-f3').onclick =
function ()
{
  copyText(document.querySelector('#text-f3'));

  alert("Hex kode kopiret")
}


//*Knap kopier lyserød*//


document.querySelector('#copy-text-btn-f4').onclick =
function ()
{
  copyText(document.querySelector('#text-f4'));

  alert("Hex kode kopiret")
}

//*Knap kopier lysegul*//



document.querySelector('#copy-text-btn-f5').onclick =
function ()
{
  copyText(document.querySelector('#text-f5'));

  alert("Hex kode kopiret")
}


//*Knap kopier rød*//



document.querySelector('#copy-text-btn-f6').onclick =
function ()
{
  copyText(document.querySelector('#text-f6'));

  alert("Hex kode kopiret")
}


//*Knap kopier hvid*//


document.querySelector('#copy-text-btn-f7').onclick =
function ()
{
  copyText(document.querySelector('#text-f7'));

  alert("Hex kode kopiret")
}
