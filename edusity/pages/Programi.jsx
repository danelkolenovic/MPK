import React, { useState } from 'react';
import './Programi.css';

const programs = [
  {
    id: 1,
    name: 'Menadžment',
    level: 'osnovne',
    duration: '4 godine (8 semestara)',
    ects: 240,
    description: 'Obrazovanje stručnjaka za obavljanje menadžerskih poslova u različitim oblastima privrede i društva.',
    modules: ['Opšti menadžment', 'Menadžment ljudskih resursa', 'Marketing menadžment']
  },
  {
    id: 2,
    name: 'Pravo',
    level: 'osnovne',
    duration: '4 godine (8 semestara)',
    ects: 240,
    description: 'Obrazovanje pravnika za rad u državnim organima, privrednim subjektima i pravosudnim organima.',
    modules: ['Građansko pravo', 'Krivično pravo', 'Upravno pravo']
  },
  {
    id: 3,
    name: 'Ekonomija',
    level: 'osnovne',
    duration: '4 godine (8 semestara)',
    ects: 240,
    description: 'Obrazovanje ekonomista za rad u različitim sektorima privrede i državne uprave.',
    modules: ['Makroekonomija', 'Mikroekonomija', 'Međunarodna ekonomija']
  },
  {
    id: 4,
    name: 'Informacione tehnologije',
    level: 'osnovne',
    duration: '4 godine (8 semestara)',
    ects: 240,
    description: 'Obrazovanje IT stručnjaka za razvoj softvera, administraciju sistema i digitalne tehnologije.',
    modules: ['Programiranje', 'Baze podataka', 'Mrežne tehnologije']
  },
  {
    id: 5,
    name: 'Menadžment MBA',
    level: 'master',
    duration: '1 godina (2 semestra)',
    ects: 60,
    description: 'Napredni program za menadžere koji žele da unaprede svoje veštine u liderstvu i strategiji.',
    modules: ['Strategijski menadžment', 'Finansijski menadžment', 'Organizaciono ponašanje']
  },
  {
    id: 6,
    name: 'Evropsko pravo',
    level: 'master',
    duration: '1 godina (2 semestra)', 
    ects: 60,
    description: 'Specijalizovani program za proučavanje evropskog prava i evropskih integracija.',
    modules: ['EU pravo', 'Evropske institucije', 'Ljudska prava']
  },
  {
    id: 7,
    name: 'Finansije i bankarstvo',
    level: 'master',
    duration: '1 godina (2 semestra)',
    ects: 60,
    description: 'Specijalizacija u oblasti finansija, bankarstva i tržišta kapitala.',
    modules: ['Investicije', 'Bankarsko poslovanje', 'Rizik menadžment']
  },
  {
    id: 8,
    name: 'Softversko inženjerstvo',
    level: 'master',
    duration: '1 godina (2 semestra)',
    ects: 60,
    description: 'Napredni program za razvoj složenih softverskih sistema i aplikacija.',
    modules: ['Softverska arhitektura', 'DevOps', 'Machine Learning']
  },
  {
    id: 9,
    name: 'Doktorske studije - Menadžment',
    level: 'postdiplomske',
    duration: '3 godine (6 semestara)',
    ects: 180,
    description: 'Naučno-istraživački program za obrazovanje doktora nauka u oblasti menadžmenta.',
    modules: ['Metodologija istraživanja', 'Napredni menadžment', 'Doktorska disertacija']
  },
  {
    id: 10,
    name: 'Doktorske studije - Pravo',
    level: 'postdiplomske',
    duration: '3 godine (6 semestara)',
    ects: 180,
    description: 'Naučno-istraživački program za obrazovanje doktora pravnih nauka.',
    modules: ['Pravna metodologija', 'Uporedno pravo', 'Doktorska disertacija']
  },
  {
    id: 11,
    name: 'Specijalistički studije',
    level: 'postdiplomske',
    duration: '1 godina (2 semestra)',
    ects: 60,
    description: 'Specijalizovani programi za dodatno usavršavanje u specifičnim oblastima.',
    modules: ['Specijalistički rad', 'Praktična nastava', 'Završni ispit']
  }
];

const Programi = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filtered = selectedLevel === 'all'
    ? programs
    : programs.filter(p => p.level === selectedLevel);

  const getLabel = (level) => {
    if (level === 'osnovne') return 'Osnovne studije';
    if (level === 'master') return 'Master studije';
    return 'Postdiplomske studije';
  };

  return (
    <div className="programs-container">
      <div className="programs-header">
        <h1>Studijski programi</h1>
        <p>Izaberite nivo studija koji vas interesuje i istražite naše akreditovane studijske programe</p>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setSelectedLevel('all')} className={selectedLevel === 'all' ? 'active' : ''}>Svi programi</button>
        <button onClick={() => setSelectedLevel('osnovne')} className={selectedLevel === 'osnovne' ? 'active' : ''}>Osnovne</button>
        <button onClick={() => setSelectedLevel('master')} className={selectedLevel === 'master' ? 'active' : ''}>Master</button>
        <button onClick={() => setSelectedLevel('postdiplomske')} className={selectedLevel === 'postdiplomske' ? 'active' : ''}>Postdiplomske</button>
      </div>

      <div className="programs-grid">
        {filtered.map(program => (
          <div key={program.id} className="program-card">
            <div className="program-header">
              <span className={`badge ${program.level}`}>{getLabel(program.level)}</span>
              <span className="ects">{program.ects} ECTS</span>
            </div>
            <h3>{program.name}</h3>
            <p className="duration">{program.duration}</p>
            <p className="description">{program.description}</p>
            <ul>
              {program.modules?.map((mod, i) => (
                <li key={i}>• {mod}</li>
              ))}
            </ul>
            <button className="details-button">Saznaj više</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programi;
