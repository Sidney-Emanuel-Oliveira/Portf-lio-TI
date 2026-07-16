interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-2xl font-semibold text-text-primary md:text-3xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}