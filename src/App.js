// src/App.js
import React from 'react';
import Header from './components/Header';
import Noticia from './components/Noticia';
import './App.css';

function App() {
  const noticias = [
    {
      titulo: 'React 19 lançado!',
      resumo: 'Nova versão do React traz melhorias de performance e novos hooks.',
      imagem: 'https://via.placeholder.com/300x150.png?text=React+19'
    },
    {
      titulo: 'Futebol Brasileiro',
      resumo: 'Campeonato Brasileiro promete jogos emocionantes nesta temporada.',
      imagem: 'https://via.placeholder.com/300x150.png?text=Futebol'
    },
    {
      titulo: 'Tecnologia em 2025',
      resumo: 'As tendências de tecnologia para os próximos anos estão incríveis.',
      imagem: 'https://via.placeholder.com/300x150.png?text=Tech+2025'
    }
  ];

  return (
    <div className="App">
      <Header />
      <main id="noticias" className="noticias-container">
        {noticias.map((noticia, index) => (
          <Noticia 
            key={index}
            titulo={noticia.titulo} 
            resumo={noticia.resumo} 
            imagem={noticia.imagem} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;

