export default function Footer() {
  return (
    <footer className="border-t border-[#262626] px-6 py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[12px] text-[#707070] font-mono">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}