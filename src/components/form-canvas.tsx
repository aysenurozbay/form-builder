"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { FormField } from "../types/form-field";
function SortableFieldItem({
  field,
  isSelected,
  onSelect,
}: {
  field: FormField;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: field.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Get icon based on field type
  const getIcon = (type: string) => {
    switch (type) {
      case "text":
        return (
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
        );
      case "select":
        return (
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
        );
      case "checkbox":
        return (
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
        );
      case "date":
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onSelect}
      className={`group flex cursor-move items-center gap-3 rounded-lg border px-4 py-3 transition-all hover:shadow-sm ${
        isSelected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border bg-background hover:border-primary"
      } ${isDragging ? "opacity-50" : ""}`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
        {getIcon(field.type)}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{field.name}</p>
        <p className="text-xs text-muted-foreground capitalize">
          {field.type} field
        </p>
      </div>
      <div className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        <svg
          className="h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 8h4m0 0V4m0 4l-4-4m16 4h-4m0 0V4m0 4l4-4M4 16h4m0 0v4m0-4l-4 4m16-4h-4m0 0v4m0-4l4 4" />
        </svg>
      </div>
    </div>
  );
}

export function FormCanvas({
  fields,
  selectedFieldId,
  onSelectField,
}: {
  fields: FormField[];
  selectedFieldId: string | null;
  onSelectField: (fieldId: string | null) => void;
}) {
  const { setNodeRef } = useDroppable({
    id: "form-canvas",
  });

  return (
    <div className="mx-auto max-w-5xl p-8">
      <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Untitled Form
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Drag fields from the left sidebar to build your form
          </p>
        </div>

        <div
          ref={setNodeRef}
          className={`min-h-[400px] rounded-lg transition-colors ${
            fields.length === 0
              ? "flex items-center justify-center border-2 border-dashed border-muted-foreground/25 bg-muted/20 hover:border-muted-foreground/40 hover:bg-muted/30"
              : "space-y-3 border-2 border-dashed border-transparent p-4"
          }`}
        >
          {fields.length === 0 ? (
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-muted-foreground/60"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-4 text-base font-medium text-foreground">
                Drag fields here to build your form
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Select fields from the palette on the left
              </p>
            </div>
          ) : (
            <SortableContext
              items={fields.map((f) => f.id)}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field) => (
                <SortableFieldItem
                  key={field.id}
                  field={field}
                  isSelected={selectedFieldId === field.id}
                  onSelect={() => onSelectField(field.id)}
                />
              ))}
            </SortableContext>
          )}
        </div>
      </div>
    </div>
  );
}
