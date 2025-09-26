// src/components/Noticia.js
import React from 'react';
import './Noticia.css';

function Noticia({ titulo, resumo, imagem }) {
  return (
    <div className="noticia">
      {imagem && <img src={imagem} alt={titulo} />}
      <h2>{titulo}</h2>
      <p>{resumo}</p>
    </div>
  );
}

export default Noticia;
