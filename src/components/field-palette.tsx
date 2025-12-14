import type React from "react";
export type FieldType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const fieldTypes: FieldType[] = [
  {
    id: "text",
    name: "Text Input",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    id: "select",
    name: "Select",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    id: "checkbox",
    name: "Checkbox",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "date",
    name: "Date",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function FieldPalette() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-sm font-semibold text-foreground">
        Field Types
      </h2>
      <div className="space-y-2">
        {fieldTypes.map((field) => (
          <button
            key={field.id}
            className="group flex w-full items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-left transition-all hover:border-primary hover:bg-accent hover:shadow-sm active:scale-[0.98]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
              {field.icon}
            </div>
            <span className="text-sm font-medium text-foreground">
              {field.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
