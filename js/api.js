const api = { //api fake para interação
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        }
         catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

     async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {//requisição
                method: 'POST',
                headers: { //cabeçalho da requisição 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)//conteudo passado
            })
            return await response.json()
        }
         catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    }
}

export default api;