const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // Evento de click no botão que dispara a função add
form.addEventListener("change", save) // Evento de mudança no formulário que dispara a função save

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // Variavel que cria uma nova data, transaforma a data em pt-br e remove os 5 últimos caracteres da string data ("/2023")
  const dayExists = nlwSetup.dayExists(today) // Puxou na biblioteca da NLW se o dia que foi adicionado já existe ou não dentro da biblioteca, retornando em booleano (verdadeiro ou falso)

  if (dayExists) {
    // Se o dia já existir, não vai incluir na biblioteca e vai parar a função add com o return
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today) // Se o de não existir, ele vai ser adicionado na biblioteca
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // Essa função vai salvar no localStorage através da chave que foi criada com o nome 'NLWSetup@habits' o valor em formato de String
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // Essa variavél vai buscar as informações do localStorage e vai converter em um objeto OU se não existir nenhum objeto na primeira vez que entrar na aplicação, vai criar um objeto vazio
nlwSetup.setData(data) // Aqui ele está esperando um objeto da variavel 'data'
nlwSetup.load() // Carrega as insformações
