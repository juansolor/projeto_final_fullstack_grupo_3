import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Pagamento</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Opções de Pagamento</h4>
            <p>Aqui você pode integrar diferentes métodos de pagamento, como:</p>
            <ul>
              <li>Cartão de Crédito/Débito</li>
              <li>Boleto Bancário</li>
              <li>Pix</li>
              <li>PayPal</li>
            </ul>
            

            <h4 className="mt-4 mb-3">Login para Finalizar</h4>
            <p>Para prosseguir com o pagamento, por favor, faça login ou crie uma conta.</p>
            <div className="d-grid gap-2">
              <Link to="/user" className="btn btn-primary">Fazer Login</Link>
              <Link to="/registro" className="btn btn-secondary">Criar Conta</Link>
            </div>

            <div className="mt-4 text-center">
              <button className="btn btn-success btn-lg">Confirmar Pagamento</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
