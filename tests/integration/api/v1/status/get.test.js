// no protocolo http é preciso sempre especificar o 'Método' que é a ação que quero fazer dentro do servidor
// método GET: sinaliza que quero pegar informação do servidor
// método POST: sinaliza que quero postar, publicar informação pro servidor
// metodo DELETE, PUT, PATCH... cada um com sua função do que deveria fazer

test("GET to /api/v1/status should return 200", async ()=> {
    const response = await fetch("http://localhost:3000/api/v1/status");
    //console.log(response);
    expect(response.status).toBe(200);
})

// A função fetch tenta pegar o valor mas se nao da tempo ela só responde 'Promised'
// Entao, usando o await faz a função fetch esperar o valor chegar do servidor
// o problema é que a função () => é sincrona. Então tem que usar o async pra deixar ela assíncrona.
