import React from "react";

const Atendimento = () => {
    return (
        <div className="container py-4 d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
            <div className="card shadow col-12 col-md-8 col-lg-8 p-4" style={{maxWidth: 700}}>
                <h2 className="mb-4">Atendimento</h2>
                <p className="mb-3">
                    Se você tiver alguma dúvida ou precisar de assistência, entre em contato conosco através do nosso e-mail de atendimento ao cliente.
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" name="nome" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" id="sobrenome" name="sobrenome" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="tel" className="form-control" id="telefone" name="telefone" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="caso" className="form-label">Descreva seu caso</label>
                        <textarea className="form-control" id="caso" name="caso" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}
export default Atendimento;
