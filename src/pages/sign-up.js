// src/pages/sign_up.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import cursosData from '../cursos.json';
import axios from 'axios';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
    const { courseId } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [modalidade, setModalidade] = useState('');
    const [regimes, setRegimes] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [showPayment, setShowPayment] = useState(false);
    const [source, setSource] = useState('');
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    useEffect(() => {
        if (courseId) {
            const cursosCombinados = [...cursosData.cursosOnline, ...cursosData.cursosPresencial, ...cursosData.cursosNegocios];
            const foundCourse = cursosCombinados.find(course => course.id === parseInt(courseId));
            if (foundCourse) {
                setCourseData(foundCourse);
                setModalidade(foundCourse.modalidade);
                setSelectedCourseId(foundCourse.id);
            }
        }
    }, [courseId]);

    useEffect(() => {
        atualizarRegimesECursos(modalidade);
    }, [modalidade]);

    const atualizarRegimesECursos = (modalidade) => {
        let regimesSet = new Set();
        let cursosSet = [];

        if (modalidade === 'Online') {
            cursosData.cursosOnline.forEach((curso) => {
                regimesSet.add(curso.regime);
                cursosSet.push(curso);
            });
        } else if (modalidade === 'Presencial') {
            cursosData.cursosPresencial.forEach((curso) => {
                regimesSet.add(curso.regime);
                cursosSet.push(curso);
            });
        } else if (modalidade === 'Negócios') {
            cursosData.cursosNegocios.forEach((curso) => {
                regimesSet.add(curso.regime);
                cursosSet.push(curso);
            });
        }

        setRegimes([...regimesSet]);
        setCursos(cursosSet);
    };

    const handleCourseChange = (event) => {
        const selectedId = event.target.value;
        setSelectedCourseId(selectedId);

        const cursosCombinados = [...cursosData.cursosOnline, ...cursosData.cursosPresencial, ...cursosData.cursosNegocios];
        const foundCourse = cursosCombinados.find(course => course.id === parseInt(selectedId));
        if (foundCourse) {
            setCourseData(foundCourse);
        }

    };

    const handlePaymentMethodChange = (e) => {
        const method = e.target.value;
        setSelectedPaymentMethod(method);

        // Defina os números das contas correspondentes
        const accountNumbers = {
            BCI: "1234567890",
            Mpesa: "0987654321",
        };

        setAccountNumber(accountNumbers[method] || "");
    };

    const handleChange = (e) => {

    };

    const handleChangeSource = (e) => {
        setSource(e.target.value)

    };

    const handleModalidadeChange = (event) => {
        setModalidade(event.target.value);
        setSelectedCourseId('');
        setCourseData(null);

    };

    const handleContinuar = (event) => {
        event.preventDefault();
        setShowPayment(true);
    };

    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('.spinner-wrapper-2').classList.remove('d-none');
        document.querySelector('.btn-submit-2').disabled = true;

        const formData = {
            name: document.querySelector('input[name="name"]').value,
            email: document.querySelector('input[name="email"]').value,
            phone: document.querySelector('input[name="phone"]').value,
            source: document.querySelector('select[name="source"]').value,
            modalidade: document.querySelector('input[name="modalidade"]').value,
            regime: document.querySelector('input[name="regime"]').value,
            course: document.querySelector('input[name="course"]').value,
            paymentMethod: document.querySelector('select[name="paymentMethod"]').value,
            paymentDetails: document.querySelector('input[name="paymentDetails"]').value,
        };

        axios.post('http://localhost:3001/send-email', formData, config)
            .then(response => {
                document.querySelector('.spinner-wrapper-2').classList.add('d-none');
                document.querySelector('.btn-submit-2').disabled = false;
                document.getElementById('alertSuccess').classList.remove('d-none');
                setTimeout(() => {
                    document.getElementById('alertSuccess').classList.add('d-none');
                }, 5000)
            })
            .catch(error => {
                document.querySelector('.spinner-wrapper-2').classList.add('d-none');
                document.querySelector('.btn-submit-2').disabled = false;
                document.getElementById('alertError').classList.remove('d-none');
                setTimeout(() => {
                  document.getElementById('alertError').classList.add('d-none');
                }, 5000)
            });
    };

    return (
        <div>
            <NavigationBar subUrl={true}/>
            <main>
                <form id="subscriptionForm" className="subscriptionForm" onSubmit={handleSubmit}>
                    <section className="parte-1 bg-primary py-3 mt-5 py-md-5 py-xl-8">
                        <div className="container">
                            <div className="row gy-4 align-items-center">
                                <div className="col-12 col-md-6 col-xl-7">
                                    <div className="d-flex justify-content-center text-bg-primary">
                                        <div className="col-12 col-xl-9">
                                            <hr className="border-primary-subtle mb-4" />
                                            <h2 className="h1 mb-4">Solicite um Teste Diagnóstico</h2>
                                            <p className="lead mb-5">
                                                Preencha seus dados abaixo e solicite um teste diagnóstico para o curso de sua escolha. Nossa equipe entrará em contato para fornecer mais informações e ajudar no seu processo de inscrição.
                                            </p>
                                            <div className="text-end">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-5">
                                    <div className="card border-0 rounded-4">
                                        <div className="card-body p-3 p-md-4 p-xl-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-4">
                                                        <h2 className="h3">Inscrição para Teste Diagnóstico</h2>
                                                        <h3 className="fs-6 fw-normal text-secondary m-0">Preencha os detalhes abaixo para solicitar um teste diagnóstico</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gy-3 overflow-hidden">
                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <input type="text" onChange={handleChange} className="form-control fc1" name="name" id="name" placeholder="Nome Completo" required />
                                                        <label htmlFor="name" className="form-label">Nome Completo</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <input type="email" onChange={handleChange} className="form-control fc1" name="email" id="email" placeholder="email@example.com" required />
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <input type="text" onChange={handleChange} className="form-control fc1" name="phone" id="phone" placeholder="Telefone" required />
                                                        <label htmlFor="phone" className="form-label">Telefone</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <select className="form-select fc1" name="source" id="source" onChange={handleChangeSource} required>
                                                            <option value="">Como soube sobre nós</option>
                                                            <option value="Google">Google</option>
                                                            <option value="Facebook">Facebook</option>
                                                            <option value="Indicação">Indicação</option>
                                                            <option value="Outros">Outros</option>
                                                        </select>
                                                        <label htmlFor="source" className="form-label">Como soube sobre nós</label>
                                                    </div>
                                                </div>
                                                {courseData ? (
                                                    <>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" onChange={handleChange} className="form-control fc1" name="modalidade" id="modalidade" placeholder="Modalidade" value={courseData.modalidade} readOnly />
                                                                <label htmlFor="modalidade" className="form-label">Modalidade</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" onChange={handleChange} className="form-control fc1" name="regime" id="regime" placeholder="Regime" value={courseData.regime} readOnly />
                                                                <label htmlFor="regime" className="form-label">Regime</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" onChange={handleChange} className="form-control fc1" name="course" id="course" placeholder="Curso" value={courseData.nome} readOnly />
                                                                <label htmlFor="course" className="form-label">Curso</label>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <select className="form-select fc1" name="modalidade" id="modalidade" value={modalidade} onChange={handleModalidadeChange} required>
                                                                    <option value="">Selecione a Modalidade</option>
                                                                    <option value="Online">Online</option>
                                                                    <option value="Presencial">Presencial</option>
                                                                    <option value="Negócios">Negócios</option>
                                                                </select>
                                                                <label htmlFor="modalidade" className="form-label">Modalidade</label>
                                                            </div>
                                                        </div>
                                                        {modalidade && (
                                                            <>
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-3">
                                                                        <select className="form-select fc1" onChange={handleChange} name="regime" id="regime" required>
                                                                            <option value="">Selecione o Regime</option>
                                                                            {regimes.map((regime, index) => (
                                                                                <option key={index} value={regime}>{regime}</option>
                                                                            ))}
                                                                        </select>
                                                                        <label htmlFor="regime" className="form-label">Regime</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-3">
                                                                        <select className="form-select fc1" name="course" id="course" value={selectedCourseId} onChange={handleCourseChange} required>
                                                                            <option value="">Selecione o Curso</option>
                                                                            {cursos.map((curso) => (
                                                                                <option key={curso.id} value={curso.id}>{curso.nome}</option>
                                                                            ))}
                                                                        </select>
                                                                        <label htmlFor="course" className="form-label">Curso</label>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                <div className="col-12">
                                                    <button type="button" className="btn btn-primary w-100" onClick={handleContinuar}>Continuar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {showPayment && (
                        <section className="parte-2 py-3 mt-5 py-md-5 py-xl-8 bg-light">
                            <div className="container">
                                <div className="row gy-4 align-items-center">
                                    <div className="col-12 col-md-6 col-xl-5">
                                        <div className="d-flex justify-content-center text-bg-primary">
                                            <div className="col-12 col-xl-9 px-4">
                                                <hr className="border-primary-subtle mb-4" />
                                                <h2 className="h1 mb-4">Pagamento</h2>
                                                <p className="lead mb-5">
                                                    Selecione a forma de pagamento e insira os detalhes necessários para concluir a inscrição.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-7">
                                        <div className="card border-0 rounded-4">
                                            <div className="card-body p-3 p-md-4 p-xl-5">
                                                <div className="row gy-3 overflow-hidden">
                                                    <div id="alertSuccess" className="alert alert-success d-none" role="alert">
                                                        Inscrição submetida com sucesso.
                                                    </div>
                                                    <div id="alertError" className="alert alert-danger d-none" role="alert">
                                                        Ocorreu um erro ao realizar a inscrição. Tente novamente.
                                                    </div>
                                                    <div className="col-12">
                                                        <h3>Detalhes do Curso</h3>
                                                        <p><strong>Nome do Curso:</strong> {courseData.nome}</p>
                                                        <p><strong>Modalidade:</strong> {courseData.modalidade}</p>
                                                        <p><strong>Regime:</strong> {courseData.regime}</p>
                                                        <p><strong>Preço:</strong> {courseData.precoUnitario}</p>
                                                        <p><strong>Preço Promocional:</strong> {courseData.precoPromocional}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating mb-3">
                                                            <select className="form-select fc1" name="paymentMethod" id="paymentMethod" required onChange={handlePaymentMethodChange}>
                                                                <option value="">Selecione o Método de Pagamento</option>
                                                                <option value="BCI">BCI</option>
                                                                <option value="Mpesa">Mpesa</option>
                                                            </select>
                                                            <label htmlFor="paymentMethod" className="form-label">Método de Pagamento</label>
                                                        </div>
                                                    </div>
                                                    {selectedPaymentMethod && (
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control fc1" name="accountNumber" id="accountNumber" value={accountNumber} readOnly />
                                                                <label htmlFor="accountNumber" className="form-label">Número da Conta</label>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="col-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control fc1" onChange={handleChange} name="paymentDetails" id="paymentDetails" placeholder="Detalhes do Pagamento" required />
                                                            <label htmlFor="paymentDetails" className="form-label">Transiction ID</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="text-muted">Após o pagamento, submeta o comprovativo para <a href="mailto:payment@willowlanguage.com">payment@willowlanguage.com</a>.</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn-submit-2 btn btn-primary w-100" type="submit">
                                                            <span class="btn-text">Concluir Inscrição</span>
                                                            <div class="spinner-border spinner-wrapper-2 d-none ms-2" style={{ width: "20px", height: "20px" }} role="status">
                                                                <span class="visually-hidden">...</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </form>
            </main>
            <Footer subUrl={true}/>
        </div>
    );
};

export default SignUp;