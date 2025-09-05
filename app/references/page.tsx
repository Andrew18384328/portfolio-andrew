"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

const references = [
  {
    name: "Elizabeth Lefevre",
    title: "Director of Process Engineering",
    company: "Technip Energies",
    relationship: "Co-op Manager",
    email: "elefevre@verizon.net",
    phone: "(857) 222-6438",
    linkedin: "linkedin.com/in/elizabeth-lefevre/",
    description:
      "Supervised my work on process workflow automation and technical document review. Can speak to my Python and Excel programming skills and ability to perform detailed and thorough work",
  },
  {
    name: "Benjamin Fraser Reichner",
    title: "Process Engineer",
    company: "Technip Energies",
    relationship: "Coworker and Mentor during Co-op",
    email: "benjamin.reichner@ten.com",
    phone: "(215) 429-4293",
    linkedin: "linkedin.com/in/benjamin-fraser-reichner-383b9a115/",
    description:
      "Mentored my process engineering co-op. Can speak to my skills with process engineering software, ability to complete client deliverables, and analyze technical documents.",
  },
  {
    name: "Dr. Xiaoming Liu, Ph.D.",
    title: "Manager of Advanced R&D",
    company: "24M Technologies",
    relationship: "Co-op Manager",
    email: "xliu@24-m.com",
    linkedin: "linkedin.com/in/xiaoming-liu88/",
    description:
      "Supervised my electrochemical engineering co-op. Can speak to my ability to conduct electrochemical research, organize tasks, and give clear presentations.",
  },
  {
    name: "Daniel Carter",
    title: "Process Engineer",
    company: "Technip Energies",
    relationship: "Coworker and Mentor during Co-op",
    email: "daniel.carter@ten.com",
    phone: "(781) 707-6596",
    linkedin: "linkedin.com/in/daniel-carter-12bbb2196/",
    description:
      "Mentored my process engineering co-op. Can speak to my skills with Excel, Python, and SQl, ability to organize and spearhead projects, and passion for improving workflows.",
  },
  {
    name: "Daniel Salazar",
    title: "Battery Engineer",
    company: "24M Technologies",
    relationship: "Co-op Supervisor",
    email: "dsalazar@24-m.com",
    linkedin: "linkedin.com/in/danny-salazar-neu/",
    description:
      "Mentored my electrochemical engineering co-op. Can speak to my dry laboratory skills, materials characterization experience, and electrochemical knowledge.",
  },
  {
    name: "Dr. Kyla Nichols, Ph.D.",
    title: "Postdoctoral Student at MIT",
    company: "Northeastern University",
    relationship: "Lab and Project Mentor",
    email: "nichols.ky@northeastern.edu",
    phone: "(413) 329-9774",
    linkedin: "linkedin.com/in/kylanichols/",
    description:
      "Supervised and mentored my experience in the Koppes LNNR lab at Northeastern. Can speak to my laboratory skills, independent project leadership, and data analysis experience.",
  },
]

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="font-bold text-xl text-[#0B3D91] hover:text-[#17A2B8] transition-colors cursor-pointer"
            >
              Anthony Zappala
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                Projects
              </Link>
              <Link href="/#resume" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                Resume
              </Link>
              <Link href="/references" className="text-[#0B3D91] font-semibold">
                References
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-[#0B3D91] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0B3D91] to-[#17A2B8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional References</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Below are professional references who can speak to my technical skills, work ethic, and contributions in
              academic and industry settings.
            </p>
            <a href="https://87hagbtmk8vue0io.public.blob.vercel-storage.com/references/Anthony_Zappala_References.pdf" download="Anthony_Zappala_References.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Button
                size="lg"
                className="bg-white text-[#0B3D91] hover:bg-gray-100 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download References PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {reference.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3D91] mb-2">{reference.name}</h3>
                    <p className="text-[#17A2B8] font-semibold mb-1">{reference.title}</p>
                    <p className="text-gray-600 font-medium mb-2">{reference.company}</p>
                    <p className="text-sm text-gray-500 italic">{reference.relationship}</p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{reference.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-[#17A2B8] mr-3" />
                      <a
                        href={`mailto:${reference.email}`}
                        className="text-gray-700 hover:text-[#17A2B8] transition-colors"
                      >
                        {reference.email}
                      </a>
                    </div>
                    {reference.phone && (
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-[#17A2B8] mr-3" />
                        <a
                          href={`tel:${reference.phone}`}
                          className="text-gray-700 hover:text-[#17A2B8] transition-colors"
                        >
                          {reference.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <Linkedin className="w-4 h-4 text-[#17A2B8] mr-3" />
                      <a
                        href={`https://${reference.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#17A2B8] transition-colors"
                      >
                        {reference.linkedin}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              All references have given permission to be contacted regarding my professional qualifications. Please feel
              free to reach out to them directly or contact me if you need additional references.
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-[#0B3D91] hover:bg-[#17A2B8] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B3D91] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Anthony Zappala</h3>
            <p className="text-blue-200 mb-6">Chemical Engineer | Process Design | Sustainability</p>
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
