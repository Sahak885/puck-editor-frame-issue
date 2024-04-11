import { FieldLabel } from "@measured/puck";
import Button from "@mui/material/Button";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const PuckImageUpload = (props: any) => {
  const { field, onChange, value } = props;
  const { label } = field;
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const pageId = query?.id as string;

  const handleUploadImage = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
  };

  return (
    <div>
      <FieldLabel label={label} />
      {value?.url && !isLoading && (
        <Button
          component={"label"}
          role={undefined}
          variant="contained"
          color={"error"}
          tabIndex={-1}
          sx={{
            width: "100%",
            height: "40px",
            marginBottom: "10px",
          }}
          onClick={() => onChange({ url: "" })}
        >
          Remove Image
        </Button>
      )}
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        sx={{
          width: "100%",
          height: "40px",
          backgroundColor: isLoading ? "#90caf9 !important" : "",
        }}
        disabled={isLoading}
      >
        {!isLoading && (
          <>
            {value?.url ? "Replace Image" : "Upload Image"}
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleUploadImage}
            />
          </>
        )}
      </Button>
    </div>
  );
};

export default PuckImageUpload;
