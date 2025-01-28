import { Link } from "@common-atoms/Link";
import { Image } from "@common-atoms/Image/Image";
import "./Navbar.css"

export const Navbar = () => {
    return(
        <>
            <Link className={"navbar-logo"} href={"#"} content={
                <Image className={"logo"} src={"./logo.png"} alt={"logo"}/>
            }/>
            <Link className={"navbar-link"} href={"#"} content={'Home'}/>
            <Link className={"navbar-link"} href={"#"} content={'About'}/>
            <Link className={"navbar-link"} href={"#"} content={'My space'}/>
        </>
    )
}