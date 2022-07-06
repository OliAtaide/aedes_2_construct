var grupos_x = [], grupos_y = [];

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	var grupos = runtime.objects.Option.getAllInstances();
	
	for(var i = 0; i < grupos.length; i++){
		var grupo = grupos[i];
		grupos_x[i] = grupo.x;
		grupos_y[i] = grupo.y;
	}
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

export function Restart(runtime){
	var grupos = runtime.objects.Option.getAllInstances();
	var criadouros = runtime.objects.Slot.getAllInstances();

	for(var i = 0; i < criadouros.length; i++){
		var criadouro = criadouros[i];

		if(criadouro.instVars.Escolha != criadouro.instVars.Resposta){
			criadouro.instVars.Respondido = false;
			runtime.globalVars.Respostas--;

			for(var j = 0; j < grupos.length; j++){
				var grupo = grupos[j];
				
				if(grupo.x == criadouro.x && grupo.y == criadouro.y){
					grupo.x = grupos_x[j];
					grupo.y = grupos_y[j];
				}
			}
		}
	}
}

function Tick(runtime)
{
	
}
