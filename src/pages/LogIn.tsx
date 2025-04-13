import AuthForm from "@/components/AuthForm"
import icon from "@/assets/cerebrum-icon.svg"
import H3 from "@/font/H3"
import useToggleState from "@/hooks/useToggleState"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { NavLink } from "react-router";

export default function LogIn() {
    const [remember, toggleRemember] = useToggleState(false)

    function onSubmit(values: {email: string, password: string}) {
        alert(JSON.stringify(values))
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center w-full max-w-64">
                <NavLink to="/">
                <img src={icon} alt="cerebrum" className="size-12"/>
                </NavLink>
                <H3>Cerebrum Log-In</H3>
                <AuthForm onSubmit={onSubmit} width="64"/>
                <div className="w-full flex flex-col gap-2 items-center text-center">
                    <Button variant="outline" className="w-full">
                        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="google" className="size-4"/>
                        Log-In with Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" alt="discord" className="size-4"/>
                        Log-In with Discord
                    </Button>
                </div>
                <Separator />
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember-me" checked={remember} onCheckedChange={toggleRemember} />
                    <label
                        htmlFor="remember-me"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <div className="flex flex-col gap-1 items-center text-center">
                    <p className="text-xs">Don't have an Account? Click here to <NavLink className="text-blue-600 hover:text-blue-900 active:text-purple-800" to="/sign-up">Sign-Up</NavLink></p>
                    <p className="text-xs">Forgot password? <NavLink className="text-blue-600 hover:text-blue-900 active:text-purple-800" to="/forgot-password">Reset your password</NavLink></p>
                </div>
            </div>
        </div>
    )
}