import DashboardHeader from "@/components/dashboard/Header";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-screen overflow-x-hidden">
            <DashboardHeader />
            {children}
        </main>
    )
}