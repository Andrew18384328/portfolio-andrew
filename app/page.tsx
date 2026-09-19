"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ArrowRight, Download, Mail, Linkedin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    id: "electrochemical-nutrient-recovery",
    slug: "electrochemical-nutrient-recovery",
    title: "Electrochemical Nutrient Recovery from Wastewater",
    summary:
      "Engineered an annular electrochemical reactor system with a rotating magnesium electrode to recover nitrogen and phosphorus from wastewater as struvite, a slow-release fertilizer. Integrated process modeling, safety analysis (FMEA), and economic evaluation to optimize yield and energy use, projecting $1.5 MM/year revenue potential.",
    skills: ["Electrochemistry", "Aspen Plus", "Process Design", "Excel", "FMEA", "Economic Analysis"],
    image: "/struvite_fancy_BFD.png",
    imageStyle: "contain", // Options: "cover", "contain"
    imageBg: "white", // Options now include: "gray", "white", "black"
  },
  {
    id: "pid-tuning-heat-exchanger",
    slug: "pid-tuning-heat-exchanger",
    title: "PID Tuning for Heat Exchanger Systems",
    summary:
      "Developed MATLAB Simulink models for helicoil and shell-and-tube heat exchangers, implementing PID control loops. Optimized tuning parameters to minimize oscillations and overshoot, improving process stability and energy efficiency.",
    skills: ["MATLAB Simulink", "Process Control", "PID Tuning", "Process Safety"],
    image: "/Helcoil OVERALL PFD.png",
    imageStyle: "contain", // This one looks better with full image shown
    imageBg: "white", // White background for process diagrams
  },
  {
    id: "monte-carlo-atomic-ordering",
    slug: "monte-carlo-atomic-ordering",
    title: "Monte Carlo Simulation of Atomic Ordering",
    summary:
      "Designed and implemented a Monte Carlo simulation in Python to model the disorder-to-order transformation in MnAl alloys with Cu additives for rare-earth-free magnet applications. Calculated bond interaction energies using PSI4 library, fit results to Lennard-Jones potentials, and analyzed ordering stability improvements.",
    skills: ["Python", "Statistical Mechanics", "Computational Modeling", "Materials Research"],
    image: "/Figure 1_paper.png",
    imageStyle: "cover", // Scientific figures often look good cropped
    imageBg: "white", // Changed to black background for better contrast
  },
  {
    id: "acrolein-production",
    slug: "acrolein-production",
    title: "Acrolein Production from Propylene Oxidation",
    summary:
      "Designed a 50,000 MT/year industrial plant producing 99 wt% acrolein from polymer-grade propylene using catalytic packed-bed reactors and vacuum distillation. Simulated in Aspen Plus, performed kinetic and thermodynamic modeling, and delivered an economic analysis yielding $409.9 MM NPV.",
    skills: ["Aspen Plus", "Process Simulation", "Economic Analysis", "Thermodynamics", "Kinetics"],
    image: "/Acrolein_PFD_12_7_24_V3 (2).png",
    imageStyle: "contain", // Process flow diagrams usually need full visibility
    imageBg: "white", // White background for process flow diagrams
  },
  {
    id: "reaction-kinetics-mechanism",
    slug: "reaction-kinetics-mechanism",
    title: "Reaction Kinetics Mechanism Identification",
    summary:
      "Analyzed simulated kinetic data to determine rate laws, activation energies, and mechanisms for an unknown catalyzed reaction. Applied integral and differential methods alongside Python-based curve fitting to estimate forward/reverse rate constants and validate kinetic models.",
    skills: ["Kinetics", "Python", "Data Analysis", "Mechanism Determination"],
    image: "/kinetic plot.png",
    imageStyle: "contain", // Charts and graphs can work well cropped
    imageBg: "white", // Gray background for charts
  },
]

