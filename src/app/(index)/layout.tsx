interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function IndexLayout({ children }: LobbyLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
