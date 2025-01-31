const server = "https://api.artifactsmmo.com";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imdpbm8uZ3JhY2lhQGhvdG1haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.MxU7sHtO0XJIudXPrMsRIrX902K1p3bObD2SOyPI8xo";
const character = "Gino";

async function startCooldownTimer(data) {
    let remainingSeconds = data.cooldown.remaining_seconds;

  
    document.querySelector(".cooldown-timer").innerText = `Cooldown: ${remainingSeconds}s`;

 
    const timer = setInterval(() => {
        remainingSeconds--; 
        document.querySelector(".cooldown-timer").innerText = `Cooldown: ${remainingSeconds}s`;

        
        if (remainingSeconds <= 0) {
            clearInterval(timer);
            document.querySelector(".cooldown-timer").innerText = "Cooldown: ";
        }
    }, 1000); 
}

async function getCharacterinfo() {
    const url = 'https://api.artifactsmmo.com/my/characters';
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    };
    
    try {
      const response = await fetch(url, options);
      const character = await response.json();
      console.log(character)
      document.querySelector(".position").innerText = `Current position: ${character.data[0].x}, ${character.data[0].y}`
      document.querySelector(".character-name").innerText = `${character.data[0].name}`
      return character;
    } catch (error) {
      console.error(error);
}



}

getCharacterinfo();



async function currentPositionCheck() {

    const url = 'https://api.artifactsmmo.com/my/characters';
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    };
    
    try {
      const response = await fetch(url, options);

      const currentPosition = await response.json();
      console.log(currentPosition);
      return currentPosition;
    } catch (error) {
      console.error(error);
}
}



async function teleportToSpawn() {

          
      const url = server + '/my/' + character +'/action/move';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
            x: 0,
            y: 0
      })
    };
      
      try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        console.log(data);
    
        document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
        startCooldownTimer(data);
    
      } catch (error) {
        console.log(error);
      }

 

}

async function teleportToLocation(xCords, yCords) {

          
  const url = server + '/my/' + character +'/action/move';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
        x: xCords,
        y: yCords
  })
};
  
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);

    document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
    startCooldownTimer(data);

  } catch (error) {
    console.log(error);
  }



}

async function teleportToBank() {

          
    const url = server + '/my/' + character +'/action/move';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
          x: 4,
          y: 1
    })
  };
    
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data);
  
      document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
      startCooldownTimer(data);
  
    } catch (error) {
      console.log(error);
    }

}

async function teleportToSlimes() {

          
    const url = server + '/my/' + character +'/action/move';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
          x: 0,
          y: -1
    })
  };
    
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data);
  
      document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
      startCooldownTimer(data);
  
    } catch (error) {
      console.log(error);
    }



}

async function teleportToCopper() {

          
    const url = server + '/my/' + character +'/action/move';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
          x: 2,
          y: 0
    })
  };
    
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data);
  
      document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
      startCooldownTimer(data);
  
    } catch (error) {
      console.log(error);
    }



}

async function teleportToTrees() {

          
    const url = server + '/my/' + character +'/action/move';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
          x: 2,
          y: 6
    })
  };
    
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data);
  
      document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
      startCooldownTimer(data);
  
    } catch (error) {
      console.log(error);
    }



}

  
async function moveLeft() {

    const currentPosition = await currentPositionCheck();

      
  const url = server + '/my/' + character +'/action/move';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
        x: currentPosition.data[0].x - 1,
        y: currentPosition.data[0].y
  })
};
  
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);

    document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
    startCooldownTimer(data);

  } catch (error) {
    console.log(error);
  }
  }

  

  async function moveUp() {

    const currentPosition = await currentPositionCheck();

      
  const url = server + '/my/' + character +'/action/move';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
        x: currentPosition.data[0].x,
        y: currentPosition.data[0].y - 1
  })
};
  
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);

    document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
    startCooldownTimer(data);

  } catch (error) {
    console.log(error);
  }

  }

  async function moveDown() {

    const currentPosition = await currentPositionCheck();

      
  const url = server + '/my/' + character +'/action/move';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
        x: currentPosition.data[0].x,
        y: currentPosition.data[0].y + 1
  })
};
  
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);

    document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
    startCooldownTimer(data);

  } catch (error) {
    console.log(error);
  }

  }

  async function moveright() {

    const currentPosition = await currentPositionCheck();

      
  const url = server + '/my/' + character +'/action/move';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
        x: currentPosition.data[0].x + 1,
        y: currentPosition.data[0].y
  })
};
  
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);

    document.querySelector(".position").innerText = `Current position: ${data.destination.x}, ${data.destination.y} (${data.destination.name})`;
    startCooldownTimer(data);

  } catch (error) {
    console.log(error);
  }

  }

  async function gather() {

    const url = server + '/my/' + character +'/action/gathering';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: undefined
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    
      startCooldownTimer(data.data);
    } catch (error) {
      console.error(error);
      }
    }


