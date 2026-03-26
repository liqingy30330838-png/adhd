import Link from "next/link";

export default function HistoryPage() {
  const records = [
    {
      id: 1,
      date: "Today, 7:30 PM",
      homeUpdate: "Practiced waiting during dinner and used polite words with family members.",
      schoolNote: "Waited for turn during group activity, but needed one reminder during class discussion.",
      summary: "Good progress in turn-taking across home and school.",
      nextStep: "Continue practicing waiting during shared activities tomorrow.",
      status: "Improving",
    },
    {
      id: 2,
      date: "Yesterday, 5:40 PM",
      homeUpdate: "Used polite words during snack time, but became frustrated when asked to wait.",
      schoolNote: "Showed better participation in class, but emotional regulation still needed support.",
      summary: "Polite expressions improved, but emotional control remains a target skill.",
      nextStep: "Use one shared reminder phrase before group activities.",
      status: "Needs support",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top section */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            ADHD Support Hub
          </p>
          <h1 className="mt-3 text-4xl font-bold">Support History</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Saved updates from home and school to support continuous and coordinated intervention.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/collaboration"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
            >
              Back to Collaboration
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:shadow-md"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Weekly summary */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Weekly Summary</h2>
              <p className="mt-2 text-slate-600">
                A quick overview of the student’s recent support records across home and school.
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Updated this week
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">This week’s focus</p>
              <p className="mt-2 font-semibold">Wait your turn</p>
              <p className="text-sm text-slate-600">Use polite words</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Home updates</p>
              <p className="mt-2 text-2xl font-bold">2</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">School notes</p>
              <p className="mt-2 text-2xl font-bold">2</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Overall status</p>
              <p className="mt-2 font-semibold text-emerald-700">Improving gradually</p>
            </div>
          </div>
        </section>

        {/* Record list */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Saved Records</h2>
            <span className="text-sm text-slate-500">2 records</span>
          </div>

          <div className="space-y-6">
            {records.map((record) => (
              <div
                key={record.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{record.date}</p>
                    <h3 className="mt-2 text-xl font-semibold">Support Record #{record.id}</h3>
                  </div>

                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-medium ${
                      record.status === "Improving"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {record.status}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-500">Home Update</p>
                    <p className="mt-2 text-slate-700">{record.homeUpdate}</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-500">School Note</p>
                    <p className="mt-2 text-slate-700">{record.schoolNote}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm font-medium text-blue-700">Summary</p>
                  <p className="mt-2 text-slate-700">{record.summary}</p>
                </div>

                <div className="mt-4 rounded-2xl bg-violet-50 p-4">
                  <p className="text-sm font-medium text-violet-700">Suggested Next Step</p>
                  <p className="mt-2 text-slate-700">{record.nextStep}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}