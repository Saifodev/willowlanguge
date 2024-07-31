import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {

  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  function handleSubmit(event) {
    event.preventDefault();
    document.querySelector('.spinner-wrapper-2').classList.remove('d-none');
    document.querySelector('.btn-submit-2').disabled = true;

    const formData = {
      name: document.querySelector("input[name='name']").value,
      phone: document.querySelector("input[name='phone']").value,
      email: document.querySelector("input[name='email']").value,
      subject: document.querySelector("input[name='subject']").value,
      message: document.querySelector("textarea[name='message']").value,
    }

    axios.post('http://localhost:3001/send-contact', formData, config)
      .then(response => {
        document.querySelector('.spinner-wrapper-2').classList.add('d-none');
        document.querySelector('.btn-submit-2').disabled = false;
        document.getElementById('alertSuccess-2').classList.remove('d-none');
        setTimeout(() => {
          document.getElementById('alertSuccess-2').classList.add('d-none');
        }, 5000)

        document.querySelector("input[name='name']").value = "";
        document.querySelector("input[name='phone']").value = "";
        document.querySelector("input[name='email']").value = "";
        document.querySelector("input[name='subject']").value = "";
        document.querySelector("textarea[name='message']").value = "";
      })
      .catch(error => {
        document.querySelector('.spinner-wrapper-2').classList.add('d-none');
        document.querySelector('.btn-submit-2').disabled = false;
        document.getElementById('alertError-2').classList.remove('d-none');
        setTimeout(() => {
          document.getElementById('alertError-2').classList.add('d-none');
        }, 5000)
      });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row px-2">
          {/* Informações de Contato */}
          <div className="col-md-6 contact-info">
            <h2>Contato</h2>
            <p>Preencha o formulário e envie sua mensagem.</p>
            <div className="info-item">
              <img className="me-2" src="icons/i1.png" alt="Location" width="30" height="30" />
              <span>743, 743 Av. Ahmed Sekou Touré, Maputo</span>
            </div>
            <div className="info-item">
              <img className="me-2" src="icons/i3.png" alt="Phone" width="30" height="30" />
              <span>+258 84 699 6917</span>
            </div>
            <div className="info-item">
              <img className="me-2" src="icons/i2.png" alt="Mail" width="30" height="30" />
              <span>willowlanguageschool@gmail.com</span>
            </div>
            {/* Mapa */}
            <div className="ratio ratio-16x9 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.873446865205!2d32.58465578602821!3d-25.9721905203665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ba4bc29b41f%3A0xf3f52a49ca8ca6c5!2sWillow%20Language%20School!5e0!3m2!1spt-PT!2smz!4v1721568518483!5m2!1spt-PT!2smz"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Formulário de Contato */}
          <div className="col-md-6 form-container shadow px-4 py-5">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              {/* Alertas de sucesso e erro */}
              <div id="alertSuccess-2" className="alert alert-success d-none" role="alert">
                Mensagem enviada com sucesso.
              </div>
              <div id="alertError-2" className="alert alert-danger d-none" role="alert">
                Ocorreu um erro ao enviar a mensagem. Tente novamente.
              </div>
              <div className="form-group">
                <input type="text" name="name" placeholder="Nome" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Celular" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Assunto" required />
              </div>
              <div className="form-group">
                <textarea rows="4" name="message" placeholder="Mensagem" required></textarea>
              </div>
              <button className="btn-submit-2" type="submit">
                <span class="btn-text">Enviar</span>
                <div class="spinner-border spinner-wrapper-2 d-none ms-2" style={{ width: "20px", height: "20px" }} role="status">
                  <span class="visually-hidden">...</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
