import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Inbox, CheckCircle, UserPlus, Archive, RefreshCw, LogOut, Download, FileSpreadsheet } from "lucide-react";
import * as XLSX from "xlsx";

const STATUS_MAP: Record<string, { label: string; color: string; icon: typeof Inbox }> = {
  new: { label: "جديد", color: "bg-blue-100 text-blue-800", icon: Inbox },
  contacted: { label: "تم التواصل", color: "bg-yellow-100 text-yellow-800", icon: CheckCircle },
  enrolled: { label: "مسجّل", color: "bg-green-100 text-green-800", icon: UserPlus },
  archived: { label: "مؤرشف", color: "bg-gray-100 text-gray-600", icon: Archive },
};

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

function exportToCSV(items: Array<Record<string, unknown>>) {
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

  // BOM for Arabic support in Excel
  const BOM = "\uFEFF";
  const csvContent = BOM + [headers.join(","), ...rows.map(row =>
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")
  )].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `استفسارات_مركز_شجرة_التعلم_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function exportToExcel(items: Array<Record<string, unknown>>) {
  const data = items.map((item, idx) => ({
    "#": idx + 1,
    "الاسم": item.name || "",
    "البريد الإلكتروني": item.email || "",
    "الجوال": item.phone || "",
    "عمر الطفل": item.childAge || "",
    "الرسالة": item.message || "",
    "الحالة": STATUS_LABELS[item.status as string] || item.status || "",
    "التاريخ": item.createdAt ? formatDateForExport(item.createdAt as string) : "",
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  // Set RTL for the sheet
  ws["!cols"] = [
    { wch: 5 },   // #
    { wch: 20 },  // الاسم
    { wch: 30 },  // البريد
    { wch: 18 },  // الجوال
    { wch: 12 },  // عمر الطفل
    { wch: 40 },  // الرسالة
    { wch: 12 },  // الحالة
    { wch: 14 },  // التاريخ
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "الاستفسارات");

  // Set RTL view for the workbook
  if (!wb.Workbook) wb.Workbook = {};
  if (!wb.Workbook.Views) wb.Workbook.Views = [];
  wb.Workbook.Views[0] = { RTL: true };

  XLSX.writeFile(wb, `استفسارات_مركز_شجرة_التعلم_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export default function AdminDashboard() {
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth();
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "contacted" | "enrolled" | "archived">("all");
  const [page, setPage] = useState(1);
  const [isExporting, setIsExporting] = useState(false);

  const { data: stats, refetch: refetchStats } = trpc.inquiry.stats.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  const { data: inquiries, isLoading, refetch } = trpc.inquiry.list.useQuery(
    { status: statusFilter, page, limit: 20 },
    { enabled: isAuthenticated && user?.role === "admin" }
  );

  const updateStatus = trpc.inquiry.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("تم تحديث الحالة بنجاح");
      refetch();
      refetchStats();
    },
    onError: () => {
      toast.error("حدث خطأ أثناء التحديث");
    },
  });

  const trpcUtils = trpc.useUtils();

  const handleExport = async (format: "csv" | "excel") => {
    setIsExporting(true);
    try {
      const result = await trpcUtils.inquiry.export.fetch({ status: statusFilter });
      if (!result?.items?.length) {
        toast.error("لا توجد بيانات للتصدير");
        return;
      }

      if (format === "csv") {
        exportToCSV(result.items as Array<Record<string, unknown>>);
        toast.success("تم تصدير الملف بصيغة CSV بنجاح");
      } else {
        exportToExcel(result.items as Array<Record<string, unknown>>);
        toast.success("تم تصدير الملف بصيغة Excel بنجاح");
      }
    } catch {
      toast.error("حدث خطأ أثناء التصدير");
    } finally {
      setIsExporting(false);
    }
  };

  // Auth loading state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-[var(--green-primary)] border-t-transparent rounded-full" />
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
        <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-[var(--navy)] mb-4">لوحة التحكم الإدارية</h1>
          <p className="text-gray-600 mb-6">يرجى تسجيل الدخول للوصول إلى لوحة التحكم.</p>
          <a
            href={getLoginUrl()}
            className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-6 py-3 rounded-xl font-bold hover:bg-[var(--navy)] transition-colors"
          >
            تسجيل الدخول
          </a>
        </div>
      </div>
    );
  }

  // Not admin
  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
        <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">غير مصرح</h1>
          <p className="text-gray-600 mb-6">ليس لديك صلاحية الوصول إلى لوحة التحكم.</p>
          <a href="/" className="text-[var(--green-primary)] font-bold hover:underline">العودة للصفحة الرئيسية</a>
        </div>
      </div>
    );
  }

  const totalPages = inquiries ? Math.ceil(inquiries.total / inquiries.limit) : 1;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-[var(--navy)]">لوحة التحكم — مركز شجرة التعلم</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">{user?.name || user?.email}</span>
            <Button variant="outline" size="sm" onClick={() => logout()}>
              <LogOut className="w-4 h-4 ml-1" />
              خروج
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <div className="text-3xl font-bold text-[var(--navy)]">{stats?.total ?? 0}</div>
            <div className="text-sm text-gray-500 mt-1">إجمالي الاستفسارات</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
            <div className="text-3xl font-bold text-blue-600">{stats?.new ?? 0}</div>
            <div className="text-sm text-gray-500 mt-1">جديد</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-yellow-100">
            <div className="text-3xl font-bold text-yellow-600">{stats?.contacted ?? 0}</div>
            <div className="text-sm text-gray-500 mt-1">تم التواصل</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
            <div className="text-3xl font-bold text-green-600">{stats?.enrolled ?? 0}</div>
            <div className="text-sm text-gray-500 mt-1">مسجّل</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-500">{stats?.archived ?? 0}</div>
            <div className="text-sm text-gray-500 mt-1">مؤرشف</div>
          </div>
        </div>

        {/* Filter, Refresh & Export */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-2 flex-wrap">
              {(["all", "new", "contacted", "enrolled", "archived"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => { setStatusFilter(s); setPage(1); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    statusFilter === s
                      ? "bg-[var(--green-primary)] text-white"
                      : "bg-white text-gray-600 border hover:bg-gray-50"
                  }`}
                >
                  {s === "all" ? "الكل" : STATUS_MAP[s].label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={() => { refetch(); refetchStats(); }}>
              <RefreshCw className="w-4 h-4 ml-1" />
              تحديث
            </Button>
          </div>

          {/* Export Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport("csv")}
              disabled={isExporting}
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Download className="w-4 h-4 ml-1" />
              {isExporting ? "جاري التصدير..." : "تصدير CSV"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport("excel")}
              disabled={isExporting}
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <FileSpreadsheet className="w-4 h-4 ml-1" />
              {isExporting ? "جاري التصدير..." : "تصدير Excel"}
            </Button>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {isLoading ? (
            <div className="p-10 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-[var(--green-primary)] border-t-transparent rounded-full mx-auto" />
              <p className="mt-3 text-gray-500">جاري التحميل...</p>
            </div>
          ) : !inquiries?.items.length ? (
            <div className="p-10 text-center">
              <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">لا توجد استفسارات حالياً</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">#</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">الاسم</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">البريد</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">الجوال</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">عمر الطفل</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">الرسالة</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">الحالة</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">التاريخ</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">إجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {inquiries.items.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-500">{item.id}</td>
                      <td className="px-4 py-3 font-medium text-[var(--navy)]">{item.name}</td>
                      <td className="px-4 py-3 text-gray-600" dir="ltr">{item.email}</td>
                      <td className="px-4 py-3 text-gray-600" dir="ltr">{item.phone || "—"}</td>
                      <td className="px-4 py-3 text-gray-600">{item.childAge || "—"}</td>
                      <td className="px-4 py-3 text-gray-600 max-w-[200px] truncate">{item.message || "—"}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_MAP[item.status]?.color}`}>
                          {STATUS_MAP[item.status]?.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                        {new Date(item.createdAt).toLocaleDateString("ar-SA", { year: "numeric", month: "short", day: "numeric" })}
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={item.status}
                          onChange={(e) => updateStatus.mutate({ id: item.id, status: e.target.value as "new" | "contacted" | "enrolled" | "archived" })}
                          className="text-xs border rounded-lg px-2 py-1.5 bg-white focus:ring-2 focus:ring-[var(--green-primary)]"
                        >
                          <option value="new">جديد</option>
                          <option value="contacted">تم التواصل</option>
                          <option value="enrolled">مسجّل</option>
                          <option value="archived">مؤرشف</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {inquiries && totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
              <span className="text-sm text-gray-500">
                صفحة {page} من {totalPages} — إجمالي {inquiries.total} استفسار
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>
                  السابق
                </Button>
                <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
                  التالي
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
