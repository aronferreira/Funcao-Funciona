const cont = document.body.innerHTML;

function getData(){
	var track = 1;
	document.body.innerHTML = " ";
	while (track <= 3){
		animal = parseInt(prompt("Qual seu animal? 1. Cachorro | 2. Mamute | 3. Gato"));

		/* if (animal == 1){
        conv = 7;
        idade = parseInt(prompt("Qual a idade do seu Pet?"));
        calcularIdadePet(idade, conv);
    } else if (animal == 2){
        conv = 10;
        idade = parseInt(prompt("Qual a idade do seu Pet?"));
        calcularIdadePet(idade, conv);
    } */

		switch(animal){
        case 1:
            nome = prompt("Qual o nome do seu Pet?");
            idade = parseInt(prompt("Qual a idade do seu Pet?"));
            calcularIdadePet(idade, conv = 7, nome, esp = "cachorro(a)");
            break;
        case 2:
            nome = prompt("Qual o nome do seu Pet?");
            idade = parseInt(prompt("Qual a idade do seu Pet?"));
            calcularIdadePet(idade, conv = 25, nome, esp = "mamute");
            break;
        case 3:
            nome = prompt("Qual o nome do seu Pet?");
            idade = parseInt(prompt("Qual a idade do seu Pet?"));
            calcularIdadePet(idade, conv = 5, nome, esp = "gato(a)");
            break;
    }
    
		track++;
	}

	bButton();
}
function bButton(){
		document.body.innerHTML += "<button type='button' onclick='goBack()'>Voltar</body>";
	}
function calcularIdadePet(idade, conv, nome, esp){
        idade = idade * conv;
        document.write(nome + " tem " + idade + " anos em anos humanos! Um(a) " + esp + " tem uma relação de " + conv + " anos de " + esp + " para cada 1 ano humano.<br>");
    }
function goBack(){
	document.body.innerHTML = cont;
}
function calcularMeuLanche(){
	document.body.innerHTML = " ";
	var tracking = 1;
	while (tracking <= 3){
	var curAge = parseInt(prompt("Qual sua idade?")), lanchesPorDia = parseInt(prompt("Quantos lanches você come diariamente?"));
	calcLanche(curAge, lanchesPorDia);
	tracking++;
}
bButton();
}
function calcLanche(curAge, lanchesPorDia){
	const idadeMax = 80;
	idadeRest = idadeMax - curAge;
	totalSuprimento = (idadeRest * 365) * lanchesPorDia;
	document.write("Você precisará de ", totalSuprimento, " lanches para sobreviver até os ", idadeMax, " anos<br>");
	}
function calcularCircunferencia(raio){
	document.body.innerHTML = " ";
	var circunf = 0, repeat = 1;
	while (repeat <= 3){
		while (raio == 0){
			raio = parseInt(prompt("Qual o valor do raio?"));
		}
	circunf = 2 * Math.PI * raio;
	circunf = circunf.toFixed(2);
	circArea = calcularArea(raio);
	document.write(`A circunferencia é ${circunf} e a área é ${circArea}<br>`);
	raio = 0;
	repeat++;
	}
bButton();
}
function calcularArea(raio){
	var a = 0;
	a = Math.PI * Math.pow(raio, 2);
	a = a.toFixed(2);
	return a;
}
function converterCelsiusFahrenheit(celsius){
	document.body.innerHTML = " ";
	var fahrenheit = (celsius * 1.8) + 32;
	fahrenheit = fahrenheit.toFixed(2);
	document.write(`${celsius} graus Celsius é igual a ${fahrenheit} graus Fahrenheit<br>`);
	bButton();
}
function converterFahrenheit(fahrenheit){
	document.body.innerHTML = " ";
	var celsius = (fahrenheit - 32) / 1.8;
	celsius = celsius.toFixed(2);
	document.write(`${fahrenheit} graus Fahrenheit é igual a ${celsius} graus Celsius<br>`);
	bButton();
	
}
