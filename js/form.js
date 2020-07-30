function main() {
    const form = document.getElementById("js-form");

    const getFormValue = (inputName, form) => {
        return form.elements[inputName].value
    }

    const getContactText = (data) => `
        <p class="result">Nome completo:</p>
        <h4>${data.name}</h4>
        <p class="result">E-mail:</p>
        <h4>${data.email}</h4>
        <p class="result">Telefone 1:</p>
        <h4>${data.number1}</h4>
        <p class="result">Telefone 2:</p>
        <h4>${data.number2}</h4>`

    const formSubmit = (element) => {
        element.preventDefault();

        const form = element.target;
        const data = {
            name: getFormValue('name', form),
            email: getFormValue('email', form),
            number1: getFormValue('number1', form),
            number2: getFormValue('number2', form)
        }

        if (!data.number2) {
            data.number2 = `<p style = "opacity: 0.5; margin: 0;">Não Informado</p>`
        }

        const card = document.getElementById("js-text")

        card.innerHTML = getContactText(data);
    }

    form.addEventListener("submit", formSubmit);

}

window.addEventListener("load", main)