import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

function useViewModel() {
  const ref = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    console.log("ref.current => ", ref.current);
    setDisableButton(!ref.current?.checkValidity());
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    if (!ref.current) return;
    e.preventDefault;

    const sendContact = new Promise(async (resolve, reject) => {
      if (!ref.current) return reject("error");

      return emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
          ref.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
          }
        )
        .then(() => {
          resolve("success");
        })
        .catch(() => {
          reject("fail");
        })
        .finally(() => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setDisableButton(true);
          ref.current?.reset();
        });
    });

    toast.promise(sendContact, {
      loading: "Saving...",
      success: <b>Contact Sended.</b>,
      error: <b>Contact not Sended.</b>,
    });
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    ref,
    disableButton,
  };
}

export default useViewModel;
