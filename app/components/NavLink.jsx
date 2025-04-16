import Link from "next/link"


const NavLink = ({ href, title }) =>{

    const handleClick = (e) => {
        if (href.startsWith("#")) {
          e.preventDefault();
          const id = href.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            const yOffset = -80; // adjust based on your fixed navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
    };


    return (
        <Link 
        href={href} 
        onClick={handleClick}
        className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
        {title}
        </Link>
    );
};


export default NavLink;