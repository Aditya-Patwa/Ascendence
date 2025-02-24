export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-screen overflow-x-hidden">
            {children}
        </main>
    )
}