import Link from "next/link";


export default function Header(data: any) {
    return (
     <>
       <div className= {`${data.font.className} links-parent`} >
          <ul className="links">
            <li className="link"><Link href="" style={ {color: "black"}}>Work</Link></li>
            <li className="link"><Link href="" style={{ color: "black"}}>Blog</Link></li>
            <li className="link"><Link href="" style={{ color: "black"}}>Contact</Link></li>
          </ul>
       </div>
     </>
    );
  }