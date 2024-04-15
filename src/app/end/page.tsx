'use client'
import confetti from 'canvas-confetti';
import Link from "next/link";
import { useEffect } from "react";

export default function End() {
  useEffect(() => {
    confetti({
      particleCount: 250,
      spread: 300,
      origin: { y: 0.2 }
    });
  }, [])

  return <section className="flex flex-col items-center justify-center px-4 md:px-0 min-h-[100svh]">

     <div className="fixed inset-0 h-full w-full bg-gradient-to-b from-purple-900 to-indigo-900"></div>



    <div className="text-balance z-10">
      <h1 className="text-white font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight">
  ¡Felicidades! 🎊
</h1>

      <div className="mt-4 text-white">
        <p>
          📌 Has aprendido a
        </p>

        <ul className="ml-12 list-disc">
          <li>Integrar TailwindCSS</li>
          <li>Clases cómunes de TailwindCSS</li>
          <li>Extensiones para el autocompletado de TailwindCSS</li>
          <li>Desarrollar una página web con componentes de TailwindCSS</li>
        </ul>
      </div>
    </div>

    <div className="hidden md:absolute bottom-8 right-14">
      Desarrollada por {'<BytesJotaeme />'}
    </div>

    <footer className="z-10 absolute bottom-8 left-12">
      <Link href="/">
        <button className="p-4 bg-zinc-900 text-white rounded-lg">
          Volver
        </button>
      </Link>
    </footer>
  </section>
}