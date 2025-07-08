
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Search, Hash, Users, MessageCircle, Smile, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [message, setMessage] = useState("");

  const channels = [
    { id: "general", name: "general", description: "General discussion", members: 1247, unread: 3 },
    { id: "startup-ideas", name: "startup-ideas", description: "Share and discuss business ideas", members: 892, unread: 0 },
    { id: "marketing-tips", name: "marketing-tips", description: "Marketing strategies & advice", members: 567, unread: 1 },
    { id: "funding-help", name: "funding-help", description: "Get funding advice", members: 334, unread: 0 },
    { id: "success-stories", name: "success-stories", description: "Celebrate wins together", members: 445, unread: 2 }
  ];

  const messages = [
    {
      id: 1,
      user: "Alex Chen",
      avatar: "AC",
      time: "2:34 PM",
      message: "Just launched my first online store! Got 5 orders in the first day 🎉",
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      user: "Maya Patel",
      avatar: "MP",
      time: "2:28 PM",
      message: "Does anyone have experience with social media marketing for teens? Need some advice!",
      likes: 8,
      replies: 7
    },
    {
      id: 3,
      user: "Jordan Lee",
      avatar: "JL",
      time: "2:15 PM",
      message: "Check out this article about young entrepreneurs: https://example.com - really inspiring stuff",
      likes: 5,
      replies: 2
    },
    {
      id: 4,
      user: "Sam Rivera",
      avatar: "SR",
      time: "1:45 PM",
      message: "Working on a sustainability app for my school project. Any feedback would be awesome!",
      likes: 15,
      replies: 9
    }
  ];

  const onlineUsers = [
    { name: "Alex Chen", status: "Building my empire 🚀", avatar: "AC", isOnline: true },
    { name: "Maya Patel", status: "Learning marketing", avatar: "MP", isOnline: true },
    { name: "Jordan Lee", status: "Coding all night", avatar: "JL", isOnline: false },
    { name: "Sam Rivera", status: "Sustainable future", avatar: "SR", isOnline: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              <h1 className="text-2xl font-bold text-gray-900">Community Chat</h1>
              <p className="text-gray-600">Connect with 2,400+ teen entrepreneurs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-12rem)]">
          {/* Channels Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  Channels
                </CardTitle>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                  <Input placeholder="Search channels..." className="pl-9 h-8" />
                </div>
              </CardHeader>
              <CardContent className="space-y-1 overflow-y-auto">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedChannel === channel.id 
                        ? 'bg-blue-100 text-blue-700 border-blue-200' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">#{channel.name}</span>
                      {channel.unread > 0 && (
                        <Badge variant="destructive" className="text-xs h-4 min-w-4 px-1">
                          {channel.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{channel.members} members</p>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">#{selectedChannel}</CardTitle>
                    <CardDescription>
                      {channels.find(c => c.id === selectedChannel)?.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {channels.find(c => c.id === selectedChannel)?.members} members
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                      {msg.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{msg.user}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{msg.message}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <button className="flex items-center gap-1 hover:text-blue-600">
                          <MessageCircle className="h-3 w-3" />
                          {msg.replies} replies
                        </button>
                        <button className="flex items-center gap-1 hover:text-red-600">
                          ❤️ {msg.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={`Message #${selectedChannel}...`}
                      className="pr-20"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Smile className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Online Users */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Online Now</CardTitle>
                <CardDescription>{onlineUsers.filter(u => u.isOnline).length} online</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 overflow-y-auto">
                {onlineUsers.map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">
                        {user.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.status}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
