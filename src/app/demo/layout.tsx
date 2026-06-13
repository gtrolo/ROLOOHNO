export default function DemoLayout({ children }: { children: React.ReactNode }) {
  // Demo split view bypasses the phone frame wrapper in root layout
  return <>{children}</>;
}
