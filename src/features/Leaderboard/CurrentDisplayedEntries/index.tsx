import { useAppSelector } from "../../../app/hooks";

export function CurrentDisplayedEntries({ totalEntries }: { totalEntries: number }) {
    const displayEntries = useAppSelector((state) => state.displayEntries.value);
    const paginator = useAppSelector((state) => state.paginator.value);

    const startIndex = (paginator - 1) * displayEntries + 1;
    const endIndex = Math.min(paginator * displayEntries, totalEntries);
    return <span className="font-semibold text-cloudy text-sm">Showing {startIndex} to {endIndex} of {totalEntries} entries</span>
}