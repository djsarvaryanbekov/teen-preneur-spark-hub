
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, DollarSign, Users, ShoppingCart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Simulator = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const businessData = {
    name: "TechCafe Pro",
    type: "Tech Startup",
    month: 6,
    cash: 8750,
    revenue: 12500,
    expenses: 9200,
    profit: 3300,
    customers: 247,
    employees: 3,
    satisfaction: 78
  };

  const decisions = [
    {
      id: 1,
      title: "Competitor Alert! 🚨",
      description: "A new competitor opened nearby with 20% lower prices. What's your strategy?",
      options: [
        { text: "Match their prices", impact: "Lower profit margin but retain customers" },
        { text: "Improve service quality", impact: "Higher costs but better differentiation" },
        { text: "Launch marketing campaign", impact: "Spend $2000 to attract new customers" }
      ],
      urgency: "high"
    },
    {
      id: 2,
      title: "Expansion Opportunity",
      description: "A prime location is available for rent. Should you expand?",
      options: [
        { text: "Take the location", impact: "High risk, high reward potential" },
        { text: "Wait and save more", impact: "Safe but might miss opportunity" },
        { text: "Partner with investor", impact: "Share profits but reduce risk" }
      ],
      urgency: "medium"
    }
  ];

  const recentEvents = [
    { type: "success", message: "New customer milestone reached! +500 XP", time: "2 hours ago" },
    { type: "warning", message: "Inventory running low - restock needed", time: "5 hours ago" },
    { type: "info", message: "Employee training completed successfully", time: "1 day ago" },
    { type: "success", message: "Positive customer review received", time: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Hub
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{businessData.name}</h1>
              <p className="text-gray-600">{businessData.type} • Month {businessData.month}</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span className="font-semibold">${businessData.cash.toLocaleString()}</span>
              </div>
              <Badge variant={businessData.profit > 0 ? "default" : "destructive"}>
                {businessData.profit > 0 ? "Profitable" : "Loss"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                  <p className="text-xl font-bold text-green-600">${businessData.revenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Expenses</p>
                  <p className="text-xl font-bold text-red-600">${businessData.expenses.toLocaleString()}</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Customers</p>
                  <p className="text-xl font-bold text-blue-600">{businessData.customers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                  <p className="text-xl font-bold text-purple-600">{businessData.satisfaction}%</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">😊</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Critical Decisions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Critical Decisions
                </CardTitle>
                <CardDescription>
                  These decisions will impact your business significantly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {decisions.map((decision) => (
                  <div key={decision.id} className={`border rounded-lg p-4 ${decision.urgency === 'high' ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold">{decision.title}</h4>
                      <Badge variant={decision.urgency === 'high' ? 'destructive' : 'default'}>
                        {decision.urgency} priority
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{decision.description}</p>
                    <div className="space-y-2">
                      {decision.options.map((option, index) => (
                        <Button 
                          key={index}
                          variant="outline" 
                          className="w-full text-left justify-start h-auto p-3"
                        >
                          <div>
                            <p className="font-medium">{option.text}</p>
                            <p className="text-xs text-gray-500">{option.impact}</p>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Business Performance</CardTitle>
                <CardDescription>Revenue vs Expenses over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive chart will be displayed here</p>
                    <p className="text-sm">Showing growth trends and key metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mentor Tips */}
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
              <CardHeader>
                <CardTitle className="text-lg">💡 Mentor Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-indigo-100 mb-4">
                  "Your customer satisfaction is slightly low. Consider investing in staff training or improving your product quality. Happy customers lead to repeat business!"
                </p>
                <Button variant="secondary" size="sm">
                  Get More Tips
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📈 Recent Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      event.type === 'success' ? 'bg-green-500' : 
                      event.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{event.message}</p>
                      <p className="text-xs text-gray-500">{event.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">⚡ Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Apply for Loan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Hire Employee
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Order Inventory
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Marketing
                </Button>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎯 Goals Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Revenue Goal</span>
                    <span>$12.5K / $15K</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer Satisfaction</span>
                    <span>78% / 85%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Market Share</span>
                    <span>12% / 20%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
