import { SidebarProps } from "@/app/types"

const Sidebar = ({ file, currentFunnelPage }: SidebarProps) => {
  return (
    <div className="md:block hidden bg-background flex flex-col px-6 py-4 fixed left-0 top-20 shadow-md h-full overlow-scroll">
      <p>
        Funnel name: {file.name}
      </p>
      <p>
        Background color: {file.bgColor}
      </p>
      <p>
        Pages: {file.pages.length}
      </p>
      <div>
        Blocks:
        {file.pages[currentFunnelPage].blocks.map((b: any) => <div className="border rounded m-1" key={b.id}>{b.type}</div>)}
      </div>
    </div>
  )
}

export default Sidebar;