import { FC } from "react";
import { FaCertificate, FaTrophy } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image

export interface Achievement {
  title: string;
  description: string;
  date: string;
  image?: string;
  type: "certification" | "award";
}

interface AchievementCardProps {
  achievement: Achievement;
}

const iconMap = {
  certification: FaCertificate,
  award: FaTrophy,
};

const AchievementsCard: FC<AchievementCardProps> = ({ achievement }) => {
  const { title, description, date, image, type } = achievement;
  const IconComponent = image ? null : type ? iconMap[type] : null;

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow border border-zinc-100 dark:border-zinc-700">
      {image ? (
        <Image
          src={image}
          alt={title}
          width={48} // Set explicit width (matches w-12, 12 * 4 = 48px)
          height={48} // Set explicit height (matches h-12, 12 * 4 = 48px)
          className="mb-2 object-contain"
        />
      ) : (
        IconComponent && (
          <IconComponent className="text-emerald-500 mb-2" size={24} />
        )
      )}
      <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
      <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-1">{date}</p>
    </div>
  );
};

export default AchievementsCard;
