import FadeIn from "./FadeIn";

const rows = [
  {
    feature: "Átfutási idő",
    agency: "5-10 munkanap",
    weblelet: "48 óra",
  },
  {
    feature: "Ár",
    agency: "200.000 - 600.000 Ft",
    weblelet: "49.900 Ft",
  },
  {
    feature: "AI keresők elemzése",
    agency: null,
    weblelet: true,
  },
  {
    feature: "Személyre szabott",
    agency: true,
    weblelet: true,
  },
  {
    feature: "Cselekvési terv",
    agency: "Általános javaslat",
    weblelet: "Konkrét lépések forintban",
  },
  {
    feature: "Versenytárs elemzés",
    agency: "Ritkán",
    weblelet: true,
  },
];

function CellValue({ value }: { value: boolean | string | null }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-success/10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
      </span>
    );
  if (value === null || value === false)
    return (
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-danger/10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </span>
    );
  return <span>{value}</span>;
}

export default function WhyUs() {
  return (
    <section id="miert-mi" className="py-20 sm:py-28 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Miért jobb ez mint egy{" "}
              <span className="text-primary">hagyományos ügynökség?</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-background-alt">
                    <th className="px-6 py-4 text-left font-semibold text-foreground" />
                    <th className="px-6 py-4 text-center font-semibold text-foreground-muted">
                      Marketing ügynökség
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-primary">
                      WebLelet ⭐
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-background-alt/50"}`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-foreground-muted">
                        <CellValue value={row.agency} />
                      </td>
                      <td className="px-6 py-4 text-center font-medium text-foreground">
                        <CellValue value={row.weblelet} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
