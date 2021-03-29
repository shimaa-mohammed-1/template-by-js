
let itemname =document.getElementById("itemName");
let itemsList ;
let  userName=document.getElementById("username")
let emailAddress=document.getElementById("emailaddress")
let phoneNumber=document.getElementById("phonenumber")
let descriptionText=document.getElementById("description")
let alertName=document.getElementById("alert-box");
let alertEmail=document.getElementById("alert-box-2");
let alertPhone=document.getElementById("alert-box-3");


if(localStorage.getItem("allitems") == null)
{
    itemsList=[];
}
else
{
    itemsList= JSON.parse(localStorage.getItem("allitems"));
    displayNewItems();

};

function addNewItem()
{
    let itemFeatures =
    {
        name:itemname.value,
    }
    itemsList.push(itemFeatures);
    localStorage.setItem( "allitems",JSON.stringify(itemsList));
    displayNewItems();
    clr();
    
}


function displayNewItems()
{ 
  var rs="";

    for(let i=0; i < itemsList.length ;i++)
    {
          rs+=
        `<ul >   
            <li class="form-control position-relative">
              ${itemsList[i].name}
              <button class="btn btn-danger position-absolute" onclick="del(${i})">x</button>
            </li>
          </ul>`
    }

    document.getElementById("items-display").innerHTML=rs

}




function del(index)
{
    itemsList.splice(index,1);
    localStorage.setItem( "allitems",JSON.stringify(itemsList));
    displayNewItems();
};



function clr()
{
  itemname.value="";
};


/************************hustlin section*************************************/
let hustlin = document.getElementById("baby-laughing");
let myaudio = document.getElementById("my-audio");


hustlin.addEventListener("mousemove",function(){
    myaudio.play()/*click  first on section to hear  voice????*/ 
    let r= Math.round(Math.random()*255);
    let g= Math.round(Math.random()*255);
    let b= Math.round(Math.random()*255);
  hustlin.style.background  =`rgb(${r},${g},${b})`
  hustlin.style.transition="all   .25s" ;

});








/************************timer section*************************************/


let days =document.getElementById("days");
let hours =document.getElementById("hours");
let minutes =document.getElementById("minutes");
let seconds =document.getElementById("seconds");

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24; 


let forwardCounter = new Date('dec 30, 2021 00:00:00').getTime();

function counterDown()
{    
      let now = new Date().getTime(),

        down = forwardCounter - now;


      days.innerHTML=
      ` <div class="count">
        <h5>${Math.floor(down / (day))}</h5>
        <span>DAYS</span>
        </div>`;


      hours.innerHTML =
      `
        <div class="count">
        <h5>${ Math.floor((down % (day)) / (hour))}</h5>
        <span>HOURS</span>
        </div>`

      minutes.innerHTML =
      `
        <div class="count">
        <h5>${Math.floor((down % (hour)) / (minute))}</h5>
        <span>MINUTES</span>
        </div>`


      seconds.innerHTML = 
        `<div class="count">
                <h5>${ Math.floor((down % (minute)) / second)}</h5>
                <span>SECONDS</span>
              </div>`

}


setInterval(counterDown , second);


/***********************SVG  section*************************************/


let rgb = document.getElementById("rgb");

rgb.addEventListener("mousemove",function(){
    let r= Math.round(Math.random()*255);
    let g= Math.round(Math.random()*255);
    let b= Math.round(Math.random()*255);
  rgb.style.background  =`rgb(${r},${g},${b})`
  rgb.style.transition="all .25s" ;

});



// $("#rgb").mousemove(()=>{
//   setInterval(function(){$("#colorR").css("color","red")},1000)  

// })

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(20, 10, 150, 100);

// ctx.strokeText('R', 50, 90, 140)







/***********************form validation  section*************************************/

userName.addEventListener("blur",function(){
  let regex=/^[A-Z][a-zA-Z ]{3,15}$/

 if(regex.test(userName.value)==true)
  {
    alertName.classList.add("d-none")
    userName.classList.add("is-valid")
    userName.classList.remove("is-invalid");

  }
  else
  {
    alertName.classList.remove("d-none")
    userName.classList.add("is-invalid")
    userName.classList.remove("is-valid");
  }

});


emailAddress.addEventListener("blur",function(){
  let regex=/^[a-z][@][a-zA-Z ]{3,15}$/

 if(regex.test(emailAddress.value)==true)
  {
    alertEmail.classList.add("d-none")
    emailAddress.classList.add("is-valid")
    emailAddress.classList.remove("is-invalid");

  }
  else
  {
    alertEmail.classList.remove("d-none")
    emailAddress.classList.add("is-invalid")
    emailAddress.classList.remove("is-valid");
  }

} );


phoneNumber.addEventListener("blur",function(){
  let regex=/^(002)?(010|011|012|015)[0-9]{8}$/

 if(regex.test(phoneNumber.value)==true)
  {
    alertPhone.classList.add("d-none")
    phoneNumber.classList.add("is-valid")
    phoneNumber.classList.remove("is-invalid");

  }
  else
  {
    alertPhone.classList.remove("d-none")
    phoneNumber.classList.add("is-invalid")
    phoneNumber.classList.remove("is-valid");
  }

} );

/*لما استعملت كلاس   واحد لكل الalert
 مرضييش يشتغل
 اشتغل لما اديت كل واحد مختلفid
 
 */ 










