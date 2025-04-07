import { Button } from "@/components/ui/button"
import H1 from "@/font/H1"
import H2 from "@/font/H2"

export default function Homepage() {
    return (<Hero />)
}

function Hero() {
    return (<div className="w-full h-182 flex items-center justify-center">
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4">
                <H1 className="text-center">No Paywalls, Just Progress</H1>
                <H2 className="text-center">A 100% free, community-powered toolkit to master anything.</H2>
            </div>
            <div>
                <Button className="mb-4">Get Started</Button>
                <br />
                <Button variant="outline">Contribute</Button>
            </div>
        </div>
    </div>)
}