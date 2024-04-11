"use client"

import { loadStripe } from "@stripe/stripe-js";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import {useEffect} from "react";
import conf from "@/components/puckeditor/config";
import {initialData} from "@/components/puckeditor/initialData";

const save = () => {};

const Editor = () => {

  useEffect(() => {
    loadStripe("key")
      .then(stripe => {
        console.log(stripe, 'stripe')
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <Puck config={conf as any} data={initialData} onPublish={save} />;
}

export default Editor;