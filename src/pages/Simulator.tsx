
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, Users, ShoppingCart, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import BottomNavigation from "@/components/BottomNavigation";
import PullToRefresh from "@/components/PullToRefresh";

const Simulator = () => {
  const [activeTab, setActiveTab] = useState("decisions");

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

  const handleRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  const tabConfig = [
    { id: "decisions", label: "Decisions", icon: AlertTriangle },
    { id: "stats", label: "Stats", icon: TrendingUp },
    { id: "events", label: "Events", icon: Calendar },
    { id: "actions", label: "Actions", icon: ShoppingCart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pb-20">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{businessData.name}</h1>
              <p className="text-sm text-gray-600">{businessData.type} • Month {businessData.month}</p>
            </div>
            <Badge variant={businessData.profit > 0 ? "default" : "destructive"} className="text-xs">
              {businessData.profit > 0 ? "Profitable" : "Loss"}
            </Badge>
          </div>
          
          {/* Cash display */}
          <div className="flex items-center gap-2 text-green-600">
            <DollarSign className="h-5 w-5" />
            <span className="text-lg font-bold">${businessData.cash.toLocaleString()}</span>
            <span className="text-sm text-gray-500">available</span>
          </div>
        </div>
      </div>

      <PullToRefresh onRefresh={handleRefresh}>
        <div className="p-4 space-y-6">
          {/* Quick Stats Grid - Mobile Optimized */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-green-700 mb-1">Revenue</p>
                  <p className="text-lg font-bold text-green-800">${businessData.revenue.toLocaleString()}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardContent className="p-4 text-center">
                  <TrendingDown className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="text-xs text-red-700 mb-1">Expenses</p>
                  <p className="text-lg font-bold text-red-800">${businessData.expenses.toLocaleString()}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-blue-700 mb-1">Customers</p>
                  <p className="text-lg font-bold text-blue-800">{businessData.customers}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-4 text-center">
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">😊</span>
                  </div>
                  <p className="text-xs text-purple-700 mb-1">Satisfaction</p>
                  <p className="text-lg font-bold text-purple-800">{businessData.satisfaction}%</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Mobile Tab Navigation */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="flex border-b">
              {tabConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-1 p-3 text-xs transition-colors ${
                    activeTab === tab.id 
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {activeTab === "decisions" && (
                <div className="space-y-4">
                  {decisions.map((decision) => (
                    <motion.div
                      key={decision.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border rounded-lg p-4 ${
                        decision.urgency === 'high' ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-base">{decision.title}</h4>
                        <Badge variant={decision.urgency === 'high' ? 'destructive' : 'default'} className="text-xs">
                          {decision.urgency}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{decision.description}</p>
                      <div className="space-y-3">
                        {decision.options.map((option, index) => (
                          <Button 
                            key={index}
                            variant="outline" 
                            className="w-full text-left justify-start h-auto p-3 hover:bg-white"
                          >
                            <div className="text-left">
                              <p className="font-medium text-sm">{option.text}</p>
                              <p className="text-xs text-gray-500 mt-1">{option.impact}</p>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "events" && (
                <div className="space-y-3">
                  {recentEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                        event.type === 'success' ? 'bg-green-500' : 
                        event.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm leading-relaxed">{event.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "actions" && (
                <div className="space-y-3">
                  {[
                    { icon: DollarSign, label: "Apply for Loan", desc: "Get funding for expansion" },
                    { icon: Users, label: "Hire Employee", desc: "Expand your team" },
                    { icon: ShoppingCart, label: "Order Inventory", desc: "Restock your products" },
                    { icon: Calendar, label: "Schedule Marketing", desc: "Plan your next campaign" }
                  ].map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <action.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-medium">{action.label}</p>
                          <p className="text-xs text-gray-500">{action.desc}</p>
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "stats" && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Monthly Revenue Goal</span>
                      <span className="font-semibold">$12.5K / $15K</span>
                    </div>
                    <Progress value={83} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-semibold">78% / 85%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Market Share</span>
                      <span className="font-semibold">12% / 20%</span>
                    </div>
                    <Progress value={60} className="h-3" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mentor Tips - Mobile Optimized */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-3">💡 Mentor Advice</h3>
                <p className="text-indigo-100 leading-relaxed mb-4">
                  "Your customer satisfaction is slightly low. Consider investing in staff training or improving your product quality. Happy customers lead to repeat business!"
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Get More Tips
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </PullToRefresh>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Simulator;