const timelineData = [
  {
    year: "August 2025 – December 2025",
    title: "Electrical Engineer",
    organization: "Northeastern Electric Racing",
    type: "experience",
    description: "Customized a steering wheel PCB in Altium with integrated microcontroller, buttons, and LEDs, for driver input and status indications.",
  },
  {
    year: "January 2026 – June 2026",
    title: "Electrical Engineering Co-op",
    organization: "Bechtel Medical Inc.",
    type: "experience",
    description:
      "Worked on a student engineering team to automate air filter pleat separation, handling both the compaction mechanism and the 24V power distribution.",
  },
  {
    year: "August 2025 – Present",
    title: "Electrical/Computer Engineer",
    organization: "Generate Product Development Studio",
    type: "experience",
    description:
      "Worked on a student engineering team to automate air filter pleat separation, handling both the compaction mechanism and the 24V power distribution.",
  },
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F1F2EA]/90 backdrop-blur-sm border-b border-[#D7DED1] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-xl text-[#1D2721] hover:text-[#A8B79D] transition-colors cursor-pointer"
            >
              Andrew Amante
            </button>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-[#465047] hover:text-[#1D2721] transition-colors">
                About
              </a>
              <a href="#projects" className="text-[#465047] hover:text-[#1D2721] transition-colors">
                Projects
              </a>
              <a href="#resume" className="text-[#465047] hover:text-[#1D2721] transition-colors">
                Resume
              </a>
              <Link href="/references" className="text-[#465047] hover:text-[#1D2721] transition-colors">
                References
              </Link>
              <a href="#contact" className="text-[#465047] hover:text-[#1D2721] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#394634] via-[#495741] to-[#697A61] text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Headshot */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                <div className="relative">
                  <div className="w-80 h-auto md:w-96 md:h-auto rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src="/andrew-amante-headshot.jpg"
                      alt="Andrew Amante - Professional headshot of a computer engineer"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A8B79D]/30 to-transparent blur-xl -z-10 scale-110"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="opacity-0 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Andrew Amante</h1>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-100">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-[#E1E8DA]">Computer Engineering</h2>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-200">
                <p className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed text-[#EEF2E9]">
                  Recent chemical engineering graduate passionate about sustainability, process design, and automation.
                </p>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-300">
                <Button
                  size="lg"
                  className="bg-[#A8B79D] hover:bg-[#879A7A] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F1F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2721] mb-6">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-[#465047] leading-relaxed mb-8">
                A recent Chemical Engineering graduate from Northeastern University with a passion for developing
                innovative solutions that connect traditional chemical processes with modern, sustainable engineering
                practices. My experience spans process design, simulation, and optimization, with a strong focus on
                sustainability and energy efficiency.
              </p>
              <p className="text-lg md:text-xl text-[#465047] leading-relaxed">
                Using advanced simulation tools and data-driven approaches, I work on challenges spanning
                electrochemical systems and industrial process design. My projects combine technical analysis with
                practical, results-oriented strategies, drawing from both academic research and industry experience
                gained during internships and collaborative work.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#1D2721] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D2721] mb-4">Technical Skills</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Aspen Plus and KGTower",
                    "MATLAB Simulink",
                    "Python and SQL",
                    "Excel VBA and Microsoft Access",
                    "Wet Lab",
                    "Materials Characterization",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-[#A8B79D] rounded-full mr-3"></div>
                      <span className="text-[#465047] font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Engineering Skills */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#1D2721] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D2721] mb-4">Engineering Expertise</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Process Design",
                    "Process Control",
                    "Kinetics",
                    "Thermodynamics",
                    "Mass Transfer",
                    "AI Automation",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-[#A8B79D] rounded-full mr-3"></div>
                      <span className="text-[#465047] font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#1D2721] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D2721] mb-4">Professional Skills</h3>
                </div>
                <div className="space-y-3">
                  {["Problem-Solving", "Clear Communication", "Teamwork", "Presentations", "Strategic Thinking", "Detail Oriented"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-[#A8B79D] rounded-full mr-3"></div>
                        <span className="text-[#465047] font-medium">{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2721] mb-6">Featured Projects</h2>
            <p className="text-lg text-[#667267] max-w-3xl mx-auto">
              Explore my portfolio of chemical engineering projects spanning process design, simulation, sustainability,
              and advanced materials research.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="group block bg-[#FAFBF7] rounded-2xl shadow-lg shadow-[#1D2721]/8 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-48 overflow-hidden flex items-center justify-center ${
                    project.imageBg === "white" ? "bg-white" : project.imageBg === "black" ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - ${project.summary.split(".")[0]}`}
                    className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                      project.imageStyle === "cover" ? "object-cover" : "object-contain"
                    }`}
                  />
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#1D2721] mb-3 group-hover:text-[#A8B79D] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#667267] text-sm leading-relaxed mb-4 line-clamp-4 flex-grow">{project.summary}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-[#A8B79D]/10 text-[#A8B79D] hover:bg-[#A8B79D]/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 text-[#667267] text-xs">
                        +{project.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center text-[#1D2721] group-hover:text-[#A8B79D] transition-colors duration-300 mt-auto">
                    <span className="text-sm font-semibold">View Project</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-[#667267] mb-6">
              Interested in learning more about my work or think I could be a good fit for your team?
            </p>
            <Button
              size="lg"
              className="bg-[#1D2721] hover:bg-[#A8B79D] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-[#F1F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2721] mb-6">Resume</h2>
            <p className="text-lg text-[#667267] max-w-3xl mx-auto mb-8">
              Download my complete resume and references or explore my educational background and professional experience below.
            </p>
            <div className="flex gap-4 justify-center">
            <a href="https://87hagbtmk8vue0io.public.blob.vercel-storage.com/resumes/Anthony_Zappala_Resume.pdf"
              download="Anthony_Zappala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                  size="lg"
                  variant="outline"
                  className="border-[#A8B79D] text-[#A8B79D] hover:bg-[#A8B79D] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume PDF
              </Button>
            </a>
            <a href="https://87hagbtmk8vue0io.public.blob.vercel-storage.com/references/Anthony_Zappala_References.pdf" download="Anthony_Zappala_References.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#A8B79D] text-[#A8B79D] hover:bg-[#A8B79D] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download References PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1D2721] mb-8 text-center">Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#A8B79D] rounded-full"></div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <Badge
                            className={`${item.type === "education" ? "bg-[#1D2721]" : "bg-[#A8B79D]"} text-white mr-3`}
                          >
                            {item.type === "education" ? "Education" : "Experience"}
                          </Badge>
                          <span className="text-sm font-semibold text-gray-500">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#1D2721] mb-2">{item.title}</h4>
                        <p className="text-[#A8B79D] font-semibold mb-3">{item.organization}</p>
                        <p className="text-[#667267] text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#A8B79D] rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2721] mb-6">Get In Touch</h2>
            <p className="text-lg text-[#667267] max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities or answering questions about my work. Feel free to
              reach out!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#1D2721] rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:anthonyzappala1@gmail.com"
                  className="text-[#A8B79D] hover:text-[#879A7A] transition-colors"
                >
                  anthonyzappala1@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#1D2721] rounded-full flex items-center justify-center mb-4">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/anthony-zappala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8B79D] hover:text-[#879A7A] transition-colors"
                >
                  linkedin.com/in/anthony-zappala
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#1D2721] rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <a href="tel:508-530-8842" className="text-[#A8B79D] hover:text-[#879A7A] transition-colors">
                  (508) 530-8842
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h4 className="font-semibold text-gray-900 mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Process Design",
                  "Sustainability",
                  "Simulation",
                  "Research Collaboration",
                  "Industry Consulting",
                ].map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-[#A8B79D]/10 text-[#A8B79D]">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D2721] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Anthony Zappala</h3>
            <p className="text-[#C7D3BF] mb-6">Automation | Process Improvement | Sustainability</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:anthonyzappala1@gmail.com" className="text-[#C7D3BF] hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/anthony-zappala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7D3BF] hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-[#65755D]">
              <p className="text-[#C7D3BF] text-sm">
                © 2025 Anthony Zappala. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
