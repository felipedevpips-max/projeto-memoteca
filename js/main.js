import ui from './ui.js'
import api from './api.js'

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById('pensamento-form')
    formularioPensamento.addEventListener('submit', manipularSubmitFormulario)
}) //quando a pagina carrega

async function manipularSubmitFormulario(event) {
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value
    const conteudo = document.getElementById('pensamento-counteudo').value
    const autoria = document.getElementById('pensamento-autoria').value

    try {
        await api.salvarPensamento({conteudo, autoria})
        ui.renderizarPensamentos()
        
    } catch (error) {
        alert('Error ao salvar pensamento')
        
    }

    
}