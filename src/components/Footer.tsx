import { footerData1, footerData2, footerData3 } from "@/constants/footerData";
import Link from "next/link";


const Footer = () => {
  return (
   <footer className="py-14 px-20 items-center text-2xl justify-center" id="footer">
    <div className="   bg-purple-700  rounded-lg flex flex-col">
        <div className="flex md:h-[36rem] items-center justify-around rounded-3xl flex-wrap">

            <div className="text-white max-w-[30rem] flex flex-col gap-5">
                <h1 className="text-3xl font-bold">Teamly</h1>
                <p className="text-lg leading-6 font-semibold">Teamly is powerful Framer template empowers you to streamline workflows, boost collaboration, and unleash your team's potential.</p>        
            </div>

            <div className="flex gap-10">
                <ul>
                    <h3 className="font-bold mb-3 text-xl">Main Pages</h3>
                    {footerData1.map((item, index) => (
                        <Link href={`${item.link}`} key={index}>
                            <li className="text-lg pt-3 font-normal">{item.name}</li>
                        </Link>
                    ))}
                </ul>
                <ul>
                <h3 className="text-xl font-bold mb-3">Secondary Pages</h3>
                    {footerData2.map((item, index) => (
                        <Link href={`${item.link}`} key={index}>
                            <li key={index} className="text-lg pt-3 font-normal">{item.name}</li>
                        </Link>
                    ))}
                </ul>
                <ul>
                <h3 className="text-xl font-bold mb-3">Extra Pages</h3>
                    {footerData3.map((item, index) => (
                        <Link href={`${item.link}`} key={index}>
                            <li key={index} className="text-lg pt-3 font-normal">{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
        <div className="text-white text-center mt-10">    
        ©2024 Copyrights Reserved by Teamly
        </div>

    </div>
    
   </footer>
  )
}

export default Footer