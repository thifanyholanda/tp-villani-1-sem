function CalcularRaizesTP01() {
	var inputA = document.all['A'];
	var inputB = document.all['B'];
	var inputC = document.all['C'];
	var pResposta = document.all['Resposta'];
	var A = Number(inputA.value);
	var B = Number(inputB.value);
	var C = Number(inputC.value);
	var delta = delta();
	if (delta < 0)
		pResposta.innerHTML = 'Nenhuma raiz real!'
	else
		var raiz1 = (- B + Math.sqrt(delta)) / (2 * A);
		var raiz2 = (- B - Math.sqrt(delta)) / (2 * A);
		pResposta.innerHTML = 'Resposta é X1 = ' + raiz1 + ' e X2 = ' + raiz2;

	function delta() {
		var delta = (B * B) - (4 * A * C);
		return delta;	}
}
function calcularMediaTP01() {
	var inputTP = document.all['TP'];
	var inputAV = document.all['AV'];
	var inputEF = document.all['EF'];
	var pResposta = document.all['Resposta'];
	var TP = Number(inputTP.value);
	var AV = Number(inputAV.value);
	var EF = Number(inputEF.value);
	var media = (TP * 2) + (AV * 3) + (EF * 5) / 2 + 3 + 5;

	if (media = 0.0 || media <= 4.9)
		pResposta.innerHTML = 'Média Ponderada: ' + media + 'Conceito E';
	else if (media <= 5.9)
		pResposta.innerHTML = 'Média Ponderada: ' + media + 'Conceito D';
	else if (media <= 6.9)
		pResposta.innerHTML = 'Média Ponderada: ' + media + 'Conceito C';
	else if (media <= 7.9) 
		pResposta.innerHTML = 'Média Ponderada: ' + media + 'Conceito B';
	else if (media <= 10.0)
		pResposta.innerHTML = 'Média Ponderada: ' + media + 'Conceito A';
}
function calcularRaizTP01() {
	var inputValorA = document.all['ValorA'];
	var pResposta = document.all['Resposta'];
	var ValorA = Number(inputA.value);
	var raiz = Math.sqrt(ValorA);
	pResposta.innerHTML = 'Resultado: ' + raiz;
}
function calcularSomaTP01() {
	var inputValor1 = document.all['Valor1'];
	var inputValor2 = document.all['Valor2'];
	var pResposta = document.all['Resposta'];
	var Valor1 = Number(inputValor1.value);
	var Valor2 = Number(inputValor2.value);
	var total = Valor1 + Valor2;
	pResposta.innerHTML = 'Resultado: ' + total;	
}
