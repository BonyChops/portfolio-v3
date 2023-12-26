"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export default function CommitDate({ commitDate }: { commitDate?: string }) {
  const [relative, setRelative] = useState<string | null>(commitDate ?? null);
  useEffect(() => {
    if (commitDate) {
      setRelative(DateTime.fromISO(commitDate).toRelative());
    }
  }, [commitDate]);
  return commitDate && <span title={commitDate}>{`(${relative})`}</span>;
}
