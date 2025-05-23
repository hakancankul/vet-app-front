export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        <p className="text-lg font-medium text-gray-600">Yükleniyor...</p>
      </div>
    </div>
  );
} 