import DashboardHeader from "@/components/dashboard/Header";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-screen overflow-x-hidden bg-white dark:bg-black min-h-screen">
            <DashboardHeader />
            {children}
        </main>
    )
}