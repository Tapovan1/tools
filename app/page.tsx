"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, School, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const branches = [
    {
      name: "Himmatnagar",
      description: "Main Branch Campus",
      icon: School,
      color: "bg-blue-500",
      
    
      link: "/himmatnagar",
      
    },
    {
      name: "Talod",
      description: "Secondary Branch Campus",
      icon: School,
      color: "bg-green-500",
     
      link: "/talod",
    
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">School Portal</h1>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Select your branch to access all management tools and resources
          </p>
        </div>

        {/* Branch Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6" />
            Choose Your Branch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch) => {
              const IconComponent = branch.icon
              return (
                <Link key={branch.name} href={branch.link}>
                  <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-300 h-full group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-4 rounded-full ${branch.color} text-white group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-2xl mb-2">{branch.name}</CardTitle>
                      <CardDescription className="text-base">{branch.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                     

                      <div className="flex items-center justify-between pt-2">
                        
                        <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700">
                          Access Tools →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-16">
          <p>© 2024 School Management System. Select your branch to continue.</p>
        </div>
      </div>
    </div>
  )
}
