import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TrabalheConosco = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulário enviado!");
    };

    return (
        <div className="container py-4 d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
            <div className="card shadow col-12 col-md-8 col-lg-8 p-4" style={{maxWidth: 700}}>
                <div className="card-body">
                    <h2 className="mb-4">Trabalhe Conosco</h2>
                    <p className="text-center">Estamos sempre em busca de novos talentos!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nome:</label>
                            <input type="text" name="nome" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" name="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefone:</label>
                            <input type="tel" name="telefone" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Currículo (PDF):</label>
                            <input type="file" name="cv" accept=".pdf" className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TrabalheConosco;
