import { IconAsset, IconBook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandMeta, IconBrandWhatsapp, IconBrandX, IconDeviceDesktop, IconDeviceDesktopSearch, IconDeviceLaptop, IconJoinBevel } from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router";

const Footer = () => {
    const location = useLocation()
    return location.pathname != '/signup' && location.pathname != '/login' ? (
        <>
            <div className="mt-4 pb-2 justify-around flex">
                <div className="w-1/4 p-2 gap-3">
                    <div className='flex gap-2 items-center text-blue-500'>
                        <IconDeviceLaptop className="h-5 w-5" stroke={2} />
                        <div className='text-2xl font-semibold' >K-Kareer </div>
                    </div>
                    <div className="text-sm">
                        Our platform keeps you updated with the latest job opportunities, industry trends, and skill-building resources.
                        Whether you're starting fresh or aiming higher, K-Kareer guides you every step of the way toward success.                    </div>
                    <div className="flex mt-6 mb-6 [&>div]:text-black [&>div]:bg-blue-200 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer gap-2">
                        <div><IconBrandMeta /></div>
                        <div><IconBrandX /></div>
                        <div><IconBrandLinkedin /></div>
                        <div><IconBrandGithub /></div>
                        <div><IconBrandInstagram /></div>
                        <div><IconBrandWhatsapp /></div>
                    </div>

                </div>

                {
                    footerLinks.map((fLinks, idx) => {
                        return (
                            <div key={idx}>
                                <div className="text-lg font-semibold">{fLinks.title}</div>
                                {
                                    fLinks.links.map((linkname, id) =>
                                        <div key={id} className="mb-1 hover:translate-x-2 cursor-pointer">{linkname}</div>)
                                }
                            </div>
                        )
                    })
                }


            </div>
        </>
    ) : (<></>)
}


export default Footer;