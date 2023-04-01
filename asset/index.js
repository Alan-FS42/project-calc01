function Calculator() {
    this.display = document.querySelector('.display');

    this.getClick = () => {
        document.addEventListener('click', e => {
            const element0 = e.target;

            if (element0.classList.contains('btn-num')) this.addNumDisplay(element0); 
            if (element0.classList.contains('btn-clear')) this.clear();
            if (element0.classList.contains('btn-del')) this.del();
            if (element0.classList.contains('btn-eq')) this.result();
        });
    };

    this.addNumDisplay = (element0) => {
        this.display.value += element0.innerText; //Adiciona valor no Display
        this.display.focus(); //Adicona foco no display
    };

    this.clear = () => {
        this.display.value = ''; //Limpando o display da calc
    }

    this.inicia = () => {
        this.getClick(); 
        this.getEnter();
    };

    this.getEnter = () => {
        document.addEventListener('keyup', e => { //Evento de 'enter' no documento
            if (e.key === 13) return; 
            this.result();
        })
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1); //Deleta válores unitários 
    }

    this.result = () => { //Exibe o resultado
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida!');
                return;
            }

            this.display.value = conta;

        } catch(e) {
            alert('Conta inválida!');
            return;
        }
    }
}

const calc = new Calculator();
calc.inicia(); // Chamada do objeto