/*
0 Obter um Usuário
1 Obter um número de telefone de um usuário a partir de um ID
2 Obter o endereço do usuário pelo ID
*/

function obterUsuario(callback) {
	setTimeout(function() {
		return callback(null, {
				id: 1,
				nome: 'Aladin',
				dataNascimento: new Date()
		})
	}, 1000)
}

function obterTelefone(idUsuario, callback) {
	setTimeout(function() {
		return callback(null, {
				telefone: '94444-000',
				ddd: 11
		})
	}, 2000)
}

function obterEndereco(idUsuario, callback) {
	setTimeout(function() {
		return callback(null, {
			rua: 'Rua vera cruz',
			numero: 10
		});
	});
}

obterUsuario(function resolverUsuario(err, usuario) {
	// null || "" || 0 === false
	if (err) {
		console.error('Error: ', err)
		return
	}
	obterTelefone(usuario.id, function resolverTelefone (err, telefone) {
		if (err) {
			console.error('Error: ', err)
			return
		}
		obterEndereco(usuario.id, function resoverEndereco(err, endereco) {
			if (err) {
				console.log('Err: ', err);
				return
			}
		})
	})
})
//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)