
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Globe, 
  Box, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Eye, 
  Download,
  MessageCircle,
  CreditCard,
  User,
  Settings,
  Calendar,
  DollarSign,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock user data - this would come from authentication context
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg"
  };

  // Mock service requests with enhanced data
  const [serviceRequests] = useState([
    {
      id: "REQ-001",
      type: "MVP Development",
      title: "TaskFlow - Project Management App",
      description: "A comprehensive project management tool with team collaboration features",
      status: "In Development",
      progress: 65,
      createdAt: "2024-01-15",
      estimatedCompletion: "2024-02-28",
      price: 4999,
      icon: Code,
      statusColor: "bg-blue-500",
      priority: "High",
      assignedTo: "Development Team A",
      nextMilestone: "Backend Development",
      milestones: [
        { name: "Requirements Analysis", completed: true, date: "2024-01-18" },
        { name: "UI/UX Design", completed: true, date: "2024-01-25" },
        { name: "Backend Development", completed: false, current: true, dueDate: "2024-02-10" },
        { name: "Frontend Development", completed: false, dueDate: "2024-02-20" },
        { name: "Testing & Deployment", completed: false, dueDate: "2024-02-28" }
      ],
      files: [
        { name: "Requirements Document.pdf", size: "2.1 MB", uploadDate: "2024-01-18" },
        { name: "UI Mockups.figma", size: "5.3 MB", uploadDate: "2024-01-25" },
        { name: "API Documentation.pdf", size: "1.8 MB", uploadDate: "2024-02-01" }
      ],
      recentActivity: [
        { action: "Backend API endpoints completed", date: "2024-02-05", type: "update" },
        { action: "Database schema finalized", date: "2024-02-03", type: "milestone" },
        { action: "New file uploaded: API Documentation.pdf", date: "2024-02-01", type: "file" }
      ]
    },
    {
      id: "REQ-002",
      type: "Business Website",
      title: "Restaurant Website with Online Ordering",
      description: "Modern restaurant website with menu display and online ordering system",
      status: "Completed",
      progress: 100,
      createdAt: "2024-01-05",
      estimatedCompletion: "2024-01-20",
      completedAt: "2024-01-20",
      price: 2499,
      icon: Globe,
      statusColor: "bg-green-500",
      priority: "Medium",
      assignedTo: "Development Team B",
      liveUrl: "https://bellavista-restaurant.com",
      milestones: [
        { name: "Template Selection", completed: true, date: "2024-01-06" },
        { name: "Content Integration", completed: true, date: "2024-01-10" },
        { name: "Payment Gateway Setup", completed: true, date: "2024-01-15" },
        { name: "Domain Configuration", completed: true, date: "2024-01-18" },
        { name: "Go Live", completed: true, date: "2024-01-20" }
      ],
      files: [
        { name: "Login Credentials.pdf", size: "256 KB", uploadDate: "2024-01-20" },
        { name: "User Manual.pdf", size: "1.8 MB", uploadDate: "2024-01-20" },
        { name: "SEO Report.pdf", size: "945 KB", uploadDate: "2024-01-20" }
      ],
      recentActivity: [
        { action: "Project completed and delivered", date: "2024-01-20", type: "completion" },
        { action: "Final testing completed", date: "2024-01-19", type: "milestone" },
        { action: "Domain configured successfully", date: "2024-01-18", type: "update" }
      ]
    },
    {
      id: "REQ-003",
      type: "3D Brand Experience",
      title: "Immersive Fashion Showcase",
      description: "3D interactive website showcasing fashion collections with virtual try-on",
      status: "Under Review",
      progress: 25,
      createdAt: "2024-01-20",
      estimatedCompletion: "2024-03-15",
      price: 7999,
      icon: Box,
      statusColor: "bg-yellow-500",
      priority: "High",
      assignedTo: "3D Design Team",
      nextMilestone: "3D Asset Creation",
      milestones: [
        { name: "Concept Development", completed: true, date: "2024-01-22" },
        { name: "3D Asset Creation", completed: false, current: true, dueDate: "2024-02-15" },
        { name: "WebGL Development", completed: false, dueDate: "2024-02-28" },
        { name: "Interactive Features", completed: false, dueDate: "2024-03-10" },
        { name: "Testing & Optimization", completed: false, dueDate: "2024-03-15" }
      ],
      files: [
        { name: "Concept Designs.pdf", size: "12.5 MB", uploadDate: "2024-01-22" },
        { name: "3D Model Preview.mp4", size: "48.2 MB", uploadDate: "2024-02-01" }
      ],
      recentActivity: [
        { action: "3D model preview shared for review", date: "2024-02-01", type: "file" },
        { action: "Concept designs approved", date: "2024-01-25", type: "milestone" },
        { action: "Project requirements clarified", date: "2024-01-22", type: "update" }
      ]
    }
  ]);

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      "Completed": "bg-green-100 text-green-800 border-green-200",
      "In Development": "bg-blue-100 text-blue-800 border-blue-200",
      "Under Review": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "On Hold": "bg-red-100 text-red-800 border-red-200"
    };
    return variants[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getPriorityBadge = (priority: string) => {
    const variants: { [key: string]: string } = {
      "High": "bg-red-100 text-red-800 border-red-200",
      "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Low": "bg-green-100 text-green-800 border-green-200"
    };
    return variants[priority] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const stats = {
    totalProjects: serviceRequests.length,
    activeProjects: serviceRequests.filter(req => req.status === "In Development" || req.status === "Under Review").length,
    completedProjects: serviceRequests.filter(req => req.status === "Completed").length,
    totalSpent: serviceRequests.reduce((sum, req) => sum + req.price, 0),
    avgProgress: Math.round(serviceRequests.reduce((sum, req) => sum + req.progress, 0) / serviceRequests.length)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back, {user.name}! Here's your project overview.</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Link to="/services">
                  <Button>
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Request New Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProjects}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completedProjects}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Invested</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.totalSpent.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.avgProgress}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Service Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>Track the progress and status of all your service requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Projects ({serviceRequests.length})</TabsTrigger>
                  <TabsTrigger value="active">Active ({stats.activeProjects})</TabsTrigger>
                  <TabsTrigger value="completed">Completed ({stats.completedProjects})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  {serviceRequests.map((request) => (
                    <Card key={request.id} className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: request.statusColor.replace('bg-', '#') }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${request.statusColor.replace('500', '100')}`}>
                              <request.icon className={`h-6 w-6 ${request.statusColor.replace('bg-', 'text-').replace('500', '600')}`} />
                            </div>
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">{request.title}</h3>
                                <Badge className={getStatusBadge(request.status)}>
                                  {request.status}
                                </Badge>
                                <Badge className={getPriorityBadge(request.priority)}>
                                  {request.priority}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">{request.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  Created: {new Date(request.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  Due: {new Date(request.estimatedCompletion).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  Team: {request.assignedTo}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">${request.price.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">ID: {request.id}</p>
                          </div>
                        </div>

                        {/* Enhanced Progress Section */}
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-3">
                            <div>
                              <h4 className="font-medium text-gray-900">Project Progress</h4>
                              {request.nextMilestone && (
                                <p className="text-sm text-gray-600">Next: {request.nextMilestone}</p>
                              )}
                            </div>
                            <span className="text-lg font-semibold text-gray-900">{request.progress}%</span>
                          </div>
                          <Progress value={request.progress} className="h-3" />
                        </div>

                        {/* Enhanced Milestones */}
                        <div className="mb-6">
                          <h4 className="font-medium text-gray-900 mb-4">Milestones & Timeline</h4>
                          <div className="space-y-3">
                            {request.milestones.map((milestone, index) => (
                              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                                <div className="flex items-center space-x-3">
                                  {milestone.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : milestone.current ? (
                                    <Clock className="h-5 w-5 text-blue-500" />
                                  ) : (
                                    <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                                  )}
                                  <span className={`font-medium ${milestone.completed ? "text-gray-900" : milestone.current ? "text-blue-700" : "text-gray-500"}`}>
                                    {milestone.name}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-500">
                                  {milestone.date && (
                                    <span className="text-green-600">Completed: {milestone.date}</span>
                                  )}
                                  {milestone.dueDate && !milestone.completed && (
                                    <span>Due: {milestone.dueDate}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Files Section */}
                        {request.files.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-medium text-gray-900 mb-3">Project Files</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {request.files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                  <div className="flex items-center space-x-3">
                                    <FileText className="h-5 w-5 text-gray-500" />
                                    <div>
                                      <span className="text-sm font-medium">{file.name}</span>
                                      <div className="text-xs text-gray-500">
                                        {file.size} • {file.uploadDate}
                                      </div>
                                    </div>
                                  </div>
                                  <Button size="sm" variant="ghost">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Recent Activity */}
                        <div className="mb-6">
                          <h4 className="font-medium text-gray-900 mb-3">Recent Activity</h4>
                          <div className="space-y-2">
                            {request.recentActivity.slice(0, 3).map((activity, index) => (
                              <div key={index} className="flex items-start space-x-3 p-2 rounded">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                  activity.type === 'completion' ? 'bg-green-500' :
                                  activity.type === 'milestone' ? 'bg-blue-500' :
                                  activity.type === 'file' ? 'bg-purple-500' : 'bg-gray-500'
                                }`}></div>
                                <div className="flex-1">
                                  <p className="text-sm text-gray-900">{activity.action}</p>
                                  <p className="text-xs text-gray-500">{activity.date}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Contact Team
                            </Button>
                            {request.liveUrl && (
                              <Button variant="outline" size="sm" asChild>
                                <a href={request.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Live Site
                                </a>
                              </Button>
                            )}
                          </div>
                          <Button size="sm">View Full Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="active">
                  <div className="space-y-6">
                    {serviceRequests
                      .filter(req => req.status === "In Development" || req.status === "Under Review")
                      .map((request) => (
                        <Card key={request.id} className="border-l-4" style={{ borderLeftColor: request.statusColor.replace('bg-', '#') }}>
                          {/* Same enhanced card structure as above */}
                          <CardContent className="p-6">
                            <div className="text-center py-8">
                              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                              <h3 className="text-lg font-medium mb-2">{request.title}</h3>
                              <p className="text-gray-600 mb-4">{request.progress}% Complete</p>
                              <Progress value={request.progress} className="w-64 mx-auto" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="completed">
                  <div className="space-y-6">
                    {serviceRequests
                      .filter(req => req.status === "Completed")
                      .map((request) => (
                        <Card key={request.id} className="border-l-4 border-green-500">
                          <CardContent className="p-6">
                            <div className="text-center py-8">
                              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                              <h3 className="text-lg font-medium mb-2">{request.title}</h3>
                              <p className="text-gray-600 mb-4">Completed on {request.completedAt}</p>
                              {request.liveUrl && (
                                <Button asChild>
                                  <a href={request.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Live Project
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
