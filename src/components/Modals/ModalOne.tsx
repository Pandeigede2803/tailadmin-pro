import React, { useState, useEffect, useRef } from "react";

const ModalOne: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef<any>(null);
  const modal = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <button
        ref={trigger}
        onClick={() => setModalOpen(!modalOpen)}
        className="rounded-md bg-primary px-9 py-3 font-medium text-white"
      >
        Modal 1
      </button>
      <div
        className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15"
        >
          <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Your Message Sent Successfully
          </h3>
          <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
          <p className="mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since
          </p>
          <div className="-mx-3 flex flex-wrap gap-y-4">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
              >
                Cancel
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
