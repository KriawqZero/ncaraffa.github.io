export default function Block({ children }) {
  return (
    <div className="mx-auto my-5 block w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] rounded-xl border-2 border-black bg-white p-3 sm:p-4 md:p-5 text-justify font-[Montserrat] shadow-[5px_5px_black]">
      {children}
    </div>
  )
}