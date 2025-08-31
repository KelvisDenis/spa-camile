document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal');
    const modal = document.getElementById('agendamento-modal');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('agendamento-form');

    // Abre o modal
    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Fecha o modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // O envio do formulário será feito pelo Formspree.
    // O JavaScript aqui só precisa lidar com a mensagem de confirmação.
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formActionUrl = form.action;
        const formData = new FormData(form);

        try {
            const response = await fetch(formActionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Agendamento enviado com sucesso! Aguarde nosso contato.');
                form.reset();
                modal.style.display = 'none';
            } else {
                alert('Ocorreu um erro ao enviar. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.');
        }
    });
});