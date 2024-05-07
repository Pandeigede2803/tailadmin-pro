import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  link: string;
  image: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const productList: Product[] = [
  {
    link: "#",
    image: "/images/product/product-thumb.png",
    name: "Mist Black Triblend",
    color: "White",
    size: "Medium",
    quantity: 1,
    price: 120.0,
  },
];

const InvoiceOne: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-5 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row xl:gap-9">
          <div>
            <p className="mb-1.5 font-medium text-black dark:text-white">
              From
            </p>
            <h4 className="mb-4 text-title-sm2 font-medium leading-[30px] text-black dark:text-white">
              Roger Culhane
            </h4>
            <Link href="#" className="block">
              <span className="font-medium">Email: </span>
              contact@example.com
            </Link>
            <span className="mt-2 block">
              <span className="font-medium">Address: </span> 2972 Westheimer Rd.
              Santa Ana.
            </span>
          </div>
          <div>
            <p className="mb-1.5 font-medium text-black dark:text-white">To</p>
            <h4 className="mb-4 text-title-sm2 font-medium leading-[30px] text-black dark:text-white">
              Cristofer Levin
            </h4>
            <Link href="#" className="block">
              <span className="font-medium">Email: </span>
              contact@example.com
            </Link>
            <span className="mt-2 block">
              <span className="font-medium">Address: </span> New York, USA 2707
              Davis Anenue
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-medium text-black dark:text-white">
          Order #15478
        </h3>
      </div>

      <div className="my-10 rounded-sm border border-stroke p-5 dark:border-strokedark">
        {productList.map((item, index) => (
          <div key={index} className="items-center sm:flex">
            <div className="mb-3 mr-6 h-20 w-20 sm:mb-0">
              <Image
                src={item.image}
                className="h-full w-full rounded-sm object-cover object-center"
                width={80}
                height={80}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="product"
              />
            </div>
            <div className="w-full items-center justify-between md:flex">
              <div className="mb-3 md:mb-0">
                <Link
                  href={item.link}
                  className="inline-block font-medium text-black hover:text-primary dark:text-white"
                >
                  {item.name}
                </Link>
                <p className="flex text-sm font-medium">
                  <span className="mr-5"> Color: {item.color} </span>
                  <span className="mr-5"> Size: {item.size} </span>
                </p>
              </div>
              <div className="flex items-center md:justify-end">
                <p className="mr-20 font-medium text-black dark:text-white">
                  Qty: {item.quantity}
                </p>
                <p className="mr-5 font-medium text-black dark:text-white">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
          <div className="mb-10">
            <h4 className="mb-4 text-title-sm2 font-medium leading-[30px] text-black dark:text-white md:text-2xl">
              Shipping Method
            </h4>
            <p className="font-medium">
              FedEx - Take up to 3 <br />
              working days.
            </p>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
          <div className="mb-10">
            <h4 className="mb-4 text-title-sm2 font-medium leading-[30px] text-black dark:text-white md:text-2xl">
              Payment Method
            </h4>
            <p className="font-medium">
              Apply Pay Mastercard <br />
              **** **** **** 5874
            </p>
          </div>
        </div>
        <div className="w-full px-4 xl:w-6/12">
          <div className="mr-10 text-right md:ml-auto">
            <div className="ml-auto sm:w-1/2">
              <p className="mb-4 flex justify-between font-medium text-black dark:text-white">
                <span> Subtotal </span>
                <span> $120.00 </span>
              </p>
              <p className="mb-4 flex justify-between font-medium text-black dark:text-white">
                <span> Shipping Cost (+) </span>
                <span> $10.00 </span>
              </p>
              <p className="mb-4 mt-2 flex justify-between border-t border-stroke pt-6 font-medium text-black dark:border-strokedark dark:text-white">
                <span> Total Payable </span>
                <span> $130.00 </span>
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-end gap-4 sm:flex-row">
              <button className="flex items-center justify-center rounded border border-primary px-8 py-2.5 text-center font-medium text-primary hover:opacity-90">
                Download Invoice
              </button>
              <button className="flex items-center justify-center rounded bg-primary px-8 py-2.5 text-center font-medium text-gray hover:bg-opacity-90">
                Send Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceOne;
