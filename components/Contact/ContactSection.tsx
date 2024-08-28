"use client";

import React, { useEffect } from "react";
import Section from "../Section";
import { cx } from "@emotion/css";
import contact from "@assets/image/contact.jpg";
import Image from "next/image";
import useViewModel from "./viewModel";

function ContactSection() {
  const { formData, handleChange, handleSubmit, ref, disableButton } =
    useViewModel();

  console.log("disableButton => ", disableButton);

  return (
    <Section>
      <div className="w-full max-w-6xl mx-auto">
        <div className="">
          <h1 className="text-center text-2xl md:text-4xl font-semibold">
            Let&apos;s Work Together
          </h1>

          <div className="lg:flex lg:justify-between lg:gap-8 mt-4 md:mt-8">
            <form
              className="space-y-4 lg:basis-1/2"
              action={handleSubmit}
              ref={ref}
            >
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="message"
                placeholder="Message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="w-full flex justify-center  md:mt-4">
                <button
                  className={cx(
                    "py-3 px-4 rounded-md font-semibold text-white  transition-all w-full md:max-w-[300px]",
                    disableButton
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 hover:rounded-tl-[24px] hover:rounded-br-[24px]"
                  )}
                  type={disableButton ? "button" : "submit"}
                >
                  Contact me
                </button>
              </div>
            </form>
            <div className="relative basis-1/2 overflow-hidden">
              <Image
                src={contact}
                alt="contact"
                fill
                sizes="50vw"
                quality={100}
                className="object-cover scale-125 object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}) => {
  return (
    <div>
      <label className="block text font-semibold text-gray-900">{label}</label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required
          className={cx(
            "block w-full rounded-md border-0 p-3 md:p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ",
            className
          )}
        />
      </div>
    </div>
  );
};
