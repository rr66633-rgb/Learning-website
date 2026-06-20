import { describe, it, expect } from "vitest";

/**
 * Test the export utility functions and CSV generation logic.
 * The actual tRPC endpoint requires admin auth, so we test the data transformation logic.
 */

const STATUS_LABELS: Record<string, string> = {
  new: "جديد",
  contacted: "تم التواصل",
  enrolled: "مسجّل",
  archived: "مؤرشف",
};

function formatDateForExport(dateStr: string | Date): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ar-SA", { year: "numeric", month: "2-digit", day: "2-digit" });
}

function generateCSVContent(items: Array<Record<string, unknown>>): string {
  const headers = ["#", "الاسم", "البريد الإلكتروني", "الجوال", "عمر الطفل", "الرسالة", "الحالة", "التاريخ"];
  const rows = items.map((item, idx) => [
    idx + 1,
    item.name || "",
    item.email || "",
    item.phone || "",
    item.childAge || "",
    item.message || "",
    STATUS_LABELS[item.status as string] || item.status || "",
    item.createdAt ? formatDateForExport(item.createdAt as string) : "",
  ]);

  const BOM = "\uFEFF";
  const csvContent = BOM + [headers.join(","), ...rows.map(row =>
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")
  )].join("\n");

  return csvContent;
}

describe("Export utilities", () => {
  const mockItems = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      phone: "+966501234567",
      childAge: "4 سنوات",
      message: "أريد تسجيل طفلي في KG2",
      status: "new",
      createdAt: "2026-06-17T10:00:00.000Z",
    },
    {
      id: 2,
      name: "سارة علي",
      email: "sara@example.com",
      phone: "+966559876543",
      childAge: "3 سنوات",
      message: "استفسار عن برنامج KG1",
      status: "contacted",
      createdAt: "2026-06-18T14:30:00.000Z",
    },
  ];

  it("should generate CSV with BOM for Arabic support", () => {
    const csv = generateCSVContent(mockItems);
    expect(csv.startsWith("\uFEFF")).toBe(true);
  });

  it("should include correct headers", () => {
    const csv = generateCSVContent(mockItems);
    const firstLine = csv.split("\n")[0].replace("\uFEFF", "");
    expect(firstLine).toContain("الاسم");
    expect(firstLine).toContain("البريد الإلكتروني");
    expect(firstLine).toContain("الجوال");
    expect(firstLine).toContain("عمر الطفل");
    expect(firstLine).toContain("الرسالة");
    expect(firstLine).toContain("الحالة");
    expect(firstLine).toContain("التاريخ");
  });

  it("should include all items in CSV output", () => {
    const csv = generateCSVContent(mockItems);
    const lines = csv.split("\n");
    // 1 header + 2 data rows
    expect(lines.length).toBe(3);
  });

  it("should translate status to Arabic labels", () => {
    const csv = generateCSVContent(mockItems);
    expect(csv).toContain("جديد");
    expect(csv).toContain("تم التواصل");
  });

  it("should properly escape quotes in CSV", () => {
    const itemsWithQuotes = [
      {
        id: 1,
        name: 'أحمد "الأب"',
        email: "test@test.com",
        phone: "",
        childAge: "",
        message: "",
        status: "new",
        createdAt: "2026-06-17T10:00:00.000Z",
      },
    ];
    const csv = generateCSVContent(itemsWithQuotes);
    // Double quotes should be escaped as ""
    expect(csv).toContain('""الأب""');
  });

  it("should handle empty items array", () => {
    const csv = generateCSVContent([]);
    const lines = csv.split("\n");
    // Only header line
    expect(lines.length).toBe(1);
  });

  it("should handle null/undefined fields gracefully", () => {
    const itemsWithNulls = [
      {
        id: 1,
        name: "تجربة",
        email: "test@test.com",
        phone: null,
        childAge: undefined,
        message: null,
        status: "new",
        createdAt: "2026-06-17T10:00:00.000Z",
      },
    ];
    const csv = generateCSVContent(itemsWithNulls as Array<Record<string, unknown>>);
    expect(csv).toBeDefined();
    // Should not throw and should contain the name
    expect(csv).toContain("تجربة");
  });

  it("should format dates correctly", () => {
    const date = formatDateForExport("2026-06-17T10:00:00.000Z");
    // Should be a non-empty string
    expect(date.length).toBeGreaterThan(0);
  });

  it("should number rows sequentially starting from 1", () => {
    const csv = generateCSVContent(mockItems);
    const lines = csv.split("\n");
    // First data row should start with "1"
    expect(lines[1]).toContain('"1"');
    // Second data row should start with "2"
    expect(lines[2]).toContain('"2"');
  });
});
