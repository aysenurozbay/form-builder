"use client";

import type { FormField } from "../types/form-field";
type FieldSettingsProps = {
  field: FormField | null;
  onUpdateField: (field: FormField) => void;
};

export function FieldSettings({ field, onUpdateField }: FieldSettingsProps) {
  if (!field) {
    return (
      <div className="p-4">
        <h2 className="mb-4 text-sm font-semibold text-foreground">
          Field Settings
        </h2>

        <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
          <svg
            className="mx-auto h-10 w-10 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="mt-3 text-sm text-muted-foreground">
            Select a field to configure its properties
          </p>
        </div>

        <div className="mt-6 space-y-4 opacity-40">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">
              Label
            </label>
            <input
              type="text"
              disabled
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Field label"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">
              Placeholder
            </label>
            <input
              type="text"
              disabled
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Placeholder text"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" disabled className="rounded border-input" />
            <label className="text-sm text-foreground">Required field</label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-sm font-semibold text-foreground">
        Field Settings
      </h2>

      <div className="mb-4 rounded-lg border border-primary/50 bg-primary/5 p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
            <svg
              className="h-4 w-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-foreground/80">
              Selected Field
            </p>
            <p className="text-sm font-semibold capitalize text-foreground">
              {field.type}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground">
            Label
          </label>
          <input
            type="text"
            value={field.label}
            onChange={(e) => onUpdateField({ ...field, label: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Field label"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            The label shown above the field
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground">
            Placeholder
          </label>
          <input
            type="text"
            value={field.placeholder}
            onChange={(e) =>
              onUpdateField({ ...field, placeholder: e.target.value })
            }
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Placeholder text"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Text shown inside the empty field
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/20 p-3">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={field.required}
              onChange={(e) =>
                onUpdateField({ ...field, required: e.target.checked })
              }
              className="mt-0.5 h-4 w-4 rounded border-input text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
            <div className="flex-1">
              <span className="text-sm font-medium text-foreground">
                Required field
              </span>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Users must fill this field to submit the form
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
