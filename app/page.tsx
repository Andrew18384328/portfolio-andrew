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
    year: "2021-2022",
    title: "Research Assistant",
    organization: "Koppes LNNR Lab",
    type: "Research",
    description: "Designed and analyzed neuron signals in custom organ-on-chips. Earned 2 PEAK awards to complete research projects for organ-on-chip design.",
  },
  {
    year: "2023",
    title: "Electrochemical Engineering Co-op",
    organization: "24M",
    type: "experience",
    description:
      "Screened and tested silicon-based battery materials, optimized slurry formulations, and automated data analysis with custom Python scripts",
  },
  {
    year: "2024-2025",
    title: "Process Engineering Co-op",
    organization: "Technip Energies",
    type: "experience",
    description:
      "Reviewed key technical documents, performed equipment calculations, and streamlined process workflow with Python and SQL",
  },
  {
    year: "2025",
    title: "Chemical Engineering Graduate",
    organization: "Northeastern University",
    type: "education",
    description: "Bachelor of Science in Chemical Engineering, Summa Cum Laude, Honors",
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
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-xl text-[#0B3D91] hover:text-[#17A2B8] transition-colors cursor-pointer"
            >
              Anthony Zappala
            </button>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                Projects
              </a>
              <a href="#resume" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                Resume
              </a>
              <Link href="/references" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                References
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B3D91] to-[#17A2B8] text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Headshot */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                <div className="relative">
                  <div className="w-80 h-auto md:w-96 md:h-auto rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src="/prof_headshot_cropped copy 2.png"
                      alt="Anthony Zappala - Professional headshot of a chemical engineer"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#17A2B8]/30 to-transparent blur-xl -z-10 scale-110"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="opacity-0 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Anthony Zappala</h1>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-100">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-blue-100">Chemical Engineer</h2>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-200">
                <p className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed text-blue-50">
                  Recent chemical engineering graduate passionate about sustainability, process design, and automation.
                </p>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-300">
                <Button
                  size="lg"
                  className="bg-[#17A2B8] hover:bg-[#138496] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
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
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-6">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                A recent Chemical Engineering graduate from Northeastern University with a passion for developing
                innovative solutions that connect traditional chemical processes with modern, sustainable engineering
                practices. My experience spans process design, simulation, and optimization, with a strong focus on
                sustainability and energy efficiency.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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
                  <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3D91] mb-4">Technical Skills</h3>
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
                      <div className="w-2 h-2 bg-[#17A2B8] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Engineering Skills */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3D91] mb-4">Engineering Expertise</h3>
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
                      <div className="w-2 h-2 bg-[#17A2B8] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3D91] mb-4">Professional Skills</h3>
                </div>
                <div className="space-y-3">
                  {["Problem-Solving", "Clear Communication", "Teamwork", "Presentations", "Strategic Thinking", "Detail Oriented"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-[#17A2B8] rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  <h3 className="text-xl font-bold text-[#0B3D91] mb-3 group-hover:text-[#17A2B8] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4 flex-grow">{project.summary}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-[#17A2B8]/10 text-[#17A2B8] hover:bg-[#17A2B8]/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                        +{project.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center text-[#0B3D91] group-hover:text-[#17A2B8] transition-colors duration-300 mt-auto">
                    <span className="text-sm font-semibold">View Project</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Interested in learning more about my work or think I could be a good fit for your team?
            </p>
            <Button
              size="lg"
              className="bg-[#0B3D91] hover:bg-[#17A2B8] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-6">Resume</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
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
                  className="border-[#17A2B8] text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent"
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
                  className="border-[#17A2B8] text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download References PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0B3D91] mb-8 text-center">Education & Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#17A2B8] rounded-full"></div>

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
                            className={`${item.type === "education" ? "bg-[#0B3D91]" : "bg-[#17A2B8]"} text-white mr-3`}
                          >
                            {item.type === "education" ? "Education" : "Experience"}
                          </Badge>
                          <span className="text-sm font-semibold text-gray-500">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#0B3D91] mb-2">{item.title}</h4>
                        <p className="text-[#17A2B8] font-semibold mb-3">{item.organization}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#17A2B8] rounded-full border-4 border-white shadow-lg"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities or answering questions about my work. Feel free to
              reach out!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:anthonyzappala1@gmail.com"
                  className="text-[#17A2B8] hover:text-[#138496] transition-colors"
                >
                  anthonyzappala1@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mb-4">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/anthony-zappala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#17A2B8] hover:text-[#138496] transition-colors"
                >
                  linkedin.com/in/anthony-zappala
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <a href="tel:508-530-8842" className="text-[#17A2B8] hover:text-[#138496] transition-colors">
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
                  <Badge key={interest} variant="secondary" className="bg-[#17A2B8]/10 text-[#17A2B8]">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B3D91] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Anthony Zappala</h3>
            <p className="text-blue-200 mb-6">Automation | Process Improvement | Sustainability</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:anthonyzappala1@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/anthony-zappala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-800">
              <p className="text-blue-200 text-sm">
                © 2025 Anthony Zappala. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
