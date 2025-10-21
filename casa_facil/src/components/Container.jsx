export default function Container({ children }) {
  return (
    <main className="mx-auto mt-4 w-[90%] max-w-7xl rounded-xl border-2 border-black/40 bg-white p-5 shadow-[5px_5px_5px_rgba(96,66,9,0.54)]">
      {children}
    </main>
  )
}