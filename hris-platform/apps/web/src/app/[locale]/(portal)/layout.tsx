import type { ReactNode } from 'react';

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Portal layout will include header, sidebar, etc. in next phase */}
      {children}
    </div>
  );
}
