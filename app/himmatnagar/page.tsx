import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HmtTools } from "@/lib/links"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HimmatnagarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Branches
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Himmatnagar Branch</h1>
          <p className="text-gray-600 text-lg">Access all management tools for Himmatnagar campus</p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {HmtTools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Link href={tool.link} key={tool.name} target="_blank" rel="noopener noreferrer">
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group border hover:border-blue-300 w-80 h-52 flex flex-col">
                  <CardHeader className="pb-3 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-3 rounded-full ${tool.color} text-white group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="text-sm leading-relaxed flex-1">
                      {tool.description}
                    </CardDescription>
                    <div className="text-xs text-blue-600 group-hover:text-blue-700 mt-auto">Click to open tool →</div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2024 Himmatnagar Branch - School Management System</p>
        </div>
      </div>
    </div>
  )
}
