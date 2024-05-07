import React from "react";
import Image from "next/image";

interface Avatar {
  image: string;
  classes: string;
  size: number;
}

const avatarItems: Avatar[] = [
  {
    image: "/images/user/user-03.png",
    classes: "max-w-6 h-6",
    size: 24,
  },
  {
    image: "/images/user/user-03.png",
    classes: "max-w-9.5 h-9.5",
    size: 38,
  },
  {
    image: "/images/user/user-03.png",
    classes: "max-w-13 h-13",
    size: 52,
  },
  {
    image: "/images/user/user-03.png",
    classes: "max-w-20 h-20",
    size: 80,
  },
];

const AvatarOne: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      {avatarItems.map((item, index) => (
        <div key={index} className={`w-full rounded-full ${item.classes}`}>
          <Image
            width={item.size}
            height={item.size}
            style={{
              width: "100%",
              height: "auto",
            }}
            src={item.image}
            alt="User"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarOne;
