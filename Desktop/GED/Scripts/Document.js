sessionStorage.setItem("activeUser", "Caio");

class Document {
  constructor(name, type, size, sender) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.sender = sessionStorage.getItem("activeUser");
    this.idNumber = this.setIdNumber();
  }

  setUser() {
    return sessionStorage.getItem("activeUser");
  }

  setIdNumber() {
    let comentStorage = JSON.parse(localStorage.getItem("coments"));
    let idNumber = 1;
    if (comentStorage)
      idNumber = Number(Object.keys(comentStorage)[Object.keys(comentStorage).length - 1]) + 1;
    return idNumber;
  }
 
  // Converte o tamanho do documento para KB ou MB
  newSize() {
    if (this.size.length < 7) {
      return this.size = `${Math.round(+this.size / 1024).toFixed(2)}KB`;
    } else {
      return this.size = `${(Math.round(+this.size / 1024) / 1000).toFixed(2)}MB`;
    }
  }
    
  // Remove a barra para usar o nome do tipo de arquivo
  // Exemplo: 'text/plain' -> 'textplain'
  get typeImage() {
    let image = this.type.split("/");
    return `${image[0]}${image[1]}`;
  }
}
  
// Quando um arquivo é selecionado, exibe o nome, tipo e tamanho formatado
document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  let dc = new Document(file.name, file.type, file.size.toString());
  createDocumentHTML(dc);
  saveDocument(dc);
});

function saveDocument(document) {
  let documentStorage = JSON.parse(localStorage.getItem("documents"));
  if (!documentStorage) documentStorage = {};
  documentStorage[document.idNumber] = document;
  delete document.idNumber;
  localStorage.setItem("documents", JSON.stringify(documentStorage));
}


function createDocumentHTML(document) {  
  let documentHTML = `
    <div class="borda">
      <img src="../Assets/DocumentImages/`+document.typeImage+`.png" onerror="this.onerror=null;this.src='../Assets/DocumentImages/others.png'" width="64">
      <h2>`+document.name+`</h2>
      <h3>`+document.size+`</h3>
      <h4>`+document.sender+`</h4>
    </div>`;
    $("#file-container").append(documentHTML);
  }

function loadAllDocuments() {
  let documentStorage = JSON.parse(localStorage.getItem("documents"));
  if (documentStorage)
    
    for (const [key, value] of Object.entries(documentStorage))
      createDocumentHTML(value);
}

loadAllDocuments();