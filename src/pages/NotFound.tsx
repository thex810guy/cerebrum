import { Button } from "@/components/ui/button"
import H1 from "@/font/H1"
import H2 from "@/font/H2"
import InlineCode from "@/font/InlineCode"
import { Link } from "react-router"

export default function NotFound() {
    return (<div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4">
                <H1 className="text-center">404 Not Found</H1>
                <H2 className="text-center">We couldn't find {window.location.pathname.length < 20 ? 
                    <InlineCode>{window.location.pathname}</InlineCode>: 
                    "the page you're looking for"
                }.</H2>
            </div>
            <div>
                <Button className="mb-4">
                    <Link to="/">Go Back to Homepage</Link>
                </Button>
            </div>
        </div>
    </div>)
}