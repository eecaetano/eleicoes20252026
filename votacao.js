const scriptURL = "https://script.google.com/macros/s/AKfycbyS9K2cZcSH0TaMfPUcgYbDBdljRPstregd7JE9pIeb2zTAsyp1M6AV88GCWQMbLNT5-w/exec";
document.getElementById("formVoto").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const serie = document.getElementById("serie").value.trim();
  const voto = document.querySelector('input[name="voto"]:checked').value;

  document.getElementById("mensagem").textContent = "⏳ Registrando seu voto...";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, serie, voto })
    });

    if (response.ok) {
      document.getElementById("mensagem").textContent = "✅ Voto registrado com sucesso! Obrigado por participar!";
      document.getElementById("mensagem").style.color = "#00ff88";
      document.getElementById("formVoto").reset();
    } else {
      document.getElementById("mensagem").textContent = "❌ Erro ao registrar voto. Tente novamente.";
      document.getElementById("mensagem").style.color = "red";
    }
  } catch (error) {
    document.getElementById("mensagem").textContent = "⚠️ Erro de conexão!";
    document.getElementById("mensagem").style.color = "yellow";
  }
});