'use client';

import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Contato
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ul className="mt-6 space-y-1 text-sm text-[#E1E0CC]/80">
          <li>{contact.phone}</li>
          <li>{contact.email}</li>
          <li>
            <a href={contact.github} className="underline underline-offset-4">
              {contact.github}
            </a>
          </li>
          <li>{contact.location}</li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/60">
              Nome
            </label>
            <input
              id="name"
              name="name"
              required
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[#E1E0CC] outline-none focus:border-white/40"
            />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[#E1E0CC] outline-none focus:border-white/40"
            />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="subject" className="text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/60">
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              required
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[#E1E0CC] outline-none focus:border-white/40"
            />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/60">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[#E1E0CC] outline-none focus:border-white/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="justify-self-start rounded-full bg-primary px-6 py-2 text-sm font-medium text-black transition-opacity disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>
          {status === 'sent' && <p role="status">Mensagem enviada.</p>}
          {status === 'error' && <p role="alert">Falha ao enviar. Tente novamente.</p>}
        </form>
      </ScrollReveal>
    </section>
  );
}
