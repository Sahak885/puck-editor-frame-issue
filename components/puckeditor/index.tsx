"use client";
import { Puck, Config } from "@measured/puck";
import "@measured/puck/puck.css";
import conf, { initialData } from "./config";
import React, { FC } from "react";
interface IEditorProps {
  isEditMode?: boolean;
}

const Editor: FC<IEditorProps> = ({ isEditMode = false }) => {


  const iframeEnabled = {
    enabled: true,
  };

  return (
        <Puck
          config={conf as Config}
          iframe={iframeEnabled}
          data={initialData}
        />
  );
};

export default Editor;
