import { SingleBalloon } from "./Balloon"
import Input from "./SimpleInput"

export default function ({ color }: { color: string }) {
    return (
        < div className="relative" >
            <SingleBalloon color={color} />
            <div className="rounded-sm absolute bg-red-50 left-[27px] top-[75px] text-black drop-shadow-sm">
                <Input placeholder="Your Task Here" />
            </div>
        </div >

    )
}