async function fight() {

const url = server + '/my/' + character +'/action/fight';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token
  },
  body: undefined
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  startCooldownTimer(data.data);
} catch (error) {
  console.error(error);
  }
}

async function rest() {
const url = server + '/my/' + character +'/action/rest';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token
  },
  body: undefined
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  startCooldownTimer(data.data);
} catch (error) {
  console.error(error);
}
}


// async function checkAllTaskRewards() {

//   const url = 'https://api.artifactsmmo.com/tasks/rewards?size=100';
// const options = {method: 'GET', headers: {Accept: 'application/json'}};

// try {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

// }

// checkAllTaskRewards()



document.querySelector(".up").addEventListener("click", moveUp)
document.querySelector(".down").addEventListener("click", moveDown);
document.querySelector(".left").addEventListener("click", moveLeft);
document.querySelector(".right").addEventListener("click", moveright);
document.querySelector(".spawn-tp").addEventListener("click", teleportToSpawn);
document.querySelector(".bank-tp").addEventListener("click", teleportToBank);
document.querySelector(".slimes-tp").addEventListener("click", teleportToSlimes);
document.querySelector(".copper-tp").addEventListener("click", teleportToCopper);
document.querySelector(".trees-tp").addEventListener("click", teleportToTrees);
document.querySelector(".gather").addEventListener("click", gather);
document.querySelector(".fight").addEventListener("click", fight);
document.querySelector(".rest").addEventListener("click", rest);



///////////////////////////////////////////////////////////////////CRAFTANDBANK///////////////////////////////////////////////////////////////////////////////////////////////


async function autoCraftAndBank() {

  while (true) {
    try {
        
        const craftingSpotXCord = -2
        const craftingSpotYCord = -3

        const resource = "ash_wood"
        const resourceQuantity = 136
        const itemToCraft = "ash_plank"
        const itemToCraftQuantity = 17

        console.log("Returning to crafting spot...");
        await teleportToLocation(craftingSpotXCord, craftingSpotYCord); // Teleport back to crafting spot
        console.log("Waiting for move cooldown...");
        await new Promise(resolve => setTimeout(resolve, 50000)); 
        

        await craft(itemToCraft, itemToCraftQuantity);
        console.log("Crafting");
        await new Promise(resolve => setTimeout(resolve, 85000)); 
        console.log(`Crafted x${itemToCraftQuantity} ${itemToCraft}`);
        

        console.log("Teleporting to bank...");
        await teleportToBank(); // Teleport to bank
        console.log("Waiting for move cooldown...");
        await new Promise(resolve => setTimeout(resolve, 50000)); 


        console.log("Depositing items...");
        await depositItem(itemToCraft, itemToCraftQuantity); // Deposit items
        console.log("Waiting for bank cooldown...");
        await new Promise(resolve => setTimeout(resolve, 3000)); 

        console.log("Withdrawing items...");
        await withdrawItem(resource, resourceQuantity); // Withdraw items
        console.log("Waiting for bank cooldown...");
        await new Promise(resolve => setTimeout(resolve, 3000)); 

} catch(error) {
  console.error("Error in auto-crafting loop:", error);
  break; //Exit loop
}
  }
}


// autoCraftAndBank()




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////COPPER//////////////////////////////////////////////////////////////////////////////////////////////////////

