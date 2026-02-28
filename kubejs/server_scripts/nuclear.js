onEvent('recipes', (event) => {
  event.remove({id: 'mekanism:rotary/water_vapor'})
  event.custom({
    "type":"mekanism:rotary",
    "fluidInput":{
        "fluid":"create:chocolate", 
        "amount":1
    },
    "gasOutput":{
        "gas":"mekanism:fissile_fuel",
        "amount":1
    },
    "gasInput":{
        "gas":"mekanism:fissile_fuel", 
        "amount":1
    },
    "fluidOutput":{
        "fluid":"create:chocolate",
        "amount":1
    }
  })
});