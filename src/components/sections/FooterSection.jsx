export function FooterSection() {
  const footerLinks = {
    Services: ["Engineering", "Experience", "Automation", "Cloud Tech", "Data & AI"],
    Company: ["About", "Case Studies", "Careers", "Resources"],
    Industries: ["Banking & Finance", "Retail", "Healthcare", "Hi-Tech", "Automotive", "Travel"],
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-wider">42works</span>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              AI-Powered Experience Engineering for the Digital Enterprise.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-slate-300 mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 42works. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
