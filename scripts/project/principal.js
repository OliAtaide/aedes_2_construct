
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	var posicoes = [];
	posicoes[0] = runtime.objects.A1.getFirstInstance();
	
	console.log(posicoes[0]);
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	
}
