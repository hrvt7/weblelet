"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("weblelet-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("weblelet-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("weblelet-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-card/95 backdrop-blur-md shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-foreground-secondary leading-relaxed">
          <p>
            Az oldal sütiket használ a működéshez és a látogatottság méréséhez (Google Analytics).{" "}
            <a
              href="/adatvedelem"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Adatvédelmi tájékoztató
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground-muted border border-border hover:bg-surface hover:text-foreground transition-all"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="rounded-lg px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 shadow-md transition-all"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
