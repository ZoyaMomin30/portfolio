export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* <p className="text-sm text-gray-400">© {new Date().getFullYear()}. All rights reserved.</p> */}
          <p className="flex items-center justify-center text-center text-sm text-violet-300">Designed and developed by Zoya Momin — because good ideas deserve good execution. © {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  )
}
