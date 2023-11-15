import Header from "./component/Header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-max bg-slate-100">
      {/* Header */}
      <Header />
      <main className="pb-20 pt-40">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default MarketingLayout;
