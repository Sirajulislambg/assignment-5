   
   const PlayerNameArray=[];


   function inputCalculate(elementId){
    const perPlayer = document.getElementById(elementId).value;
    const playerValue = parseFloat(perPlayer);

    // if(isNaN(playerValue)){
    //   alert('Please enter a Number!!');
    //   return;
    // }

    return playerValue;

   }

   function setValue(elementId,value){

    const totalPer = document.getElementById(elementId);
    totalPer.innerText = value;



   }


   function onlyTextValue(elementIdText){

     const getText = document.getElementById(elementId).innerText;
     const getTextValue = parseFloat(perPlayer);
     return getTextValue;
   }





   function displayOfPlayer(player){


    const playerList = document.getElementById("player-body");
    playerList.innerHTML='';
    for(let i=0; i<player.length;i++){

        

        
        
        const p=document.createElement('p');
        p.innerHTML = `
        <th>${i + 1}</th>
        <td>${player[i].playerName}</td>
        
        `;

        playerList.appendChild(p);

        


   }

   
   //  function calculate() {
        const counter = (document.getElementById("counter").innerText =PlayerNameArray.length);
        const parCounter = parseFloat(counter);

    document.getElementById("cal").addEventListener('click',function(){
        // const totalPer = document.getElementById("total-per-player");
        // const perPlayer = document.getElementById("per-player").value;
        // const playerValue = parseFloat(perPlayer);

        // if(isNaN()!==0){

           const value = inputCalculate("per-player");

          

           const totalCost = parCounter * value;

          //  if(isNaN(totalCost)){
          //   alert("Please enter a correct number");
          //   return;
          //  }
           setValue("total-per-player", totalCost);
        // }
        // else{
        //   console.log("please enter something");
        // }
      
      

        // totalPer.innerText = totalCost;

    });

        
    //  }

   


    document.getElementById("final").addEventListener("click", function() {

      // if(isNaN()!==0){

        const mangerCost = inputCalculate("manger-cost");

        const coachingCost = inputCalculate("coch-cost");

        const value = inputCalculate("per-player");

        // if (isNaN(value)) {
        //   alert("Please enter a Number!!");
        //   return;
        // }
        const previousTotal = value * parCounter;

        const CostOfTotal = mangerCost + coachingCost + previousTotal;
        //  console.log(mangerCost);
        //  console.log(CostOfTotal);
        //  console.log(coachingCost);

        const finalCoast = setValue("final-cost-text", CostOfTotal);

      // }
      // else{
      //   console.log("please enter a value");
      // }
         

     
    });


  

}
function selectPlayer(player) {

    const PlayerName = player.parentNode.parentNode.children[0].innerText;
    // player.setAttribute("disabled", "true");
    // console.log(player.parentNode.parentNode.children[0]);
    // console.log(player);
    
  

    const playerObj={
        playerName:PlayerName,
    }

    if(PlayerNameArray.length<5){

      PlayerNameArray.push(playerObj);
      player.setAttribute("disabled", "true");

    }
    else{
      alert("you can not add more  than 5 player !!!!");
    }
    // PlayerNameArray.push(playerObj);

    const counter = document.getElementById("counter").innerText=PlayerNameArray.length;
    // console.log(PlayerNameArray);

    displayOfPlayer(PlayerNameArray);



}