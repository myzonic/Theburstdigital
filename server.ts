import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('dist'));

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@theburstdigital.co.uk',
    pass: 'Ross@786',
  },
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const generateEmailTemplate = (data: FormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; }
        .header { background: linear-gradient(135deg, #012169 0%, #0a1a4d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .content { background: white; padding: 30px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 14px; font-weight: bold; color: #012169; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; border-bottom: 2px solid #C8102E; padding-bottom: 8px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #012169; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .field-value { color: #555; font-size: 14px; padding: 10px; background: #f3f4f6; border-left: 3px solid #C8102E; border-radius: 4px; }
        .footer { background: #012169; color: white; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
        .badge { display: inline-block; background: #C8102E; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .message-box { background: #f0f9ff; border-left: 4px solid #0084d6; padding: 15px; border-radius: 4px; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🚀 BURST DIGITAL</div>
          <p style="margin: 0; font-size: 12px; opacity: 0.9;">New Project Enquiry Received</p>
        </div>

        <div class="content">
          <div class="section">
            <div class="section-title">📋 Client Information</div>
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #012169; text-decoration: none;">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value"><a href="tel:${escapeHtml(data.phone)}" style="color: #012169; text-decoration: none;">${escapeHtml(data.phone)}</a></div>
            </div>
            ${data.company ? `
            <div class="field">
              <div class="field-label">Company</div>
              <div class="field-value">${escapeHtml(data.company)}</div>
            </div>
            ` : ''}
          </div>

          <div class="section">
            <div class="section-title">💼 Project Details</div>
            <div class="field">
              <div class="field-label">Service Required</div>
              <div class="field-value">${escapeHtml(data.service)}</div>
            </div>
            <div class="field">
              <div class="field-label">Estimated Budget</div>
              <div class="field-value"><span class="badge">${escapeHtml(data.budget)}</span></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">💬 Project Message</div>
            <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
          </div>

          <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; border-radius: 4px; font-size: 13px;">
            <strong style="color: #166534;">✅ Action Required:</strong> Review this enquiry and contact the client at your earliest convenience.
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0 0 10px 0;">
            <strong>Burst Digital Ltd</strong><br>
            Fleet, Hampshire • United Kingdom<br>
            <a href="https://theburstdigital.co.uk" style="color: #C8102E; text-decoration: none;">theburstdigital.co.uk</a>
          </p>
          <p style="margin: 0; font-size: 11px; opacity: 0.8;">
            This is an automated enquiry forwarding system. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const data: FormData = req.body;

    const mailOptions = {
      from: 'contact@theburstdigital.co.uk',
      to: 'Ross@theburstdigital.co.uk',
      subject: `New Project Enquiry: ${data.service} (${data.budget})`,
      html: generateEmailTemplate(data),
      replyTo: data.email,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
