"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Calculator,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Award,
  Clock,
  MapPin,
  ExternalLink,
  School,
  UserCheck,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react"

export default function SchoolPortal() {
  const branches = [
    {
      name: "Himmatnagar",
      description: "Main Branch Campus",
      icon: School,
      color: "bg-blue-500",
      students: "1,200+",
      link: "/himmatnagar",
    },
    {
      name: "Talod",
      description: "Secondary Branch Campus",
      icon: School,
      color: "bg-green-500",
      students: "800+",
      link: "/talod",
    },
  ]

  const tools = [
    {
      name: "Student Management",
      description: "Manage student records, admissions, and profiles",
      icon: Users,
      color: "bg-blue-500",
      link: "/student-management",
    },
    {
      name: "Grade Calculator",
      description: "Calculate grades, GPA, and academic performance",
      icon: Calculator,
      color: "bg-purple-500",
      link: "/grade-calculator",
    },
    {
      name: "Attendance Tracker",
      description: "Track daily attendance for students and staff",
      icon: UserCheck,
      color: "bg-green-500",
      link: "/attendance",
    },
    {
      name: "Timetable Manager",
      description: "Create and manage class schedules and timetables",
      icon: Calendar,
      color: "bg-orange-500",
      link: "/timetable",
    },
    {
      name: "Library System",
      description: "Manage books, issue/return tracking",
      icon: BookOpen,
      color: "bg-indigo-500",
      link: "/library",
    },
    {
      name: "Exam Management",
      description: "Schedule exams, manage question papers",
      icon: FileText,
      color: "bg-red-500",
      link: "/exams",
    },
    {
      name: "Result Portal",
      description: "Publish and manage student results",
      icon: Award,
      color: "bg-yellow-500",
      link: "/results",
    },
    {
      name: "Fee Management",
      description: "Track fee payments and generate receipts",
      icon: ClipboardList,
      color: "bg-pink-500",
      link: "/fees",
    },
    {
      name: "Reports & Analytics",
      description: "Generate academic and administrative reports",
      icon: BarChart3,
      color: "bg-cyan-500",
      link: "/reports",
    },
    {
      name: "Staff Portal",
      description: "Staff management and payroll system",
      icon: Settings,
      color: "bg-gray-500",
      link: "/staff",
    },
    {
      name: "Event Scheduler",
      description: "Plan and manage school events and activities",
      icon: Clock,
      color: "bg-teal-500",
      link: "/events",
    },
    {
      name: "Notice Board",
      description: "Digital notice board for announcements",
      icon: FileText,
      color: "bg-amber-500",
      link: "/notices",
    },
  ]

  const handleCardClick = (link: string) => {
    // In a real app, you would use Next.js router or window.location
    window.open(link, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">School Management Portal</h1>
          </div>
          <p className="text-gray-600 text-lg">Access all your school tools and resources in one place</p>
        </div>

        {/* Branch Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <MapPin className="h-6 w-6" />
            Our Branches
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((branch) => {
              const IconComponent = branch.icon
              return (
                <Card
                  key={branch.name}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-blue-300"
                  onClick={() => handleCardClick(branch.link)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full ${branch.color} text-white`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{branch.name}</CardTitle>
                          <CardDescription className="text-sm">{branch.description}</CardDescription>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-sm">
                        {branch.students} Students
                      </Badge>
                      <span className="text-sm text-gray-500">Click to access</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Management Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Card
                  key={tool.name}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group border hover:border-blue-300"
                  onClick={() => handleCardClick(tool.link)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-3 rounded-full ${tool.color} text-white group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2024 School Management System. All tools in one portal.</p>
        </div>
      </div>
    </div>
  )
}
