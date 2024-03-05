type IndicatorProps = {
    title: string;
    amount: string;
    currencyFontColorClass: 'text-java' | 'text-redOrange' | 'text-crusta';
} 

export function Indicator({ title, amount, currencyFontColorClass }: IndicatorProps) {
    return (
        <div className="bg-primary px-3 py-2 md:w-52 rounded-md flex flex-col">
            <span className="text-sm font-semibold text-cloudy">{title}</span>
            <span className={`font-semibold text-xl ${currencyFontColorClass}`}>{amount}</span>
        </div>
    );
}