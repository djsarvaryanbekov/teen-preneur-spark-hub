
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Trophy, Target, Users, ShoppingBag, MessageCircle, Gamepad2, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BottomNavigation from "@/components/BottomNavigation";
import MobileStatsBar from "@/components/MobileStatsBar";
import SwipeableCarousel from "@/components/SwipeableCarousel";
import PullToRefresh from "@/components/PullToRefresh";

const Index = () => {
  const [userStats] = useState({
    coins: 2450,
    virtualMoney: 15000,
    level: 12,
    xp: 8750,
    xpToNext: 1250,
    streakDays: 7
  });

  const [refreshing, setRefreshing] = useState(false);

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

  const achievements = [
    { name: "First Sale", desc: "Made your first virtual sale", reward: "+500 XP" },
    { name: "Marketing Guru", desc: "Completed marketing masterclass", reward: "+200 Coins" },
    { name: "Problem Solver", desc: "Resolved a business crisis", reward: "+300 XP" },
    { name: "Community Helper", desc: "Helped 5 fellow entrepreneurs", reward: "+150 Coins" }
  ];

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-20">
      {/* Mobile Stats Header */}
      <MobileStatsBar {...userStats} />

      <PullToRefresh onRefresh={handleRefresh}>
        <div className="px-4 py-6 space-y-6">
          {/* Welcome Section - Mobile Optimized */}
          <motion.div 
            className="text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to Build Your Empire? 🚀
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Learn entrepreneurship through interactive lessons, run virtual businesses, 
              and connect with teen entrepreneurs worldwide!
            </p>
          </motion.div>

          {/* Quick Actions - Mobile Cards */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-blue-100 text-sm">Today's Challenge</p>
                      <p className="font-semibold text-lg">Complete Market Research</p>
                    </div>
                    <Target className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-green-100 text-sm">Business Status</p>
                      <p className="font-semibold text-lg">Growing +12% 📈</p>
                    </div>
                    <Trophy className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-purple-100 text-sm">Community</p>
                      <p className="font-semibold text-lg">2.4k Teen Entrepreneurs</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Hub Cards - Mobile Single Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 px-1">Explore Hubs</h3>
            {hubs.map((hub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link to={hub.path}>
                  <Card className="hover:shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`p-4 rounded-xl ${hub.color} text-white flex-shrink-0`}>
                          <hub.icon className="h-6 w-6" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 leading-tight">
                              {hub.title}
                            </h4>
                            <Badge variant="secondary" className="text-xs shrink-0 ml-2">
                              {hub.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            {hub.description}
                          </p>
                          
                          {/* Progress */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-semibold text-gray-900">{hub.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${hub.progress}%` }}
                                transition={{ duration: 1, delay: 0.2 * index }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Recent Achievements - Swipeable Carousel */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 px-1">🏆 Recent Achievements</h3>
            <SwipeableCarousel showIndicators={false} className="px-1">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 mx-1">
                    <CardContent className="p-5 text-center">
                      <div className="text-3xl mb-3">🏆</div>
                      <h4 className="font-semibold text-base text-gray-900 mb-2">{achievement.name}</h4>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{achievement.desc}</p>
                      <Badge variant="outline" className="text-xs font-medium">{achievement.reward}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </SwipeableCarousel>
          </div>
        </div>
      </PullToRefresh>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
