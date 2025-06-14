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
  const [size, setSize] = useState(400);
  return (
    <main
      className={`${geistSans.className} ${geistMono.className} h-dvh flex flex-col  bg-white`}
    >
      <section className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-2">
          <header className="grid grid-cols-3 ">
            <p className="text-green-500 font-bold text-sm">
              {borderRadius + padding}px
            </p>
            <p className="text-gray-500 font-bold text-sm text-center">
              {padding}px
            </p>
            <p className="text-gray-500"></p>
          </header>

          <figure
            className="border-4  flex flex-col items-start border-neutral-300  w-[400px] h-[400px]  relative"
            style={{
              padding,
              borderRadius: borderRadius + padding,
              width: size,
              height: size,
            }}
          >
            <div
              className="border-t-4 border-l-4 border-green-500 top-[-4px] left-[-4px] absolute  bg-transparent "
              style={{
                borderTopLeftRadius: borderRadius + padding,
                width: size / 2,
                height: size / 2,
              }}
            ></div>
            <div
              className="border-4 p-4 bg-blue-100 border-blue-300 flex justify-center items-center h-full w-full"
              style={{
                borderRadius,
              }}
            >
              <p className="text-blue-500 font-bold">{borderRadius}px</p>
            </div>
            <div
              className="border-t-4 border-l-4 border-blue-500 absolute  bg-transparent "
              style={{
                borderTopLeftRadius: borderRadius,
                width: size / 2,
                height: size / 2,
              }}
            ></div>
          </figure>
          <section className="flex flex-col gap-4  w-[400px]  p-6">
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
                Padding: {padding}px
              </label>
              <Slider
                max={100}
                step={1}
                value={[padding]}
                onValueChange={(value) => setPadding(value[0])}
              />
            </div>
            <div>
              <label className="block mb-2 text-black">
                Dimension: {size}px
              </label>
              <Slider
                max={500}
                min={100}
                step={1}
                value={[size]}
                onValueChange={(value) => setSize(value[0])}
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
