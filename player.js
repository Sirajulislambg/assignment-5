   
   const PlayerNameArray=[];


   function inputCalculate(elementId){
    const perPlayer = document.getElementById(elementId).value;
    const playerValue = parseFloat(perPlayer);

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
        const counter = (document.getElementById("counter").innerText =
          PlayerNameArray.length);
        const parCounter = parseFloat(counter);

    document.getElementById("cal").addEventListener('click',function(){
        // const totalPer = document.getElementById("total-per-player");
        // const perPlayer = document.getElementById("per-player").value;
        // const playerValue = parseFloat(perPlayer);
       const value= inputCalculate("per-player");

       
       const totalCost = parCounter * value;
       setValue("total-per-player",totalCost);
      

        // totalPer.innerText = totalCost;

    });

        
    //  }

   


    document.getElementById("final").addEventListener("click", function() {
         const mangerCost= inputCalculate("manger-cost");

         const coachingCost = inputCalculate("coch-cost");

         const value = inputCalculate("per-player");
        const previousTotal =value*parCounter;

         const CostOfTotal=mangerCost+coachingCost+previousTotal;
        //  console.log(mangerCost);
        //  console.log(CostOfTotal);
        //  console.log(coachingCost);

          const finalCoast = setValue("final-cost-text",CostOfTotal);

     
    });


  

}
function selectPlayer(player) {

    const PlayerName = player.parentNode.parentNode.children[0].innerText;
  

    const playerObj={
        playerName:PlayerName,
    }


    PlayerNameArray.push(playerObj);

    const counter = document.getElementById("counter").innerText=PlayerNameArray.length;
    console.log(PlayerNameArray);

    displayOfPlayer(PlayerNameArray);



}