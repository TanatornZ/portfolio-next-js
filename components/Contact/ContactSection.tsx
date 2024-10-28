"use client";

import React, { useMemo } from "react";
import Section from "../Section";
import { cx } from "@emotion/css";
import Lottie from "react-lottie";
import * as animationData from "@assets/programmer_lottie.json";
import useViewModel from "./viewModel";

function ContactSection() {
  const { formData, handleChange, handleSubmit, ref, disableButton } =
    useViewModel();

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }, []);

  return (
    <Section id="contact-section">
      <div className="w-full max-w-6xl mx-auto">
        <div className="">
          <h1 className="text-center text-2xl md:text-4xl font-semibold">
            Let&apos;s Work Together
          </h1>

          <div className="md:flex md:justify-between md:items-start lg:gap-8 mt-8 md:mt-12">
            <form
              className="space-y-4 basis-1/2"
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
                type="textArea"
                name="message"
                placeholder="Message"
                label="Message"
                className="max-h-[160px]"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="w-full flex justify-center  md:mt-4">
                <button
                  className={cx(
                    "py-3 px-4 rounded-md font-semibold transition-all w-full md:max-w-[300px]",
                    disableButton
                      ? "bg-blue-200 cursor-not-allowed text-slate-100"
                      : "bg-blue-500 hover:bg-blue-600 hover:rounded-tl-[24px] hover:rounded-br-[24px] text-white"
                  )}
                  type={disableButton ? "button" : "submit"}
                >
                  Contact me
                </button>
              </div>
            </form>
            <div className="hidden md:block mx-auto !cursor-default">
              <Lottie
                style={{ cursor: "default" }}
                options={defaultOptions}
                isClickToPauseDisabled={true}
                height={300}
                width={300}
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
  onChange: (e: any) => void;
  placeholder: string;
  className?: string;
}) => {
  return (
    <div>
      <label className="block text font-semibold text-gray-900">{label}</label>
      <div className="mt-2">
        {type != "textArea" ? (
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
        ) : (
          <textarea
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
            className={cx(
              "block w-full rounded-md border-0 p-3 md:p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  min-h-20 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ",
              className
            )}
          ></textarea>
        )}
      </div>
    </div>
  );
};
