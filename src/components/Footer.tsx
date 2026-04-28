export default function Footer() {
  return (
    <footer className="bg-surface-low full-width mt-auto border-t border-outline-variant/30 font-display">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="text-xl font-black text-primary mb-4">
            Goto Holidays
          </div>
          <p className="text-outline text-sm leading-relaxed mb-4">
            A sophisticated guide to global travel and seamless visa processing.
          </p>
          <p className="text-outline text-xs">
            © 2024 Goto Holidays. All rights reserved.
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-primary-container mb-1">Services</h4>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Visa Requirements</a>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Flight Status</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-primary-container mb-1">Legal</h4>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Privacy Policy</a>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-primary-container mb-1">Support</h4>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Help Center</a>
            <a href="#" className="text-outline text-sm hover:text-secondary underline underline-offset-4 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
