import { useAppSelector } from "../../../app/hooks";

export function CurrentDisplayedEntries({ totalEntries }: { totalEntries: number }) {
    const { displayEntries, paginator } = useAppSelector((state) => state);

    const startIndex = (paginator.value - 1) * displayEntries.value + 1;
    const endIndex = Math.min(paginator.value * displayEntries.value, totalEntries);
    return <span className="font-semibold text-cloudy text-sm">Showing {startIndex} to {endIndex} of {totalEntries} entries</span>
}