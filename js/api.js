const URL_BASE = "http://localhost:3000" //deixando mais dinamico


const api = { //api fake para interação
    async buscarPensamentos() {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`)
            return await response.json()
        }
         catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

     async salvarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {//requisição
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
    },

     async buscarPensamentoId(id) { //usando id poruqe ele e um identificador unico
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            return await response.json()
        }
         catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async editarPensamento(pensamento) { //concatenando pensamento com o id
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {//requisição
                method: 'PUT',
                headers: { //cabeçalho da requisição 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)//conteudo passado
            })
            return await response.json()
        }
         catch {
            alert('Erro ao editar pensamento')
            throw error
        }
    },

       async excluirPensamento(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
        method: "DELETE"
      })
    }
    catch {
      alert('Erro ao excluir um pensamento')
      throw error
    }
  }


}

export default api;