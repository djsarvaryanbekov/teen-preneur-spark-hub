
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Gamepad2, Calendar, MessageCircle, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: BookOpen, label: "Learn", color: "text-blue-500" },
  { path: "/simulator", icon: Gamepad2, label: "Simulator", color: "text-purple-500" },
  { path: "/events", icon: Calendar, label: "Events", color: "text-green-500" },
  { path: "/chat", icon: MessageCircle, label: "Chat", color: "text-orange-500" },
  { path: "/merchandise", icon: ShoppingBag, label: "Shop", color: "text-pink-500" }
];

const BottomNavigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Haptic feedback
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 py-2 safe-area-pb">
      <nav className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setActiveTab(item.path);
                handleVibration();
              }}
              className="relative flex flex-col items-center justify-center min-h-[48px] min-w-[48px] p-2 rounded-xl transition-all duration-200"
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-100 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Icon container */}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 transition-colors duration-200",
                      isActive ? item.color : "text-gray-500"
                    )}
                  />
                </motion.div>
                
                {/* Label */}
                <span
                  className={cn(
                    "text-xs font-medium transition-colors duration-200",
                    isActive ? item.color : "text-gray-500"
                  )}
                >
                  {item.label}
                </span>
              </div>

              {/* Badge for notifications */}
              {item.path === "/chat" && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNavigation;
