import React from "react";

interface Faq {
  title: string;
  details: string;
}

const faqItems: Faq[] = [
  {
    title: "Is Windy UI Well-documented?",
    details:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we your first blog post.",
  },
  {
    title: "Is Windy UI Well-documented?",
    details:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we your first blog post.",
  },
  {
    title: "Is Windy UI Well-documented?",
    details:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we your first blog post.",
  },
  {
    title: "Is Windy UI Well-documented?",
    details:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we your first blog post.",
  },
];

const FaqOne: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-7.5 gap-y-7.5 sm:gap-y-12.5 xl:grid-cols-2 xl:gap-y-17.5">
      {faqItems.map((item, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex h-15 w-full max-w-15 items-center justify-center rounded-xl bg-primary text-white">
            <svg
              className="fill-current"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1871_19072)">
                <path
                  d="M16.9848 1.81299C8.63477 1.81299 1.88477 8.56299 1.88477 16.913C1.88477 25.263 8.63477 32.063 16.9848 32.063C25.3348 32.063 32.1348 25.263 32.1348 16.913C32.1348 8.56299 25.3348 1.81299 16.9848 1.81299ZM16.9848 29.813C9.88477 29.813 4.13477 24.013 4.13477 16.913C4.13477 9.81299 9.88477 4.06299 16.9848 4.06299C24.0848 4.06299 29.8848 9.86299 29.8848 16.963C29.8848 24.013 24.0848 29.813 16.9848 29.813Z"
                  fill=""
                />
                <path
                  d="M17.884 6.96298C16.434 6.71298 14.934 7.11298 13.834 8.06298C12.734 9.01298 12.084 10.363 12.084 11.863C12.084 12.413 12.184 12.963 12.384 13.513C12.584 14.113 13.234 14.413 13.834 14.213C14.434 14.013 14.734 13.363 14.534 12.763C14.434 12.463 14.384 12.163 14.384 11.863C14.384 11.063 14.734 10.313 15.334 9.81298C15.934 9.31298 16.734 9.06298 17.584 9.21298C18.634 9.41298 19.534 10.313 19.734 11.363C19.934 12.613 19.284 13.863 18.134 14.363C16.834 14.913 15.984 16.213 15.984 17.713V20.813C15.984 21.413 16.484 21.963 17.134 21.963C17.734 21.963 18.284 21.463 18.284 20.813V17.713C18.284 17.163 18.584 16.663 19.034 16.463C21.184 15.563 22.434 13.313 22.034 11.013C21.484 8.96298 19.884 7.31298 17.884 6.96298Z"
                  fill=""
                />
                <path
                  d="M17.0344 23.813H16.8844C16.2844 23.813 15.7344 24.313 15.7344 24.963C15.7344 25.613 16.2344 26.113 16.8844 26.113H17.0344C17.6344 26.113 18.1344 25.613 18.1344 24.963C18.1344 24.313 17.6844 23.813 17.0344 23.813Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_1871_19072">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.984375 0.913086)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex w-full flex-col gap-6">
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              {item.title}
            </h4>
            <p className="w-full max-w-[452px] font-medium">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqOne;
