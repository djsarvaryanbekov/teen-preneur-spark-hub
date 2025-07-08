
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Coins, Star, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Merchandise = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userCoins] = useState(2450);

  const merchandise = [
    {
      id: 1,
      name: "Teen Entrepreneur Hoodie",
      description: "Premium hoodie with motivational quote",
      price: 800,
      category: "clothing",
      image: "photo-1618160702438-9b02ab6515c9",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      featured: true,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Business Plan Template Pack",
      description: "Professional templates for your startup",
      price: 300,
      category: "digital",
      image: "photo-1488590528505-98d2b5aba04b",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      featured: false,
      badge: null
    },
    {
      id: 3,
      name: "Startup Sticker Pack",
      description: "20 unique stickers for your laptop",
      price: 150,
      category: "accessories",
      image: "photo-1518770660439-4636190af475",
      rating: 4.7,
      reviews: 203,
      inStock: true,
      featured: false,
      badge: null
    },
    {
      id: 4,
      name: "Entrepreneur's Notebook",
      description: "Premium journal for ideas and planning",
      price: 250,
      category: "accessories",
      image: "photo-1486312338219-ce68d2c6f44d",
      rating: 4.6,
      reviews: 156,
      inStock: true,
      featured: false,
      badge: null
    },
    {
      id: 5,
      name: "1-on-1 Mentor Session",
      description: "30-minute session with successful entrepreneur",
      price: 500,
      category: "experience",
      image: "photo-1581091226825-a6a2a5aee158",
      rating: 5.0,
      reviews: 67,
      inStock: true,
      featured: true,
      badge: "Premium"
    },
    {
      id: 6,
      name: "Course Bundle: Marketing Mastery",
      description: "Complete marketing course with certificates",
      price: 1200,
      category: "digital",
      image: "photo-1519389950473-47ba0277781c",
      rating: 4.9,
      reviews: 45,
      inStock: true,
      featured: true,
      badge: "New"
    }
  ];

  const categories = [
    { id: "all", name: "All Items", count: merchandise.length },
    { id: "clothing", name: "Clothing", count: merchandise.filter(m => m.category === "clothing").length },
    { id: "digital", name: "Digital", count: merchandise.filter(m => m.category === "digital").length },
    { id: "accessories", name: "Accessories", count: merchandise.filter(m => m.category === "accessories").length },
    { id: "experience", name: "Experiences", count: merchandise.filter(m => m.category === "experience").length }
  ];

  const filteredMerchandise = selectedCategory === "all" 
    ? merchandise 
    : merchandise.filter(item => item.category === selectedCategory);

  const recentPurchases = [
    { item: "Startup Sticker Pack", coins: 150, date: "2 days ago" },
    { item: "Business Plan Template", coins: 300, date: "1 week ago" },
    { item: "Entrepreneur Notebook", coins: 250, date: "2 weeks ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Hub
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Merchandise Hub</h1>
                <p className="text-gray-600">Spend your coins on exclusive rewards</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
              <Coins className="h-5 w-5 text-yellow-500" />
              <span className="font-bold text-gray-900">{userCoins.toLocaleString()}</span>
              <span className="text-sm text-gray-600">coins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Banner */}
        <Card className="mb-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="mb-3 bg-white text-pink-600">Limited Time</Badge>
                <h2 className="text-2xl font-bold mb-2">🛍️ New Merchandise Drop!</h2>
                <p className="text-pink-100 mb-4">
                  Get exclusive entrepreneur gear and digital resources to boost your journey
                </p>
                <Button variant="secondary" size="lg">
                  Shop New Items
                </Button>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">20%</div>
                <p className="text-pink-100">Off Digital Items</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search & Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                  <Input placeholder="Search items..." className="pl-9" />
                </div>
                <div className="space-y-2">
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
                </div>
              </CardContent>
            </Card>

            {/* Recent Purchases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🛒 Recent Purchases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentPurchases.map((purchase, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-semibold text-sm">{purchase.item}</p>
                      <p className="text-xs text-gray-600">{purchase.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Coins className="h-3 w-3 text-yellow-500" />
                      <span className="text-sm font-semibold">{purchase.coins}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Coin Balance */}
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-0">
              <CardHeader>
                <CardTitle className="text-lg">💰 Earn More Coins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-100 text-sm mb-4">
                  Complete lessons, win competitions, and help others to earn more coins!
                </p>
                <Button variant="secondary" size="sm">
                  View Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {selectedCategory === "all" ? "All Items" : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">{filteredMerchandise.length} items</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMerchandise.map((item) => (
                <Card key={item.id} className={`hover:shadow-lg transition-all ${item.featured ? 'ring-2 ring-purple-200' : ''}`}>
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&h=250`}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {item.badge && (
                      <Badge className={`absolute top-2 right-2 ${
                        item.badge === 'Best Seller' ? 'bg-green-500' :
                        item.badge === 'Premium' ? 'bg-purple-500' :
                        'bg-blue-500'
                      }`}>
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${
                            i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({item.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Coins className="h-5 w-5 text-yellow-500" />
                        <span className="text-xl font-bold">{item.price}</span>
                        <span className="text-sm text-gray-600">coins</span>
                      </div>
                      <Badge variant={item.inStock ? "default" : "secondary"}>
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      disabled={!item.inStock || userCoins < item.price}
                      variant={userCoins >= item.price ? "default" : "secondary"}
                    >
                      {!item.inStock ? "Out of Stock" :
                       userCoins < item.price ? "Not Enough Coins" : "Purchase"}
                    </Button>
                    
                    {userCoins < item.price && item.inStock && (
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Need {item.price - userCoins} more coins
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
