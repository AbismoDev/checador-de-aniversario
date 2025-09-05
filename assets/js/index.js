document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const dataInput = document.querySelector("#data--input");
        const res = document.querySelector("#res");

        if(dataInput.value === "" || dataInput.value === null || dataInput.value === undefined) {
            // erro
            console.log("Insira uma data de nascimento antes para fazermos a checagem!");
            res.innerHTML = `
                <div class="container--mensagem erro">
                    <p>Insira uma data de nascimento antes para fazermos a checagem!</p>
                </div>
            `
            return;
        }

        const valorInput = dataInput.value;

        const dataAtual = new Date();

        const dataNascimento = new Date(valorInput + "T00:00:00");

        if(dataAtual.getDate() === dataNascimento.getDate() && dataAtual.getMonth() === dataNascimento.getMonth()) {
            // Aqui faremos a mensagem de parabens.            
            res.innerHTML = `
                <div class="container--mensagem sucesso">
                    <p>🎉 Parabéns, hoje é seu aniversario! 🎉</p>
                </<div>
            `
        }
        else {
            // Aqui faremos o retorno de quantos dias faltam para o proximo aniversario.
            const proximoAniversario = new Date((dataAtual.getFullYear() + 1), dataNascimento.getMonth(), dataNascimento.getDate());

            const diferencaMilissegundos = proximoAniversario.getTime() - dataAtual.getTime();
            const diaParaOAniversario = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

            console.log("Não foi dessa vez, mas seu próximo aniversário é daqui a ", diaParaOAniversario, " dias.");
            res.innerHTML = `
                <div class="container--mensagem aviso">
                    <p>Não foi dessa vez, mas seu próximo aniversário é daqui a ${diaParaOAniversario} dias.</p>
                </div>
            `
        }
    });

}); // Aqui fica o final do DOMContentLoaded