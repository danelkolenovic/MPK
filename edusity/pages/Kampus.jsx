import { useState } from 'react';
import './Kampus.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Kampus = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const campusImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3', alt: 'Glavna zgrada fakulteta', title: 'Glavna zgrada' },
    { id: 2, src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3', alt: 'Moderna arhitektura kampusa', title: 'Moderna arhitektura' },
    { id: 3, src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3', alt: 'Unutrašnjost biblioteke', title: 'Biblioteka' },
    { id: 4, src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3', alt: 'Spoljašnji pogled na kampus', title: 'Kampus spolja' },
    { id: 5, src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3', alt: 'Kompjuterska laboratorija', title: 'IT laboratorija' },
    { id: 6, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3', alt: 'Studentska zona za učenje', title: 'Zona za učenje' }
  ];

  const facilities = [
    { name: 'Biblioteka', description: 'Moderna biblioteka sa preko 50.000 knjiga i digitalne resurse' },
    { name: 'IT laboratorije', description: 'Najsavremenije opremljene laboratorije za programiranje i IT nastavu' },
    { name: 'Amfiteatri', description: 'Prostrane sale opremljene najnovijom AV tehnologijom' },
    { name: 'Studentski centar', description: 'Prostor za druženje, učenje i organizovanje studentskih aktivnosti' },
    { name: 'Kafeterija', description: 'Udoban prostor za odmor sa kvalitetnom hranom i pićem' },
    { name: 'Parking', description: 'Besplatni parking za studente i zaposlene' }
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Adresa', value: 'Bulevar maršala Tolbuhina 8, 11070 Novi Beograd' },
    { icon: Phone, label: 'Telefon', value: '+381 11 220 3000' },
    { icon: Mail, label: 'Email', value: 'info@mpk.edu.rs' },
    { icon: Clock, label: 'Radno vreme', value: 'Pon-Pet: 08:00-20:00, Sub: 08:00-14:00' }
  ];

  return (
    <div className="kampus-page">
      <section className="kampus-hero">
        <div className="kampus-hero-content">
          <h1>Naš kampus</h1>
          <p>Moderni i funkcionalni prostor za učenje, istraživanje i razvoj</p>
        </div>
      </section>

      <div className="kampus-container">
        <section className="kampus-about">
          <h2>O našem kampusu</h2>
          <p>Naš kampus se prostire na preko 10.000 kvadratnih metara... </p>
        </section>

        <section className="kampus-gallery">
          <h2>Galerija</h2>
          <div className="gallery-grid">
            {campusImages.map((image) => (
              <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image.src)}>
                <img src={image.src} alt={image.alt} />
                <div className="overlay"><h3>{image.title}</h3></div>
              </div>
            ))}
          </div>
        </section>

        <section className="kampus-facilities">
          <h2>Objekti i sadržaji</h2>
          <div className="facility-grid">
            {facilities.map((f, i) => (
              <div key={i} className="facility-card">
                <h3>{f.name}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="kampus-contact">
          <h2>Kontakt informacije</h2>
          <div className="contact-grid">
            {contactInfo.map((info, i) => (
              <div key={i} className="contact-item">
                <div className="icon">{<info.icon size={24} />}</div>
                <div>
                  <h4>{info.label}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="map-placeholder">
            <h3>Lokacija</h3>
            <p>Mapa - Bulevar maršala Tolbuhina 8, Novi Beograd</p>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Campus" />
        </div>
      )}
    </div>
  );
};

export default Kampus;
