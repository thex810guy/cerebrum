import AuthForm from "@/components/AuthForm"
import icon from "@/assets/cerebrum-icon.svg"
import H3 from "@/font/H3"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NavLink } from "react-router";

export default function SignIn() {
    function onSubmit(values: {email: string, password: string}) {
        alert(JSON.stringify(values))
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center w-full max-w-64">
                <NavLink to="/">
                <img src={icon} alt="cerebrum" className="size-12"/>
                </NavLink>
                <H3>Cerebrum Sign-In</H3>
                <AuthForm onSubmit={onSubmit} width="64"/>
                <div className="w-full flex flex-col gap-2 items-center text-center">
                    <Button variant="outline" className="w-full">
                        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="google" className="size-4"/>
                        Sign-In with Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" alt="discord" className="size-4"/>
                        Sign-In with Discord
                    </Button>
                </div>
                <Separator />
                <div className="flex flex-col gap-1 items-center text-center">
                    <p className="text-xs">Already have an Account? Click here to <NavLink className="text-blue-600 hover:text-blue-900 active:text-purple-800" to="/log-in">Login</NavLink></p>
                </div>
            </div>
        </div>
    )
}