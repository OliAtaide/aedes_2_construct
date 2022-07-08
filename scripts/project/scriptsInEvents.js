import * as Principal from "./principal.js";


const scriptsInEvents = {

		async Gameeventos_Event1(runtime, localVars)
		{
			
		},

		async Gameeventos_Event15_Act11(runtime, localVars)
		{
			Principal.Restart(runtime);
		},

		async Gameeventos_Event16_Act9(runtime, localVars)
		{
			Principal.Start(runtime);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

