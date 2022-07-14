Events.run(Trigger.update, () => {
    Groups.weather.each(w => w.weather instanceof RainWeather, w => {
        const amount = w.intensity * 20;
        if(Mathf.chance(w.intensity * 0.95) && !Vars.state.isPaused()){
            const x = Mathf.random(0, Vars.state.map.width);
            const y = Mathf.random(0, Vars.state.map.height);
            const tile = Vars.world.tile(x, y);
            if(tile.block() == Blocks.air) Puddles.deposit(tile, w.weather.liquid, amount);
        }
    });
});
