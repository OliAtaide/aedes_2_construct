import * as Principal from "./principal.js";


const scriptsInEvents = {

		async Gameeventos_Event1(runtime, localVars)
		{
			
		},

		async Gameeventos_Event10_Act6(runtime, localVars)
		{
			Principal.CountAcertos(runtime);
		},

		async Gameeventos_Event13_Act11(runtime, localVars)
		{
			Principal.Restart(runtime);
		},

		async Gameeventos_Event14_Act9(runtime, localVars)
		{
			Principal.Start(runtime);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

