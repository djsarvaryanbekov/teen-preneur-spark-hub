
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Trophy, Clock, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "Teen Startup Pitch Battle 🚀",
      description: "Present your business idea to real investors and win up to $5,000 funding!",
      category: "competition",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      location: "Virtual Event",
      participants: 1247,
      maxParticipants: 2000,
      reward: "5000 coins + Real funding opportunity",
      difficulty: "Advanced",
      duration: "3 hours",
      status: "open",
      featured: true
    },
    {
      id: 2,
      title: "24hr Business Hackathon",
      description: "Build and launch a complete business in 24 hours with your team",
      category: "hackathon",
      date: "Dec 20-21, 2024",
      time: "12:00 PM EST",
      location: "Virtual + Local Hubs",
      participants: 892,
      maxParticipants: 1500,
      reward: "3000 coins + Mentorship",
      difficulty: "Intermediate",
      duration: "24 hours",
      status: "open",
      featured: true
    },
    {
      id: 3,
      title: "Social Impact Challenge",
      description: "Create solutions for local community problems",
      category: "challenge",
      date: "Jan 5, 2025",
      time: "10:00 AM EST",
      location: "Global",
      participants: 567,
      maxParticipants: 1000,
      reward: "2000 coins + NGO Partnership",
      difficulty: "Beginner",
      duration: "2 weeks",
      status: "open",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Workshop Series",
      description: "Learn to build and scale online stores with expert guidance",
      category: "workshop",
      date: "Dec 18, 2024",
      time: "4:00 PM EST",
      location: "Virtual",
      participants: 234,
      maxParticipants: 500,
      reward: "1500 coins + Certificate",
      difficulty: "Beginner",
      duration: "2 hours",
      status: "open",
      featured: false
    },
    {
      id: 5,
      title: "Crypto & Web3 for Teens",
      description: "Understanding blockchain technology and its business applications",
      category: "workshop",
      date: "Dec 22, 2024",
      time: "1:00 PM EST",
      location: "Virtual",
      participants: 445,
      maxParticipants: 600,
      reward: "1800 coins + NFT Badge",
      difficulty: "Advanced",
      duration: "1.5 hours",
      status: "open",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Mobile App Development Sprint",
      date: "Nov 28, 2024",
      participants: 1456,
      winner: "Team CodeCrush",
      reward: "Won $2,000 + App Store Partnership"
    },
    {
      title: "Sustainable Business Challenge",
      date: "Nov 15, 2024",
      participants: 892,
      winner: "EcoGen Solutions",
      reward: "Won $3,000 + Investor Meeting"
    }
  ];

  const categories = [
    { id: "all", name: "All Events", count: events.length },
    { id: "competition", name: "Competitions", count: events.filter(e => e.category === "competition").length },
    { id: "hackathon", name: "Hackathons", count: events.filter(e => e.category === "hackathon").length },
    { id: "workshop", name: "Workshops", count: events.filter(e => e.category === "workshop").length },
    { id: "challenge", name: "Challenges", count: events.filter(e => e.category === "challenge").length }
  ];

  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              <h1 className="text-2xl font-bold text-gray-900">Event Hub</h1>
              <p className="text-gray-600">Competitions, hackathons & workshops for teen entrepreneurs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Banner */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="mb-3 bg-white text-purple-600">Featured Event</Badge>
                <h2 className="text-2xl font-bold mb-2">🏆 Teen Startup Pitch Battle is LIVE!</h2>
                <p className="text-purple-100 mb-4">
                  Over 1,200 teen entrepreneurs competing for real funding. Join now!
                </p>
                <Button variant="secondary" size="lg">
                  Join Competition
                </Button>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">$5,000</div>
                <p className="text-purple-100">Prize Pool</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Your Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎯 Your Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center text-gray-500 py-4">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">No upcoming events</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Browse Events
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🏆 Top Participants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Alex Chen", points: 15420, events: 12 },
                  { name: "Maya Patel", points: 12880, events: 9 },
                  { name: "Jordan Lee", points: 11340, events: 8 }
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-100 text-gray-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{user.name}</p>
                      <p className="text-xs text-gray-600">{user.points.toLocaleString()} XP • {user.events} events</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Events Grid */}
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <Card key={event.id} className={`hover:shadow-md transition-all ${event.featured ? 'ring-2 ring-purple-200' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          {event.featured && <Badge className="bg-purple-100 text-purple-700">Featured</Badge>}
                        </div>
                        <CardDescription className="text-sm">{event.description}</CardDescription>
                      </div>
                      <Badge variant={
                        event.difficulty === 'Beginner' ? 'default' :
                        event.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
                      }>
                        {event.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{event.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{event.participants}/{event.maxParticipants}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{event.reward}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <Button size="sm">
                          {event.status === 'open' ? 'Join Event' : 'View Results'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Past Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📅 Recent Events</CardTitle>
                <CardDescription>See what happened in our past events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastEvents.map((event, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{event.participants} participants</span>
                      <span>🏆 {event.winner}</span>
                    </div>
                    <p className="text-sm text-green-600 mt-2">{event.reward}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Propose Event */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Have an Event Idea?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-100 mb-4">
                  Suggest new events, workshops, or challenges for the community!
                </p>
                <Button variant="secondary">
                  Propose Event
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
