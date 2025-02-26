import DashboardHeader from "@/components/dashboard/Header";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-screen overflow-x-hidden bg-zinc-50 dark:bg-zinc-950 min-h-screen">
            <DashboardHeader />
            {children}
        </main>
    )
}