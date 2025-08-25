"use client";

const baseLine = "w-8 h-1 rounded-2xl bg-gray-900 transition-all duration-75";

const lineVariants = ["rotate-45", "hidden", "-rotate-45 -mt-1"];

interface HambergurProps { open: boolean, onToggle: (open: boolean) => void }

const Hamburger = ({ open, onToggle }: HambergurProps) => {
  return (
    <button
      className="lg:hidden p-2 rounded-md"
      onClick={() => onToggle(!open)}
    >
      <div className={`grid cursor-pointer ${!open && "gap-2"}`}>
        {lineVariants.map((variant, index) => (
          <div key={index} className={`${baseLine} ${open && variant}`} />
        ))}
      </div>
    </button >

  );
};

export default Hamburger;
