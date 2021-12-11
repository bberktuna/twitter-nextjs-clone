import Image from "next/image"
import SidebarLink from "./SidebarLink"

const Sidebar = () => {
  return (
    <div className="flex-col items-center hidden sm:flex xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center p-0 w-14 h-14 hoverAnimation xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 ">
        <SidebarLink />
      </div>
    </div>
  )
}

export default Sidebar