async function autoGatherAndBankOre() {
    while (true) {
        try {

            console.log("Gathering...");
            await gather(); // Gather resources
            console.log("Waiting for gather cooldown...");
            await new Promise(resolve => setTimeout(resolve, 23000)); 

            console.log("Checking inventory...");
            const currentPosition = await currentPositionCheck(); // Check inventory using existing function
            const inventory = currentPosition.data[0].inventory;
            const inventoryMaxItems = currentPosition.data[0].inventory_max_items - 20

            const Ore = inventory.find(item => item.code === "copper_ore");
            const oreQuantity = Ore.quantity

            console.log(`Inventory status: ${oreQuantity}/${inventoryMaxItems}`)

            if (oreQuantity >= inventoryMaxItems) {
                console.log(`Inventory almost full of ore. Banking items... ${oreQuantity}/${inventoryMaxItems}`);

                console.log("Teleporting to bank...");
                await teleportToBank(); // Teleport to bank
                console.log("Waiting for move cooldown...");
                await new Promise(resolve => setTimeout(resolve, 15000)); 

                console.log("Depositing items...");
                await depositItem(Ore.code, oreQuantity); // Deposit items
                console.log("Waiting for bank cooldown...");
                await new Promise(resolve => setTimeout(resolve, 3000)); 

                console.log("Returning to mining spot...");
                await teleportToCopper(); // Teleport back to gather spot
                console.log("Waiting for move cooldown...");
                await new Promise(resolve => setTimeout(resolve, 15000)); 
            } 
        } catch (error) {
            console.error("Error in auto-gather loop:", error);
            break; // Exit loop 
        }
    }
}

// autoGatherAndBankOre();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////TREES//////////////////////////////////////////////////////////////////////////////////////////////////////

async function autoGatherAndBankTrees() {
    while (true) {
        try {
            console.log("Gathering...");
            await gather(); // Gather resources
            console.log("Waiting for gather cooldown...");
            await new Promise(resolve => setTimeout(resolve, 23000)); 

            console.log("Checking inventory...");
            const currentPosition = await currentPositionCheck(); // Check inventory using existing function
            const inventory = currentPosition.data[0].inventory;
            const inventoryMaxItems = currentPosition.data[0].inventory_max_items - 5

            const wood = inventory.find(item => item.code === "ash_wood")
            const woodQuantity = wood.quantity;

            const sap = inventory.find(item => item.code === "sap");
            const sapQuantity = sap.quantity

            // const apple = inventory.find(item => item.code === "apple");
            // const appleQuantity = apple.quantity

            console.log(`Inventory status: ${woodQuantity + sapQuantity}/${inventoryMaxItems}`)
            console.log(`You currently have: x${woodQuantity} wood, x${sapQuantity} sap.`)
            

            if (woodQuantity + sapQuantity >= inventoryMaxItems) {
                console.log("Inventory full. Banking items...");

                console.log("Teleporting to bank...");
                await teleportToBank(); // Teleport to bank
                console.log("Waiting for move cooldown...");
                await new Promise(resolve => setTimeout(resolve, 10000)); 

                console.log("Depositing wood...");
                await depositItem(wood.code, woodQuantity - 1); // Deposit all but 1 wood.
                console.log("Waiting for bank cooldown...");
                await new Promise(resolve => setTimeout(resolve, 3000)); 

                console.log("Depositing sap...")
                await depositItem(sap.code, sapQuantity - 1) // Deposit all but 1 sap.
                console.log("Waiting for bank cooldown...")
                await new Promise(resolve => setTimeout(resolve, 3000))

                // console.log("Depositing apples...")
                // await depositItem(apple.code, appleQuantity - 1) // Deposit all but 1 apple.
                // console.log("Waiting for bank cooldown...")
                // await new Promise(resolve => setTimeout(resolve, 3000))
                

                console.log("Returning to gather spot...");
                await teleportToLocation(6, 1); // Teleport back to gather spot
                console.log("Waiting for move cooldown...");
                await new Promise(resolve => setTimeout(resolve, 10000)); 
            } else {
                console.log("Inventory not full. Continuing to gather...");
            }
        } catch (error) {
            console.error("Error in auto-gather loop:", error);
            break; // Exit loop 
        }
    }
} 

// autoGatherAndBankTrees();



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function depositItem(code, quantity) {
    const url = `${server}/my/${character}/action/bank/deposit`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({ code, quantity })
    };

    try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        console.log(`Deposited items: ${quantity}x ${code}`);
        return data;
    } catch (error) {
        console.error("Failed to deposit items:", error);
        throw error;
    }
}

async function withdrawItem(code, quantity) {
  const url = `${server}/my/${character}/action/bank/withdraw`;
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ code, quantity })
  };

  try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(`Withdrew items: ${quantity}x ${code}`);
      return data;
  } catch (error) {
      console.error("Failed to withdraw items:", error);
      throw error;
  }
}

async function craft(code, quantity) {

  const url = `${server}/my/${character}/action/crafting`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({ code, quantity })
  };
  
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
}

}





function autoGather() {
    setInterval(async () => {
       await gather();
       console.log("Gathering...")
    }, 24000);
 }

