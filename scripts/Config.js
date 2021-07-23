Hooks.on("init", function() {   
    console.log("Trying to register game setting...");
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
});