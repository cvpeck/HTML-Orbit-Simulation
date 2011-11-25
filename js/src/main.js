(function(){
	window.Orbits = Orbits({
		renderer:{
			earthimg:"./images/earth.png"
		},
		physics:{

		},
		ui:{
			canvas:"CANVAS_BOARD",
			satmass:"SAT_MASS_INPUT",
			satmasslbl:"SAT_MASS_LBL",
			earthmass:"EARTH_MASS_INPUT",
			earthmasslbl:"EARTH_MASS_LBL",
			initx:"INIT_X_INPUT",
			initxlbl:"INIT_X_LBL",
			inity:"INIT_Y_INPUT",
			initylbl:"INIT_Y_LBL",
			defaultsatmass:15,
			defaultearthmass:50,
			defaultinitx: 1,
			defaultinity: 1
		},
		settings:{
			earth: {
				x: 310,
				y: 250,
				r: 10,
				r2: 10*10,
				m:50
			}
		}
	});

	setInterval(function(){
		Renderer.redraw();
		Physics.reCalc();
	}, 25);

	sats.push(new Sat({x:150, y:150, u:1, v:0, m:15}));
	sats.push(new Sat({x:150, y:350, u:1, v:0, m:15}));
	sats.push(new Sat({x:460, y:150, u:-1, v:0, m:15}));
	sats.push(new Sat({x:460, y:350, u:-1, v:0, m:15}));
})();
