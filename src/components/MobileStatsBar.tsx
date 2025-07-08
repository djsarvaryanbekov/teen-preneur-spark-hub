
import { motion } from "framer-motion";
import { Coins, Trophy, Target } from "lucide-react";

interface MobileStatsBarProps {
  coins: number;
  virtualMoney: number;
  level: number;
  streakDays: number;
  xp: number;
  xpToNext: number;
}

const MobileStatsBar = ({ 
  coins, 
  virtualMoney, 
  level, 
  streakDays, 
  xp, 
  xpToNext 
}: MobileStatsBarProps) => {
  const xpProgress = (xp / (xp + xpToNext)) * 100;

  return (
    <div className="bg-white shadow-sm border-b p-4">
      {/* Top row - main stats */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <h1 className="text-lg font-bold text-gray-900">Level {level}</h1>
          <div className="flex items-center gap-1 text-purple-600">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-medium">{streakDays}d</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Coins className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-900">
              {coins.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">$</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              ${virtualMoney.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>XP Progress</span>
          <span>{xp.toLocaleString()}/{(xp + xpToNext).toLocaleString()}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileStatsBar;
