
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock user data - this would come from authentication context
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg"
  };

  // Mock service requests - this would come from API
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
      milestones: [
        { name: "Requirements Analysis", completed: true, date: "2024-01-18" },
        { name: "UI/UX Design", completed: true, date: "2024-01-25" },
        { name: "Backend Development", completed: false, current: true },
        { name: "Frontend Development", completed: false },
        { name: "Testing & Deployment", completed: false }
      ],
      files: [
        { name: "Requirements Document.pdf", size: "2.1 MB" },
        { name: "UI Mockups.figma", size: "5.3 MB" }
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
      price: 2499,
      icon: Globe,
      statusColor: "bg-green-500",
      liveUrl: "https://bellavista-restaurant.com",
      milestones: [
        { name: "Template Selection", completed: true, date: "2024-01-06" },
        { name: "Content Integration", completed: true, date: "2024-01-10" },
        { name: "Payment Gateway Setup", completed: true, date: "2024-01-15" },
        { name: "Domain Configuration", completed: true, date: "2024-01-18" },
        { name: "Go Live", completed: true, date: "2024-01-20" }
      ],
      files: [
        { name: "Login Credentials.pdf", size: "256 KB" },
        { name: "User Manual.pdf", size: "1.8 MB" }
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
      milestones: [
        { name: "Concept Development", completed: true, date: "2024-01-22" },
        { name: "3D Asset Creation", completed: false, current: true },
        { name: "WebGL Development", completed: false },
        { name: "Interactive Features", completed: false },
        { name: "Testing & Optimization", completed: false }
      ],
      files: [
        { name: "Concept Designs.pdf", size: "12.5 MB" }
      ]
    }
  ]);

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      "Completed": "bg-green-100 text-green-800",
      "In Development": "bg-blue-100 text-blue-800",
      "Under Review": "bg-yellow-100 text-yellow-800",
      "On Hold": "bg-red-100 text-red-800"
    };
    return variants[status] || "bg-gray-100 text-gray-800";
  };

  const stats = {
    totalProjects: serviceRequests.length,
    activeProjects: serviceRequests.filter(req => req.status === "In Development" || req.status === "Under Review").length,
    completedProjects: serviceRequests.filter(req => req.status === "Completed").length,
    totalSpent: serviceRequests.reduce((sum, req) => sum + req.price, 0)
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
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back, {user.name}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Link to="/services">
                  <Button>Request New Service</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.totalSpent.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Your Service Requests</CardTitle>
              <CardDescription>Track the progress of all your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  {serviceRequests.map((request) => (
                    <Card key={request.id} className="border-l-4" style={{ borderLeftColor: request.statusColor.replace('bg-', '#') }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${request.statusColor.replace('500', '100')}`}>
                              <request.icon className={`h-6 w-6 ${request.statusColor.replace('bg-', 'text-').replace('500', '600')}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">{request.title}</h3>
                              <p className="text-gray-600 mb-2">{request.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>ID: {request.id}</span>
                                <span>•</span>
                                <span>Created: {new Date(request.createdAt).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>Est. Completion: {new Date(request.estimatedCompletion).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusBadge(request.status)}>
                              {request.status}
                            </Badge>
                            <p className="text-lg font-semibold mt-2">${request.price.toLocaleString()}</p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span>{request.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${request.statusColor}`}
                              style={{ width: `${request.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Milestones */}
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-3">Milestones</h4>
                          <div className="space-y-2">
                            {request.milestones.map((milestone, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                {milestone.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : milestone.current ? (
                                  <Clock className="h-5 w-5 text-blue-500" />
                                ) : (
                                  <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                                )}
                                <span className={milestone.completed ? "text-gray-900" : "text-gray-500"}>
                                  {milestone.name}
                                </span>
                                {milestone.date && (
                                  <span className="text-xs text-gray-400">({milestone.date})</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Files */}
                        {request.files.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-3">Files & Documents</h4>
                            <div className="space-y-2">
                              {request.files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                  <div className="flex items-center space-x-2">
                                    <Download className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm">{file.name}</span>
                                    <span className="text-xs text-gray-400">({file.size})</span>
                                  </div>
                                  <Button size="sm" variant="ghost">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message Team
                            </Button>
                            {request.liveUrl && (
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-2" />
                                <a href={request.liveUrl} target="_blank" rel="noopener noreferrer">
                                  View Live Site
                                </a>
                              </Button>
                            )}
                          </div>
                          <Button size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="active">
                  {serviceRequests
                    .filter(req => req.status === "In Development" || req.status === "Under Review")
                    .map((request) => (
                      // Same card structure as above
                      <div key={request.id} className="text-center py-8">
                        <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-lg font-medium">Active projects will appear here</h3>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="completed">
                  {serviceRequests
                    .filter(req => req.status === "Completed")
                    .map((request) => (
                      // Same card structure as above
                      <div key={request.id} className="text-center py-8">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-lg font-medium">Completed projects will appear here</h3>
                      </div>
                    ))}
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
