Hooks.on("init", function() {   
    console.log("Trying to register TargetReacts game settings...");
    game.settings.register("shake", "defaultShakeDelay", {  
        name: "Default Shake Delay",                  
        hint: "Set default delay for hurt shake",               
        scope: "world",                                     
        config: true,                                      
        type: Number,
        range: {
        min: 0,
        max: 5000,
        step: 25,
        },
        default: 1750,                                    
    });
    game.settings.register("shake", "bloodOnHurt", {  
        name: "Blood when hurt?",                  
        hint: "Apply the hurt blood splatter when target loses hp on hit?",               
        scope: "world",                                     
        config: true,                                      
        type: Boolean,
        default: true,                                    
    });
    game.settings.register("shake", "bloodOnDeath", {  
        name: "Blood when death?",                  
        hint: "Apply the death blood splatter when target dies on hit?",               
        scope: "world",                                     
        config: true,                                      
        type: Boolean,
        default: true,                                    
    });
    game.settings.register("shake", "hurtShakeLoops", {  
        name: "Hurt Shake Loops",                  
        hint: "Set how many times to shake when hurt",               
        scope: "world",                                     
        config: true,                                      
        type: Number,
        range: {
        min: 1,
        max: 5,
        step: 1,
        },
        default: 2,                                    
    });
    game.settings.register("shake", "hurtShakeLoopTime", {  
        name: "Hurt Shake Loop Time",                  
        hint: "Set how long the shakes when hurt should take",               
        scope: "world",                                     
        config: true,                                      
        type: Number,
        range: {
        min: 50,
        max: 1000,
        step: 25,
        },
        default: 150,                                    
    });
    game.settings.register("shake", "deathShakeLoops", {  
        name: "Death Shake Loops",                  
        hint: "Set how many times to shake on death",               
        scope: "world",                                     
        config: true,                                      
        type: Number,
        range: {
        min: 1,
        max: 5,
        step: 1,
        },
        default: 4,                                    
    });
    game.settings.register("shake", "deathShakeLoopTime", {  
        name: "Death Shake Loop Time",                  
        hint: "Set how long the shakes on death should take",               
        scope: "world",                                     
        config: true,                                      
        type: Number,
        range: {
        min: 50,
        max: 1000,
        step: 25,
        },
        default: 150,                                    
    });
    game.settings.register("shake", "deathBloodDelay", {  
        name: "Death Blood Effect Delay",                  
        hint: "Set how long to delay the blood splat on death",               
        scope: "world",                                     
        config: true,                                      
        type: Number,
        range: {
        min: 0,
        max: 5000,
        step: 50,
        },
        default: 400,                                    
    });
});