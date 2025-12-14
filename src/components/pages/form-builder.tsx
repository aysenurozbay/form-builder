import { FieldPalette } from "../field-palette";
import { FormCanvas } from "../form-canvas";

export default function FormBuilderPage() {
  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
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
          <h1 className="text-xl font-semibold text-foreground">FormCraft</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            Preview
          </button>
          <button className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Publish
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Field Palette */}
        <aside className="w-64 overflow-y-auto border-r border-border bg-card">
          <FieldPalette />
        </aside>

        {/* Center - Form Canvas */}
        <main className="flex-1 overflow-y-auto bg-muted/20">
          <FormCanvas />
        </main>

        {/* Right Sidebar - Field Settings */}
        <aside className="w-80 overflow-y-auto border-l border-border bg-card">
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
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31 2.37 2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="mt-3 text-sm text-muted-foreground">
                Select a field to configure its properties
              </p>
            </div>

            {/* Placeholder Settings Sections */}
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
                <input
                  type="checkbox"
                  disabled
                  className="rounded border-input"
                />
                <label className="text-sm text-foreground">
                  Required field
                </label>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
