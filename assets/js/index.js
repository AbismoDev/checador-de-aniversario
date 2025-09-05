document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let msg;

        const dataInput = document.querySelector("#data--input");
        const res = document.querySelector("#res");

        if(dataInput.value === "" || dataInput.value === null || dataInput.value === undefined) {
            // erro
            msg = `Insira uma data de nascimento antes para fazermos a checagem!`;
            res.innerHTML = exibirMensagem(msg, "erro");
            return;
        }

        const valorInput = dataInput.value;

        const dataAtual = new Date();

        const dataNascimento = new Date(valorInput + "T00:00:00");

        if(dataAtual.getDate() === dataNascimento.getDate() && dataAtual.getMonth() === dataNascimento.getMonth()) {
            // Aqui faremos a mensagem de parabens.            
            msg = `🎉 Parabéns, hoje é seu aniversario! 🎉`;
            res.innerHTML = exibirMensagem(msg, "sucesso");
            
            const musicaParabens = new Audio("assets/audio/musica--parabens.mp3");
            musicaParabens.volume = 0.3;
            musicaParabens.play();
        }
        else {
            // Aqui faremos o retorno de quantos dias faltam para o proximo aniversario.
            const diaParaOAniversario = calculaProximoAniversario(dataAtual, dataNascimento);

            msg = `Não foi dessa vez, mas seu próximo aniversário é daqui a ${diaParaOAniversario} dias.`;
            res.innerHTML = exibirMensagem(msg, "aviso");
        }
    });

    function exibirMensagem(msg, tipoMensagem) {
        return `
            <div class="container--mensagem ${tipoMensagem}">
                <p>${msg}</p>
            </div>
        `;
    }

    function calculaProximoAniversario(dataAtual, dataNascimento) {
        const proximoAniversario = new Date((dataAtual.getFullYear() + 1), dataNascimento.getMonth(), dataNascimento.getDate());
        const diferencaMilissegundos = proximoAniversario.getTime() - dataAtual.getTime();

        return Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));
    }

}); // Aqui fica o final do DOMContentLoaded