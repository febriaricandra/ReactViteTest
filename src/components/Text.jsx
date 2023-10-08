import React from "react";

export default function Text() {
  return (
    <aside className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white">
      <a
        href="https://cms-admin-v2.ihsansolusi.co.id/docs#/g"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium hover:opacity-75"
      >
        API Documentation, FastAPI
      </a>
    </aside>
  );
}
