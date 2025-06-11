import React from "react";

const TrabalheConosco = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        alert("Formulário enviado!");
    };

    return (
        <div>
            <h2>Trabalhe Conosco</h2>
            <p>Estamos sempre em busca de novos talentos!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type="tel" name="telefone" />
                </div>
                <div>
                    <label>Currículo (PDF):</label>
                    <input type="file" name="cv" accept=".pdf" required />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default TrabalheConosco;
