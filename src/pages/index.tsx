import { Slider } from "@/components/ui/slider";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [borderRadius, setBorderRadius] = useState(10);
  const [padding, setPadding] = useState(20);
  const [size, setSize] = useState(200);

  // Limita el padding máximo según el tamaño disponible
  const maxPadding = Math.floor(size / 2 - 22); // restamos 8 por los bordes (4px de cada lado)
  const safePadding = Math.min(padding, maxPadding);

  return (
    <main
      className={`${geistSans.className} ${geistMono.className} h-dvh flex flex-col justify-center items-center bg-white`}
    >
      <figure
        className="border-4 flex flex-col items-start border-neutral-300 relative"
        style={{
          padding: safePadding,
          borderRadius: borderRadius + safePadding,
          width: size,
          height: size,
        }}
      >
        <aside
          className="border-t-4 border-l-4 border-green-500 top-[-4px] left-[-4px] absolute bg-transparent"
          style={{
            borderTopLeftRadius: borderRadius + safePadding,
            width: size / 2,
            height: size / 2,
          }}
        ></aside>
        <div
          className="border-4 p-4 bg-blue-100 border-blue-300 flex justify-center items-center h-full w-full"
          style={{
            borderRadius,
          }}
        >
          <p className="text-blue-500 font-bold">{borderRadius}px</p>
        </div>
        <aside
          className="border-t-4 border-l-4 border-blue-500 absolute bg-transparent"
          style={{
            borderTopLeftRadius: borderRadius,
            width: (size - safePadding * 2 - 8) / 2,
            height: (size - safePadding * 2 - 8) / 2,
          }}
        ></aside>
      </figure>

      <section className="absolute top-5 right-5 p-4 flex flex-col gap-4 border bg-white rounded-lg w-[320px]">
        <div>
          <label className="block mb-2 text-black">
            Border Radius: {borderRadius}px
          </label>
          <Slider
            max={100}
            step={1}
            value={[borderRadius]}
            onValueChange={(value) => setBorderRadius(value[0])}
          />
        </div>

        <div>
          <label className="block mb-2 text-black">
            Padding: {safePadding}px (max: {maxPadding}px)
          </label>
          <Slider
            max={maxPadding}
            step={1}
            value={[safePadding]}
            onValueChange={(value) => setPadding(value[0])}
          />
        </div>

        <div>
          <label className="block mb-2 text-black">Dimension: {size}px</label>
          <Slider
            max={500}
            min={100}
            step={1}
            value={[size]}
            onValueChange={(value) => {
              setSize(value[0]);
            }}
          />
        </div>

        <header className="flex flex-row gap-4 w-full">
          <p className="text-green-500 font-bold text-sm">
            {borderRadius + safePadding}px
          </p>
          <p className="text-gray-500 font-bold text-sm text-center">
            {safePadding}px
          </p>
          <p className="text-blue-500 font-bold">{borderRadius}px</p>
        </header>
      </section>
    </main>
  );
}
