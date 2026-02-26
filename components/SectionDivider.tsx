"use client";

export function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center my-4 overflow-hidden h-8">
      <div className="divider w-full" />
      <div
        className="absolute w-2 h-2 rounded-full"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}
