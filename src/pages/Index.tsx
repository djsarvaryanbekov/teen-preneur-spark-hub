
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, Trophy, Target, Users, ShoppingBag, MessageCircle, Gamepad2, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [userStats] = useState({
    coins: 2450,
    virtualMoney: 15000,
    level: 12,
    xp: 8750,
    xpToNext: 1250,
    streakDays: 7
  });

  const hubs = [
    {
      title: "Learn Hub",
      description: "Interactive lessons & real entrepreneur stories",
      icon: BookOpen,
      color: "bg-blue-500",
      path: "/learn",
      progress: 65,
      badge: "3 New Lessons"
    },
    {
      title: "Virtual Business Simulator",
      description: "Run your own virtual company & make decisions",
      icon: Gamepad2,
      color: "bg-purple-500",
      path: "/simulator",
      progress: 40,
      badge: "Crisis Alert!"
    },
    {
      title: "Event Hub",
      description: "Hackathons, competitions & community events",
      icon: Calendar,
      color: "bg-green-500",
      path: "/events",
      progress: 80,
      badge: "2 Active Events"
    },
    {
      title: "Community Chat",
      description: "Connect with teen entrepreneurs worldwide",
      icon: MessageCircle,
      color: "bg-orange-500",
      path: "/chat",
      progress: 90,
      badge: "5 New Messages"
    },
    {
      title: "Merchandise Hub",
      description: "Spend your coins on exclusive rewards",
      icon: ShoppingBag,
      color: "bg-pink-500",
      path: "/merchandise",
      progress: 100,
      badge: "New Items!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header with Stats */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Teen Preneur Hub</h1>
              <p className="text-gray-600">Level {userStats.level} Entrepreneur</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">{userStats.coins.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">$</span>
                </div>
                <span className="font-semibold text-gray-900">${userStats.virtualMoney.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-gray-600">{userStats.streakDays} day streak</span>
              </div>
            </div>
          </div>
          
          {/* XP Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
              <span>XP Progress</span>
              <span>{userStats.xp}/{userStats.xp + userStats.xpToNext}</span>
            </div>
            <Progress value={(userStats.xp / (userStats.xp + userStats.xpToNext)) * 100} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Ready to Build Your Empire? 🚀
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn entrepreneurship through interactive lessons, run virtual businesses, 
            and connect with teen entrepreneurs worldwide!
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Today's Challenge</p>
                  <p className="font-semibold">Complete Market Research</p>
                </div>
                <Target className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Business Status</p>
                  <p className="font-semibold">Growing +12% 📈</p>
                </div>
                <Trophy className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Community</p>
                  <p className="font-semibold">2.4k Teen Entrepreneurs</p>
                </div>
                <Users className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, index) => (
            <Link key={index} to={hub.path}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${hub.color} text-white group-hover:scale-110 transition-transform`}>
                      <hub.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {hub.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{hub.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {hub.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold">{hub.progress}%</span>
                    </div>
                    <Progress value={hub.progress} className="h-2" />
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Enter Hub
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🏆 Recent Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "First Sale", desc: "Made your first virtual sale", reward: "+500 XP" },
              { name: "Marketing Guru", desc: "Completed marketing masterclass", reward: "+200 Coins" },
              { name: "Problem Solver", desc: "Resolved a business crisis", reward: "+300 XP" },
              { name: "Community Helper", desc: "Helped 5 fellow entrepreneurs", reward: "+150 Coins" }
            ].map((achievement, index) => (
              <Card key={index} className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-semibold text-sm">{achievement.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{achievement.desc}</p>
                  <Badge variant="outline" className="text-xs">{achievement.reward}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
