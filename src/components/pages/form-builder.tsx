"use client";

import { FieldPalette } from "@/components/field-palette";

import { useState } from "react";
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { FieldSettings } from "../field-settings";
import type { FormField } from "../../types/form-field";
import { FormCanvas } from "../form-canvas";

export default function FormBuilderPage() {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    if (active.id.toString().startsWith("palette-")) {
      const fieldType = active.id.toString().replace("palette-", "");
      const fieldName = active.data.current?.name || fieldType;
      const newField: FormField = {
        id: `field-${Date.now()}`,
        type: fieldType,
        name: fieldName,
        label: fieldName,
        placeholder: `Enter ${fieldName.toLowerCase()}...`,
        required: false,
      };
      setFormFields([...formFields, newField]);
      setSelectedFieldId(newField.id);
    } else if (
      active.id !== over.id &&
      active.id.toString().startsWith("field-")
    ) {
      const oldIndex = formFields.findIndex((field) => field.id === active.id);
      const newIndex = formFields.findIndex((field) => field.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        setFormFields(arrayMove(formFields, oldIndex, newIndex));
      }
    }
  };

  const handleUpdateField = (updatedField: FormField) => {
    setFormFields(
      formFields.map((field) =>
        field.id === updatedField.id ? updatedField : field
      )
    );
  };

  const selectedField =
    formFields.find((field) => field.id === selectedFieldId) || null;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-screen flex-col bg-background">
        <header className="flex h-14 items-center justify-between border-b border-border bg-card px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <svg
                className="h-5 w-5 text-primary-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-foreground">
              Form Builder
            </h1>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 overflow-y-auto border-r border-border bg-card">
            <FieldPalette />
          </aside>

          <main className="flex-1 overflow-y-auto bg-muted/20">
            <FormCanvas
              fields={formFields}
              selectedFieldId={selectedFieldId}
              onSelectField={setSelectedFieldId}
            />
          </main>

          <aside className="w-80 overflow-y-auto border-l border-border bg-card">
            <FieldSettings
              field={selectedField}
              onUpdateField={handleUpdateField}
            />
          </aside>
        </div>
      </div>

      <DragOverlay>
        {activeId ? (
          <div className="flex items-center gap-3 rounded-lg border border-primary bg-card px-4 py-3 shadow-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
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
            </div>
            <span className="text-sm font-medium">Dragging...</span>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
