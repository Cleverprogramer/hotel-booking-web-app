"use client";
import ButtonSecondary from "@/components/shared/Button/ButtonSecondary";
import { RoomAmentities } from "@/data/RoomAmentities";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ButtonClose from "@/components/shared/Button/ButtonClose";

interface IAmentites {
  title: string;
  desc: string;
  isOpen: boolean;
  number: number;
}

const SectionAmentities = ({ desc, isOpen, title, number }: IAmentites) => {
  let [isOpenModalAmenities, setIsOpenModalAmenities] = React.useState(false);
  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }
  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70">
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {RoomAmentities.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8">
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };
  return (
    <div className="listingSection__wrap">
      <div>
        <h2 className="text-2xl font-semibold">{title} </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {desc}
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* 6 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
        {RoomAmentities.filter((_, i) => i < number).map((item) => (
          <div key={item.name} className="flex items-center space-x-3">
            <i className={`text-3xl las ${item.icon}`}></i>
            <span className=" ">{item.name}</span>
          </div>
        ))}
      </div>
      {isOpen ? (
        <>
          <div className="w-14 border-b border-neutral-200"></div>
          <div>
            <ButtonSecondary onClick={openModalAmenities}>
              View more {RoomAmentities.length} amenities
            </ButtonSecondary>
          </div>
          {renderMotalAmenities()}
        </>
      ) : null}
    </div>
  );
};

export default SectionAmentities;
