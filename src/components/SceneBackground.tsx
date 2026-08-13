import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SceneCanvas = lazy(() => import("./three/SceneCanvas"));

export function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 grid-glow opacity-40" aria-hidden />
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <SceneCanvas />
        </Suspense>
      </ClientOnly>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, color-mix(in oklab, var(--background) 85%, transparent) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
