import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <div className="text-center mt-4 mb-12"> {/* Ajusta estos valores según tus necesidades */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 mt-4"> {/* Ajusta el tamaño del título según tus necesidades */}
          ¡Bienvenido a tu Página con <span style={{ color: '#FF9F1C', textShadow: '2px 2px 4px #000000' }}>TailwindCSS</span>&quot;!
        </h1>

        <div className="mt-6">
          <p className="text-lg sm:text-xl lg:text-2xl">
            Descubre cómo crear sitios web asombrosos con TailwindCSS.
          </p>
        </div>

        <div className="mt-10 mb-10 text-2xl"> {/* Ajusta estos valores según tus necesidades */}
          <p className="font-semibold mb-4">🚀 Objetivos</p>

          <ul className="list-disc list-inside">
            <li className="mb-4">Aprender a integrar TailwindCSS en tu proyecto</li>
            <li className="mb-4">Conocer las clases comunes de TailwindCSS</li>
            <li className="mb-4">Explorar las extensiones para el autocompletado de TailwindCSS</li>
            <li>Desarrollar una página web con componentes de TailwindCSS</li>
          </ul>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-lg"> {/* Ajusta estos valores según tus necesidades */}
          <h2 className="text-3xl font-bold mb-4">&quot;Best practices&quot; don’t actually work</h2>
          <p>
            I ve written a few thousand words on why traditional &quot;semantic class names&quot; are the reason CSS is hard to maintain, but the truth is you re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you ll wonder how you ever worked with CSS any other way. Adam Wathan
          </p>
        </div>
      </div>

      <footer className="absolute bottom-8 right-12">
        <Link href="/tailwind">
          <button className="px-6 py-3 bg-indigo-700 text-white rounded-md shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Siguiente
          </button>
        </Link>
      </footer>
    </section>
  )
}
