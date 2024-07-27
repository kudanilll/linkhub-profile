export default function LitUpBorderButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="p-[3px] relative font-bold transform focus:-translate-y-1 transition duration-400 select-none"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
      <div className="px-8 py-2 bg-transparent rounded-full relative group transition duration-200 text-white hover:bg-transparent">
        {children}
      </div>
    </button>
  );
}
