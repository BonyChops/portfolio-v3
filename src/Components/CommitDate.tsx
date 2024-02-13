"use client";

import { intervalToDuration, formatDuration, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { ja } from "date-fns/locale";

export default function CommitDate({ commitDate }: { commitDate?: string }) {
  const [relative, setRelative] = useState<string | null>(commitDate ?? null);
  useEffect(() => {
    if (commitDate) {
      const duration = intervalToDuration({
        start: parseISO(commitDate),
        end: new Date(),
      });

      if (!duration) {
        return;
      }

      // 非ゼロの期間単位を持つオブジェクトを作成
      const durationForFormat = Object.fromEntries([
        Object.entries(duration).find((v) => v[1] >= 0) ?? ["seconds", 0],
      ]);

      // 非ゼロの期間単位のみを含むオブジェクトをformatDurationに渡す
      const formattedDuration = formatDuration(durationForFormat, {
        locale: ja,
      });

      setRelative(formattedDuration ? `${formattedDuration}前` : "数秒前");
    }
  }, [commitDate]);
  return commitDate && <span title={commitDate}>{`(${relative})`}</span>;
}
