import React from "react";
import Image from "next/image";
import Link from "next/link";

const TwoStepVerification: React.FC = () => {
  return (
    <div className="overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[480px]">
            <div className="text-center">
              <Link href="/" className="mx-auto mb-10 inline-flex">
                <Image
                  width={176}
                  height={32}
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  priority
                  className="dark:hidden"
                />
                <Image
                  width={176}
                  height={32}
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  priority
                  className="hidden dark:block"
                />
              </Link>

              <div className="rounded-xl bg-white p-4 shadow-14 dark:bg-boxdark lg:p-7.5 xl:p-12.5">
                <h1 className="mb-2.5 text-3xl font-black leading-[48px] text-black dark:text-white">
                  Verify Your Account
                </h1>

                <p className="mb-7.5 font-medium">
                  Enter the 4 digit code sent to the registered email id.
                </p>

                <form>
                  <div className="flex items-center gap-4.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 text-center text-2xl font-medium text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    ))}
                  </div>

                  <p className="mb-5 mt-4 text-left font-medium text-black dark:text-white">
                    Did not receive a code?
                    <button className="text-primary">Resend</button>
                  </p>

                  <button className="flex w-full justify-center rounded-md bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90">
                    Verify
                  </button>

                  <span className="mt-5 block text-red">
                    Don’t share the verification code with anyone!
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
