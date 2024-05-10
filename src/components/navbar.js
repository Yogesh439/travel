import Image from "next/image";
import Link from 'next/link';



export default function Navbar() {
  return (
    <nav className="bg-white p-2 text-blue-900 flex flex-col lg:flex-row justify-between items-center border">
      <div>
        <Image
          src="/images/logo.png"
          alt="Navbar Logo"
          width={150}
          height={30}
          priority
        />
      </div>
      <div className="mt-4 lg:mt-0">
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-sm font-bold">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutUs">
              About Us
            </Link>
          </li>
          <li>Nepal Tour
            <select className="optionList" label="Nepal Tour" name="Nepal Tour">
              <option value="1 Day Private Tour">1 Day Private Tour</option>
              <option value="Kathmandu Valley Tour">Kathmandu Valley Tour</option>
              <option value="Kathmandu Pokhara Tour">Kathmandu Pokhara Tour</option>
              <option value="Kathmandu Chitwan Pokhara Tour">Kathmandu Chitwan Pokhara Tour</option>
              <option value="Nepal Family Holiday">Nepal Family Holiday</option>
              <option value="Best Nepal Tour">Best Nepal Tour</option>
              <option value="Nepal Buddhist Pilgrimage Tour">Nepal Buddhist Pilgrimage Tour</option>
              <option value="Nepal Culture Tour">Nepal Culture Tour</option>
              <option value="2 Week Tour In Nepal">2 Week Tour In Nepal</option>
              <option value="Luxury Tour In Nepal">Luxury Tour In Nepal</option>
              <option value="Yoga Meditation Tour In Nepal">Yoga Meditation Tour In Nepal</option>
            </select>
          </li>
          <li>Treking
            <select className="optionList" label="Treking">
              <option value="Everest Trekking">Everest Trekking</option>
              <option value="Annapurna Trekking">Annapurna Trekking</option>
              <option value="Langtang Trekking">Langtang Trekking</option>
              <option value="Nepal Luxury Treks">Nepal Luxury Treks</option>
              <option value="Upper Mustang Trekking">Upper Mustang Trekking</option>
              <option value="Manaslu Circuit Trekking">Manaslu Circuit Trekking</option>
              <option value="Nepal Short & Easy Treks">Nepal Short & Easy Treks</option>
              <option value="Nepal Family Trekking">Nepal Family Trekking</option>
              <option value="Kanchenjunga Trekking">Kanchenjunga Trekking</option>
              <option value="Upper Dolpo Trekking">Upper Dolpo Trekking</option>
              <option value="Other Treks In Nepal">Other Treks In Nepal</option>
              <option value="Nar Phu Valley Trek">Nar Phu Valley Trek</option>
              <option value="Guerrilla Trekking Trail">Guerrilla Trekking Trail</option>
              <option value="Tsum Valley Trekking With Manaslu Circuit">Tsum Valley Trekking</option>
              <option value="Makalu Base Camp Trek">Makalu Base Camp Trek</option>
            </select>
          </li>
          <li>
            <Link href="/travelInfo">
              Travel Info
            </Link>
          </li>
          <li>Peak Climbing
            <select className="optionList " label="Peak Climbing">
              <option value="Mera Peak Climbing">Mera Peak Climbing</option>
              <option value="Island Peak Climbing">Island Peak Climbing</option>
              <option value="Lobuche Peak Climbing">Lobuche Peak Climbing</option>
              <option value="Tent Peak Climbing">Tent Peak Climbing</option>
              <option value="Singu Chuli Peak Climbing">Singu Chuli Peak Climbing</option>
              <option value="Hiunchuli Peak Climbing">Hiunchuli Peak Climbing</option>
              <option value="Yala Peak Climbing">Yala Peak Climbing</option>
              <option value="Chulu East Peak Climbing">Chulu East Peak Climbing</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