// autoGather();

async function autoCombat() {
    while (true) {
      try {
      const currentPosition = await currentPositionCheck(); // Check inventory using existing function
      const inventory = currentPosition.data[0].inventory;
      const inventoryMaxItems = currentPosition.data[0].inventory_max_items - 5


/////////

      // const rawChicken = inventory.find(item => item.code === "raw_chicken")
      // const rawChickenQuantity = rawChicken.quantity;

      // const egg = inventory.find(item => item.code === "egg")
      // const eggQuantity = egg.quantity;

      // const feather = inventory.find(item => item.code === "feather")
      // const featherQuantity = feather.quantity;

//////////

      // const redSlimeball = inventory.find(item => item.code === "red_slimeball")
      // const redSlimeballQuantity = redSlimeball.quantity;

      // const apple = inventory.find(item => item.code === "apple")
      // const appleQuantity = apple.quantity;

//////////

      // const rawBeef = inventory.find(item => item.code === "raw_beef")
      // const rawBeefQuantity = rawBeef.quantity;

      // const milkBucket = inventory.find(item => item.code === "milk_bucket")
      // const milkBucketQuantity = milkBucket.quantity;

      // const cowhide = inventory.find(item => item.code === "cowhide")
      // const cowhideQuantity = cowhide.quantity;

//////////

      const rawWolfMeat = inventory.find(item => item.code === "raw_wolf_meat")
      const rawWolfMeatQuantity = rawWolfMeat.quantity;

      const wolfBone = inventory.find(item => item.code === "wolf_bone")
      const wolfBoneQuantity = wolfBone.quantity;

      const wolfHair = inventory.find(item => item.code === "wolf_hair")
      const wolfHairQuantity = wolfHair.quantity;

//////////

      const combatSpotXCord = -2
      const combatSpotYCord = 1

      const fightTime = 29000
      const restTime = 45000
      const moveTime = 30000

      const itemDropOneQuantity = rawWolfMeatQuantity 
      const itemDropTwoQuantity = wolfBoneQuantity
      const itemDropThreeQuantity = wolfHairQuantity
      const ItemDropsQuantity = itemDropOneQuantity + itemDropTwoQuantity + itemDropThreeQuantity
      
       
        console.log("Fighting...");
        await fight();
        console.log("Fight complete. Waiting for cooldown...");

        await new Promise(resolve => setTimeout(resolve, fightTime));

       
        console.log("Resting...");
        await rest(); 
        console.log("Rest complete. Waiting for cooldown...");
        await new Promise(resolve => setTimeout(resolve, restTime));

        console.log(`Checking if inventory is full. ${ItemDropsQuantity}/${inventoryMaxItems}`)

        if(ItemDropsQuantity >= inventoryMaxItems) {

          console.log("Inventory full. Teleporting to bank...");
          await teleportToBank(); // Teleport to bank
          console.log("Waiting for move cooldown...");
          await new Promise(resolve => setTimeout(resolve, moveTime)); 

          console.log(`Banking x${ItemDropsQuantity} items...`)
          await depositItem(rawWolfMeat.code, itemDropOneQuantity - 1)
          await new Promise(resolve => setTimeout(resolve, 3000))

          await depositItem(wolfBone.code, itemDropTwoQuantity - 1)
          await new Promise(resolve => setTimeout(resolve, 3000))

          await depositItem(wolfHair.code, itemDropThreeQuantity - 1)
          await new Promise(resolve => setTimeout(resolve, 3000))

          console.log("Returning to combat spot...");
          await teleportToLocation(combatSpotXCord, combatSpotYCord); // Teleport back to combat spot
          console.log("Waiting for move cooldown...");
          await new Promise(resolve => setTimeout(resolve, moveTime)); 
        }
      } catch (error) {
        console.error("Error in auto-combat loop:", error);
        break;
    }



    }
}

// autoCombat();



async function simpleAutoCombat() {
  while (true) {
    try {

  const fightTime = 45000
  const restTime = 72000


  console.log("Fighting...");
  await fight();
  console.log("Fight complete. Waiting for cooldown...");

  await new Promise(resolve => setTimeout(resolve, fightTime));

  console.log("Resting...");
  await rest(); 
  console.log("Rest complete. Waiting for cooldown...");
  await new Promise(resolve => setTimeout(resolve, restTime));
    } catch (error) {
      console.error("Error in auto-combat loop:", error);
      break;
    }
  }


}

// simpleAutoCombat()