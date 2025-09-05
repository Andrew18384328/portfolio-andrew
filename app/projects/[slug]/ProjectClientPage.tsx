"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"
import { projectsData } from "@/lib/projectsData"

export default function ProjectClientPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-[#0B3D91] hover:text-[#17A2B8] transition-colors">
              Anthony Zappala
            </Link>
            <Link href="/#projects" className="flex items-center text-gray-700 hover:text-[#0B3D91] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-[#0B3D91] to-[#17A2B8] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{project.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">{project.type}</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">{project.year}</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">{project.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div
                  className={`w-full h-64 ${
                    image.imageBg === "white" ? "bg-white" : image.imageBg === "black" ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    className={`w-full h-full ${image.imageStyle === "contain" ? "object-contain" : "object-cover"}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B3D91] mb-6">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill) => (
                <Badge key={skill} className="bg-[#17A2B8] hover:bg-[#138496] text-white px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0B3D91] mb-6">Project Overview</h3>
            <div className="prose prose-lg max-w-none">
              {project.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">Interested in Learning More?</h3>
            <p className="text-gray-600 mb-6">
              I'd be happy to discuss this project in detail or explore how I can use these skills as an employee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-[#0B3D91] hover:bg-[#17A2B8] text-white px-8 py-3">Get In Touch</Button>
              </Link>
              <Link href="/#projects">
                <Button
                  variant="outline"
                  className="border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-8 py-3 bg-transparent"
                >
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
