
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, Clock, Trophy, Star, CheckCircle, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const learningModules = [
    {
      id: 1,
      title: "Entrepreneurship Foundations",
      description: "Learn the basics of entrepreneurship and mindset",
      duration: "2 weeks",
      lessons: 12,
      completed: 8,
      difficulty: "Beginner",
      reward: 500,
      unlocked: true,
      topics: ["What is Entrepreneurship?", "Mindset & Traits", "Types of Businesses", "Success Stories"]
    },
    {
      id: 2,
      title: "Business Ideation & Planning",
      description: "Generate and validate business ideas effectively",
      duration: "10 days",
      lessons: 8,
      completed: 3,
      difficulty: "Beginner",
      reward: 400,
      unlocked: true,
      topics: ["Idea Generation", "Market Research", "Business Model Canvas", "Validation Techniques"]
    },
    {
      id: 3,
      title: "Marketing & Customer Acquisition",
      description: "Master the art of reaching and converting customers",
      duration: "2 weeks",
      lessons: 10,
      completed: 0,
      difficulty: "Intermediate",
      reward: 600,
      unlocked: false,
      topics: ["Digital Marketing", "Social Media Strategy", "Content Creation", "Customer Psychology"]
    },
    {
      id: 4,
      title: "Financial Management",
      description: "Handle money, budgets, and financial planning",
      duration: "12 days",
      lessons: 9,
      completed: 0,
      difficulty: "Intermediate",
      reward: 700,
      unlocked: false,
      topics: ["Budgeting", "Cash Flow", "Pricing Strategies", "Investment Basics"]
    }
  ];

  const featuredStories = [
    {
      name: "Sarah Chen",
      age: 17,
      business: "EcoWrap - Sustainable Packaging",
      story: "Started with $50, now making $2k/month",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Marcus Johnson",
      age: 16,
      business: "CodeTutor - Programming Lessons",
      story: "Teaching coding to earn college money",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Learn Hub</h1>
              <p className="text-gray-600">Interactive lessons from real entrepreneurs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">Your Learning Journey</h2>
                <p className="text-blue-100">Keep building your entrepreneurial skills!</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">73%</div>
                <p className="text-blue-100">Overall Progress</p>
              </div>
            </div>
            <Progress value={73} className="mt-4 bg-blue-400" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Modules */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">📚 Learning Modules</h2>
            <div className="space-y-4">
              {learningModules.map((module) => (
                <Card key={module.id} className={`cursor-pointer transition-all hover:shadow-md ${!module.unlocked ? 'opacity-60' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          {!module.unlocked && <Lock className="h-4 w-4 text-gray-400" />}
                          {module.completed === module.lessons && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <CardDescription>{module.description}</CardDescription>
                      </div>
                      <Badge variant={module.difficulty === 'Beginner' ? 'default' : 'secondary'}>
                        {module.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="h-4 w-4 text-gray-500" />
                        <span>{module.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span>+{module.reward} XP</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{module.completed}/{module.lessons}</span>
                      </div>
                      <Progress value={(module.completed / module.lessons) * 100} className="h-2" />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {module.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {module.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{module.topics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button 
                      className="w-full" 
                      disabled={!module.unlocked}
                      variant={module.completed > 0 ? "default" : "outline"}
                    >
                      {!module.unlocked ? 'Locked' : module.completed > 0 ? 'Continue Learning' : 'Start Module'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Teen Entrepreneur Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🌟 Success Stories</CardTitle>
                <CardDescription>Real teens who made it happen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredStories.map((story, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <img 
                        src={`https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=60&h=60`}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{story.name}, {story.age}</h4>
                        <p className="text-xs text-blue-600 mb-1">{story.business}</p>
                        <p className="text-xs text-gray-600">{story.story}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Daily Challenge */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
              <CardHeader>
                <CardTitle className="text-lg">🔥 Daily Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-100 mb-4">
                  Research 3 competitors for your dream business idea
                </p>
                <Button variant="secondary" className="w-full">
                  Accept Challenge
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🏆 Learning Badges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Quick Learner</p>
                    <p className="text-xs text-gray-600">Completed 5 lessons in a row</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Knowledge Seeker</p>
                    <p className="text-xs text-gray-600">Watched 10 entrepreneur stories</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
