document.addEventListener('DOMContentLoaded', () => {
    console.log("Konekta Dashboard Carregado");
    
    // Aqui você futuramente buscará os dados do seu banco
    const dados = { vendas: 76.50, alunos: 45 };
    
    // Exemplo: injetar valor dinâmico
    document.querySelector('.stats .card:nth-child(1) p').innerText = `R$ ${dados.vendas.toFixed(2)}`;
});
