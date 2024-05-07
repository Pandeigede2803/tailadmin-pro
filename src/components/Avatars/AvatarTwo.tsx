import React from "react";
import Image from "next/image";

interface Avatar {
  image: string;
  classes: string;
  bulletClasses: string;
  size: number;
}

const avatarItems: Avatar[] = [
  {
    image: "/images/user/user-03.png",
    classes: "max-w-6 h-6",
    bulletClasses: "max-w-2 -right-px -top-px h-2 border",
    size: 24,
  },
  {
    image: "/images/user/user-03.png",
    classes: "max-w-9.5 h-9.5",
    bulletClasses: "max-w-3.5 -right-0.5 -top-0.5 h-3.5 border-2",
    size: 38,
  },
  {
    image: "/images/user/user-03.png",
    classes: "max-w-13 h-13",
    bulletClasses: "max-w-4.5 -right-0.5 -top-0.5 h-4.5 border-[2.7px]",
    size: 52,
  },
  {
    image: "/images/user/user-03.png",
    classes: "max-w-20 h-20",
    bulletClasses: "max-w-5.5 right-0 top-0 h-5.5 border-[3px]",
    size: 80,
  },
];

const AvatarTwo: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      {avatarItems.map((item, index) => (
        <div
          key={index}
          className={`relative w-full rounded-full ${item.classes}`}
        >
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

          <span
            className={`absolute w-full rounded-full border-white bg-[#219653] dark:border-black ${item.bulletClasses}`}
          ></span>
        </div>
      ))}
    </div>
  );
};

export default AvatarTwo;
