import Icon from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 gap-6">
      <Icon />
      <h1 className="text-4xl font-semibold text-center">LAB510</h1>
    </header>
  )
}