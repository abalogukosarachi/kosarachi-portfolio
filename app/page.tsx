"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "./actions";

const initialContactState: ContactFormState = {
  success: false,
  message: "",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Kosarachi Portfolio - Home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold tracking-tight text-white">
              KF
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-zinc-950 sm:block">
              Kosarachi Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-zinc-950 transition-colors hover:text-zinc-500"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Services
            </a>

            <a
              href="#skills"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 md:inline-flex"
          >
            Let’s Work Together
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-950 transition hover:border-zinc-950 md:hidden"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span className="text-xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                About
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                Services
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white"
              >
                Let’s Work Together
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-32"
      >
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Hello, I’m
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Abalogu Kosarachi Favour
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-zinc-700 sm:text-2xl">
            Web Developer | UI/UX Designer | Virtual Assistant | Customer
            Support Specialist
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            I create thoughtful digital experiences and provide reliable
            professional support for businesses, individuals, and growing
            brands.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              View My Work
            </a>

            <a
              href="/Kosarachi-Favour-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-950"
            >
              View My CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-950"
            >
              Let’s Work Together
            </a>
          </div>
        </div>

        {/* Hero Photo */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-sm">
            <Image
              src="/images/profile.jpg"
              alt="Abalogu Kosarachi Favour"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About Me
            </p>

            <h2 className="mt-3 max-w-sm text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Creating with purpose, learning with intention.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-zinc-700">
              I’m Abalogu Kosarachi Favour, a Web Developer, UI/UX Designer,
              Virtual Assistant, and Customer Support Specialist with a
              growing passion for technology and digital experiences.
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              I enjoy combining creativity, problem-solving, technology, and
              communication to create digital solutions that are clear,
              functional, and easy to use. Whether I’m building a website,
              designing an interface, supporting a business, or communicating
              with customers, I approach my work with attention to detail,
              professionalism, and a willingness to keep learning.
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              My goal is to create work that is not only visually appealing,
              but also useful and purposeful — helping people and businesses
              communicate better, serve their customers, and build stronger
              digital experiences.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-sm font-semibold text-zinc-950">
                  Detail-oriented
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  I pay attention to structure, clarity, and the small details
                  that improve the overall experience.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-sm font-semibold text-zinc-950">
                  User-focused
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  I think about how people will interact with and experience
                  the work I create.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-sm font-semibold text-zinc-950">
                  Always learning
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  I continuously develop my technical, creative, and
                  professional skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            What I can help you with.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            I combine technical, creative, and professional skills to provide
            practical digital solutions and dependable support.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              number: "01",
              title: "Web Development",
              description:
                "Building clean, responsive, and functional websites with a focus on usability, structure, and a polished digital experience.",
              skills:
                "HTML · CSS · JavaScript · React · Next.js",
            },
            {
              number: "02",
              title: "UI/UX Design",
              description:
                "Designing clear and user-focused interfaces, layouts, wireframes, and digital experiences that are simple and enjoyable to use.",
              skills:
                "UI/UX · Wireframing · Prototyping · Responsive Design",
            },
            {
              number: "03",
              title: "Virtual Assistance",
              description:
                "Providing organized digital and administrative support to help tasks, communication, and everyday workflows stay on track.",
              skills:
                "Google Workspace · Microsoft Office · AI Productivity",
            },
            {
              number: "04",
              title: "Customer Support",
              description:
                "Communicating with customers professionally and helping create positive, clear, and helpful support experiences.",
              skills:
                "Communication · Problem-solving · Customer Care",
            },
          ].map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white">
                {service.number}
              </div>

              <h3 className="mt-7 text-xl font-semibold text-zinc-950">
                {service.title}
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-zinc-600">
                {service.description}
              </p>

              <p className="mt-5 text-sm font-medium text-zinc-500">
                {service.skills}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Tools and skills I’m building with.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              A growing combination of technical, design, and professional
              skills that I use to create useful digital experiences and
              provide dependable support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white">
                01
              </div>

              <h3 className="mt-7 text-xl font-semibold text-zinc-950">
                Development
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Building responsive and functional websites with modern web
                technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white">
                02
              </div>

              <h3 className="mt-7 text-xl font-semibold text-zinc-950">
                Design
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Creating clear, user-focused interfaces and layouts with
                attention to usability and visual structure.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "UI/UX",
                  "Wireframing",
                  "Prototyping",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white">
                03
              </div>

              <h3 className="mt-7 text-xl font-semibold text-zinc-950">
                Professional
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Supporting businesses and customers through organized
                communication, productivity, and problem-solving.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Virtual Assistance",
                  "Customer Support",
                  "Google Workspace",
                  "Microsoft Office",
                  "AI Productivity",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Selected work.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            A selection of digital projects I’ve built and developed as I
            continue growing my skills in web development and design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Ann's Kitchen */}
          <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg">
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
              <Image
                src="/images/anns-kitchen.png"
                alt="Ann's Kitchen website screenshot"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                Web Development
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                Ann’s Kitchen
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                A responsive restaurant website created to present the brand,
                menu, and ordering experience in a clean and accessible way.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href="https://ztrf6qzq5augu.kimi.page?sharetype=link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </article>

          {/* Nri Oma Kitchen */}
          <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg">
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
              <Image
                src="/images/nri-oma-kitchen.png"
                alt="Nri Oma Kitchen website screenshot"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                Web Development
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                Nri Oma Kitchen
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                A modern restaurant website project created to showcase
                Nigerian food, strengthen the brand presentation, and provide
                a simple digital ordering experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Responsive Design",
                  "UI Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href="https://nri-oma-kitchen.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 bg-zinc-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Contact
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s create something meaningful together.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                Whether you have a project in mind, need digital support, or
                would simply like to connect, I&apos;d be happy to hear from
                you.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:favourabalogu.dev@gmail.com"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600"
                >
                  <p className="text-sm font-semibold text-zinc-400">
                    Email
                  </p>

                  <p className="mt-1 break-all font-medium text-white">
                    favourabalogu.dev@gmail.com
                  </p>
                </a>

                <a
                  href="https://wa.me/2347040078069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600"
                >
                  <p className="text-sm font-semibold text-zinc-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-medium text-white">
                    +234 704 007 8069
                  </p>
                </a>

                <a
                  href="https://github.com/abalogukosarachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600"
                >
                  <p className="text-sm font-semibold text-zinc-400">
                    GitHub
                  </p>

                  <p className="mt-1 font-medium text-white">
                    github.com/abalogukosarachi
                  </p>
                </a>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm font-semibold text-zinc-400">
                    LinkedIn
                  </p>

                  <p className="mt-1 font-medium text-zinc-500">
                    LinkedIn profile coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-6 text-zinc-950 shadow-xl sm:p-8">
              <h3 className="text-2xl font-bold">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Tell me a little about what you need and how I can help.
              </p>

              <form
                action={formAction}
                className="mt-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>

                {state.message && (
                  <p
                    className={`text-center text-sm leading-5 ${
                      state.success
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                    aria-live="polite"
                  >
                    {state.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Abalogu Kosarachi Favour. All rights
            reserved.
          </p>

          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}