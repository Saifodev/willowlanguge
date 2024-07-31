const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const myEmail = 'saifodeveloper@gmail.com';
const senha = 'gfzgxwbhaxqufwhm';
const service = 'gmail';

// Rota para submissão do formulário de newsletter
app.post('/subscribe-newsletter', (req, res) => {
    const { newsletter_email } = req.body;

    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: myEmail,
            pass: senha,
        },
    });


    const mailOptions = {
        from: myEmail,
        to: myEmail,
        subject: 'Inscrição na Newsletter',
        html: `
            <body style='background-color: antiquewhite; padding: 2rem; font-family: "Courier New", Courier, monospace;'>
                <h2>Nova inscrição na Newsletter</h2>
                <p>Email: ${newsletter_email}</p>
                <p>Willow language</p>
            </body>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: error.toString() });
        }
        res.status(200).json({ success: true, message: 'Inscrição realizada com sucesso.' });
    });
});

// Rota para submissão do formulário de contacto
app.post('/send-contact', (req, res) => {
    const { name, phone, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: myEmail,
            pass: senha,
        },
    });

    const mailOptions = {
        from: myEmail,
        to: myEmail,
        subject: `Nova mensagem de contacto: ${subject}`,
        html: `
            <body style='background-color: antiquewhite; padding: 2rem; font-family: "Courier New", Courier, monospace;'>
                <h2>Nova Mensagem de contacto</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Telefone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong> ${message}</p>
            </body>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: error.toString() });
        }
        res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso.' });
    });
});

// Rota existente para envio de email do teste diagnóstico
app.post('/send-email', (req, res) => {
    const {
        name,
        email,
        phone,
        source,
        modalidade,
        regime,
        course,
        paymentMethod,
        paymentDetails,
    } = req.body;

    let testLink;
    if (course.toLowerCase().includes('inglês')) {
        testLink = 'https://docs.google.com/forms/d/e/1FAIpQLSermw6QtOCJlydnUO0sRluo5F7PdsQdQAlC3jWMBJMZo5QwSQ/viewform';
    } else if (course.toLowerCase().includes('português')) {
        testLink = 'https://example.com/teste-diagnostico-portugues';
    } else if (course.toLowerCase().includes('francês')) {
        testLink = 'https://example.com/teste-diagnostico-frances';
    } else if (course.toLowerCase().includes('espanhol')) {
        testLink = 'https://example.com/teste-diagnostico-espanhol';
    } else {
        testLink = 'https://example.com/teste-diagnostico';
    }

    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: myEmail,
            pass: senha,
        },
    });

    const mailOptionsToSelf = {
        from: myEmail,
        to: myEmail,
        subject: 'Inscrição para Teste Diagnóstico',
        html: `
            <body style='background-color: antiquewhite; padding: 2rem; font-family: "Courier New", Courier, monospace;'>
                <h2>Inscrição para Teste Diagnóstico</h2>
                <p>Alguém solicitou um teste diagnóstico para o ${course} na Willow Language School.</p>
                <p>Abaixo estão os seus detalhes:</p>
                <div style='padding: 2rem; background-color: aliceblue; width: fit-content; border-radius: 12px;'>
                    <table>
                        <tr>
                            <td><strong>Nome: </strong></td>
                            <td>${name}</td>
                        </tr>
                        <tr>
                            <td><strong>Email: </strong></td>
                            <td>${email}</td>
                        </tr>
                        <tr>
                            <td><strong>Telefone: </strong></td>
                            <td>${phone}</td>
                        </tr>
                        <tr>
                            <td><strong>Curso: </strong></td>
                            <td>${course}</td>
                        </tr>
                        <tr>
                            <td><strong>Modalidade: </strong></td>
                            <td>${modalidade}</td>
                        </tr>
                        <tr>
                            <td><strong>Regime: </strong></td>
                            <td>${regime}</td>
                        </tr>
                        <tr>
                            <td><strong>Método de pagamento: </strong></td>
                            <td>${paymentMethod}</td>
                        </tr>
                        <tr>
                            <td><strong>ID da transação: </strong></td>
                            <td>${paymentDetails}</td>
                        </tr>
                        <tr>
                            <td><strong>Nos conheceu a partir do: </strong></td>
                            <td>${source}</td>
                        </tr>
                    </table>
                </div>
                <p>Willow Language School.</p>
            </body>
        `,
    };

    const mailOptionsToParticipant = {
        from: myEmail,
        to: email,
        subject: 'Link para Teste Diagnóstico - Willow Language School',
        html: `
            <body style='background-color: antiquewhite; padding: 2rem; font-family: "Courier New", Courier, monospace;'>
                <h2>Bem-vindo(a) à Willow Language School!</h2>
                <p>Olá ${name},</p>
                <p>Obrigado por se inscrever para o teste diagnóstico de ${course} na Willow Language School.</p>
                <p>Por favor, clique no link abaixo para iniciar o seu teste:</p>
                <p><a href="${testLink}?email=${email}" target="_blank">Iniciar Teste Diagnóstico</a></p>
                <p>Se você tiver alguma dúvida, sinta-se à vontade para nos contatar.</p>
                <p>Willow Language School.</p>
            </body>
        `,
    };

    transporter.sendMail(mailOptionsToSelf, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        transporter.sendMail(mailOptionsToParticipant, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Emails enviados: ' + info.response);
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});