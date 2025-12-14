import type React from "react";

export type FieldType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export type FormField = {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
};
