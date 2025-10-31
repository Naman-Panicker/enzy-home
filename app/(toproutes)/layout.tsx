import { Topbar } from "@/components/Topbar";


export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Topbar/>
        {children}
    </div>
  );
}  