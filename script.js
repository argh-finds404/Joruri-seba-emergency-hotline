
//? Heart Increase
const heartIcons = document.getElementsByClassName('heart'); 
const heartCount = document.getElementById('heart-count');

for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener('click', function(event) {
    event.preventDefault();

    let count = parseInt(heartCount.innerText) || 0;
    heartCount.innerText = count + 1;
  });
}



//? Call Button
 const callHistoryContainer = document.querySelector("#call-history-container"); 

 const clearHistoryBtn = document.querySelector("#clear-history-btn"); 

 const coinEl = document.getElementById("coins-count");

 document.querySelectorAll(".call-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      let coins = parseInt(coinEl.innerText);

      if (coins < 20) {
        alert("⚠️ Not enough coins to make a call!");
        return;
      }

      // find service info (name & number) from this card
      const card = btn.closest(".card");
      const serviceName = card.querySelector(".srvc-name").textContent.trim();
      const serviceNumber = card.querySelector(".srvc-num").textContent.trim();

      // show alert
      alert(`📞 Calling ${serviceName} Service at ${serviceNumber}...`);

      coins -= 20;
      coinEl.textContent = coins;
    });
  });




//? Copy
const copyNum=document.getElementById('copyCount');
document.querySelectorAll('.copy-btn').forEach((btn)=>{
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    let copyCat=parseInt(copyNum.innerText);

    const cardCopy= btn.closest(".card");
    const serviceCopyNum = cardCopy.querySelector(".srvc-num").textContent.trim();

    alert(`Number is copied: ${serviceCopyNum}`);
    navigator.clipboard.writeText(serviceCopyNum);
    copyCat +=1;
    copyNum.textContent=copyCat;
})
});



//? call history section

function handleToggle(id){
        const forms=document.getElementsByClassName('form')
        document.getElementById(id).style.display="block";

    const card = document.getElementById(id);
    card.style.display = "flex";
    const timeDiv = card.querySelector(".timeNow"); 
    const now = new Date();
    timeDiv.innerText = now.toLocaleTimeString(); 
}



//? call history toggle
document.getElementById('national-emergency').addEventListener('click',()=>{
    handleToggle('emer');
});


document.getElementById('fireCall').addEventListener('click',()=>{
    handleToggle('fire');
});


document.getElementById('police').addEventListener('click',()=>{
    handleToggle('pol');
});


document.getElementById('Ambulance').addEventListener('click',()=>{
    handleToggle('ambul');
});


document.getElementById('womenChild').addEventListener('click',()=>{
    handleToggle('wochild');
});


document.getElementById('corruption').addEventListener('click',()=>{
    handleToggle('corr');
});


document.getElementById('Electricity').addEventListener('click',()=>{
    handleToggle('elec');
});


document.getElementById('Brac').addEventListener('click',()=>{
    handleToggle('brac');
});


document.getElementById('Railway').addEventListener('click',()=>{
    handleToggle('rail');
});


//? clear history btn

document.getElementById('clear-history-btn').addEventListener('click', (e) => {
    const cards = document.querySelectorAll("#call-history-container .form");
    cards.forEach(card => {
        card.style.display = "none"; 
        card.querySelector(".timeNow").innerText = ""; 
    });
});
