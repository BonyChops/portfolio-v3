"use client";

import { DateTime } from "luxon";

export default function CommitDate({ commitDate }: { commitDate?: string }) {
  return (
    commitDate && (
      <span title={commitDate}>{`(${DateTime.fromISO(
        commitDate
      ).toRelative()})`}</span>
    )
  );
}
