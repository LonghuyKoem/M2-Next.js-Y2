"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SearchPage() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  return (
    <div>
      PathName:{pathName}
      <button className="border p-4 rounded">HomePage</button>
      <button>
        Next page
      </button>
      <button>
        Back From Previous Page
      </button>
      Search Params : {searchParams.get('category')}
    </div>
  );
}
