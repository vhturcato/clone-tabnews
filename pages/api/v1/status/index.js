function status(request, response){
    response.status(200).json({chave: "alunos do curso.dev são pessoas acima da média. 2"});
}

export default status;

// renomear para index.js a pagina da API da a opção de ter varios arquivos dentro da pasta api/v1/status
// Por padrão o next.js procura um arquivo index.js dentro da pasta para abrir primeiro