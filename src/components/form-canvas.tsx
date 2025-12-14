export function FormCanvas() {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Untitled Form
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Drag fields from the left sidebar to build your form
          </p>
        </div>

        {/* Empty State */}
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/20 transition-colors hover:border-muted-foreground/40 hover:bg-muted/30">
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
        </div>
      </div>
    </div>
  );
}
