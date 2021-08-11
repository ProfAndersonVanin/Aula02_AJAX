function executar(){
	//alert("Funcionou!");
	//1° Carregar uma variavel para as requisições XML no servidor
	let pedido = new XMLHttpRequest();

	//2° Criar a função para o tratamento da resposta
	pedido.onreadystatechange = function(){
		//4° Fazer o tratamento dos dados
		
		//armazena em dados o conteudo XML do arquivo dados.xml
		let dados = this.responseXML;

		//armazena em clientes os elementos com a tag cliente do xml
		let clientes = dados.getElementsByTagName("cliente");

		//testar para ver a quantidade de elementos que possuem a tag cliente
		console.log(clientes.length); //4

		//5° preparar a apresentação dos dados armazenando-os em um variavel conteudo
		let conteudo = '<h2>LISTA DE CLIENTES</h2>';

		//A interface HTMLCollection representa uma coleção genérica 
		//(objeto array) de elementos (na ordem em que aparecem no documento) 
		//e oferece métodos e propriedades para selecioná-los da lista.
		console.log(clientes); //Aqui é mostrado uma HTMLCollection (vetor)
		
		//criar um laço de repetição para percorrer todas as posições
		//deste vetor e incluir cada elemento encontrado dentro da variavel
		//conteudo adicionando o conteúdo novo + o antigo

		//console.log(clientes[0].getElementsByTagName("nome")[0].childNodes[0].nodeValue);

		for (let i=0; i < clientes.length; i++){
			conteudo += '<p>Nome: ' + clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + '</p>';
			conteudo += '<p>Idade: ' + clientes[i].getElementsByTagName("idade")[0].childNodes[0].nodeValue + '</p>';
			conteudo += '<hr>';
		}

		//6° Apresentar os dados no corpo do HTML na div com id "caixa"
		document.getElementById('caixa').innerHTML = conteudo; 
	}

	//3° Fazer a abertura e envio da requisição
	pedido.open("GET","dados.xml",true);
	pedido.send();
}