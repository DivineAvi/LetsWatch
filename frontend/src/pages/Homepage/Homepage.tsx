import Navbar from "../../components/Navbar/Navbar";
import Featured from "./Featured";
import Hero from "./Hero";
import Room from "./Room";

export default function Homepage() {
  return (
    <div className="min-h-full w-full bg-black">
        <Navbar/>
        <Hero/>
        <Room/>
        <Featured/>
    </div>
  )
}
