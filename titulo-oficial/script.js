// script.js

// Função para abrir o modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Adiciona eventos de clique para os links
document.getElementById("privacyLink").onclick = function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    openModal("privacyModal");
};

document.getElementById("termsLink").onclick = function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    openModal("termsModal");
};

document.getElementById("servicesLink").onclick = function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    openModal("servicesModal");
};

// Adiciona evento de clique para o botão
document.getElementById("actionBtn").onclick = function() {
    openModal("chatModal");
};

// Adiciona eventos de clique para os botões de fechar
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var targetModal = this.getAttribute("data-target");
        closeModal(targetModal);
    };
}

// Fecha o modal se o usuário clicar fora do modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}
