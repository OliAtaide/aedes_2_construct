var grupos_x = [], grupos_y = [];

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	// runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

//async function OnBeforeProjectStart(runtime)
export function Start(runtime)
{
	var grupos = runtime.objects.Option.getAllInstances();
	
	for(var i = 0; i < grupos.length; i++){
		var grupo = grupos[i];
		grupos_x[i] = grupo.x;
		grupos_y[i] = grupo.y;
	}
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

export function CountAcertos(runtime){
	var criadouros = runtime.objects.Slot.getAllInstances();
	var acertos = 0;
	
	for (var i = 0; i < criadouros.length; i++){
		var criadouro = criadouros[i];
		
		if(criadouro.instVars.Escolha == criadouro.instVars.Resposta){
			acertos++;
		}
	}
	
	runtime.objects.TextoResultado.getFirstInstance().text = "Você acertou " + acertos + " de 23 criadouros";
	
	var botao;
	
	if(acertos == 23){
		botao = runtime.objects.BotaoRefazer.getFirstInstance();
	}
	else{
		botao = runtime.objects.BotaoTentarNovamente.getFirstInstance();
	}
	
	botao.isVisible = true;
	botao.isEnabled = true;
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
