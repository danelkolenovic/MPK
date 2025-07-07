import React from 'react';
import './ONama.css';
import { Users, Award, BookOpen, Globe } from 'lucide-react';

const ONama = () => {
  const stats = [
    { icon: Users, label: 'Studenata', value: '5000+' },
    { icon: BookOpen, label: 'Studijskih programa', value: '25+' },
    { icon: Award, label: 'Godina tradicije', value: '30+' },
    { icon: Globe, label: 'Međunarodnih partnera', value: '50+' },
  ];

  return (
    <div className="onama-wrapper">
      {/* Hero sekcija */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>O fakultetu</h1>
          <p>Megatrend PKB - Vaš partner u obrazovanju za budućnost</p>
        </div>
      </div>

      {/* Sadržaj */}
      <div className="main-container">
        {/* Statistika */}
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Misija i vizija */}
        <div className="mission-vision">
          <div>
            <h2>Naša misija</h2>
            <p>
              Fakultet Megatrend PKB je moderna visokoškolska ustanova koja se bavi obrazovanjem
              studenata u oblasti ekonomije, prava, menadžmenta i informacionih tehnologija.
              Naša misija je da pružimo kvalitetno obrazovanje koje priprema studente za uspešnu
              karijeru u dinamičnom poslovnom okruženju.
            </p>
            <p>
              Kroz inovativne nastavne metode, savremene tehnologije i praktičan pristup učenju,
              omogućavamo našim studentima da steknu potrebna znanja i veštine za uspeh na tržištu rada.
            </p>
          </div>
          <div>
            <h2>Naša vizija</h2>
            <p>
              Težimo da budemo vodeća visokoškolska ustanova u regionu, prepoznata po izvrsnosti
              u obrazovanju, istraživanju i inovacijama. Naša vizija je da obrazujemo lidere budućnosti
              koji će doprineti razvoju društva i privrede.
            </p>
            <p>
              Kontinuirano radimo na unapređenju kvaliteta obrazovanja, proširenju međunarodne saradnje
              i razvoju novih studijskih programa koji odgovaraju potrebama savremenog tržišta rada.
            </p>
          </div>
        </div>

        {/* Vrednosti */}
        <div className="values-section">
          <h2>Naše vrednosti</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon bg-blue"><BookOpen className="icon" /></div>
              <h3>Izvrsnost u obrazovanju</h3>
              <p>Pružamo visokokvalitetno obrazovanje koje priprema studente za izazove modernog sveta.</p>
            </div>
            <div className="value-card">
              <div className="value-icon bg-green"><Users className="icon" /></div>
              <h3>Fokus na studente</h3>
              <p>Student je u centru našeg rada i trudimo se da mu pružimo najbolje moguće iskustvo.</p>
            </div>
            <div className="value-card">
              <div className="value-icon bg-purple"><Globe className="icon" /></div>
              <h3>Međunarodna saradnja</h3>
              <p>Razvijamo partnerstva sa univerzitetima širom sveta radi razmene znanja i iskustava.</p>
            </div>
          </div>
        </div>

        {/* Istorija */}
        <div className="history-section">
          <h2>Naša istorija</h2>
          <div className="history-timeline">
            {[
              {
                year: '1990. godina - Osnivanje',
                text: 'Fakultet je osnovan kao moderna visokoškolska ustanova sa ciljem pružanja kvalitetnog obrazovanja u oblasti ekonomije i menadžmenta.',
              },
              {
                year: '2000. godina - Proširenje',
                text: 'Dodavanje novih studijskih programa u oblasti prava i informacionih tehnologija, kao i otvaranje master studija.',
              },
              {
                year: '2010. godina - Modernizacija',
                text: 'Investiranje u savremenu tehnologiju, digitalizacija nastave i razvoj online platformi za učenje.',
              },
              {
                year: '2020. godina - Danas',
                text: 'Kontinuirani razvoj i prilagođavanje potrebama savremenog tržišta rada, sa fokusom na praktično obrazovanje i međunarodnu saradnju.',
              },
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="dot"></div>
                <div>
                  <h3>{item.year}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ONama;
