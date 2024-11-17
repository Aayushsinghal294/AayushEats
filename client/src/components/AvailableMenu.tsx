import { Card } from "./ui/card"
import Image from "@/assets/hero_pizza.png"

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">Available Menus</h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-8">
        <Card className="max-w-xs shadow-lg rounded-lg overflow-hidden">
<img src={Image} alt="" />
        </Card>
      </div>
    </div>
  )
}

export default AvailableMenu
