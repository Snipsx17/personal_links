export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center">{children}</div>
      <div className="bg-green-neon bg-[url(/bg_auth.png)] bg-contain bg-center bg-no-repeat hidden md:block" />
    </main>
  );
}
