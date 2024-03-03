import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectPage } from "./paginatorSlice";

type PaginatorProps = {
    links: string[];
    totalCount: number;
}

const getPageValue = (link: string): number | null => {
    const match = link.match(/_page=(\d+)/);
    return match ? parseInt(match[1]) : null;
};

export function Paginator({ links }: PaginatorProps) {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.paginator.value);
    const firstPage = getPageValue(links.find(link => link.includes('rel="first"')) ?? '');
    const nextPage = getPageValue(links.find(link => link.includes('rel="next"')) ?? '');
    const lastPage = getPageValue(links.find(link => link.includes('rel="last"')) ?? '');

    if(!firstPage && !nextPage && !lastPage)
        return <></>;

    const handlePageSelected = (page: number) => {
        dispatch(selectPage(page));
    };

    function getPages(currentPage: number, lastPage: number) {
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(startPage + 3, lastPage);

        return Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
            const page = startPage + index;
            return (
                <li key={page} className={`${page === currentPage ? 'bg-primary' : 'bg-cyprus'} rounded-md`}>
                    <a onClick={() => handlePageSelected(page)} className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">{page}</a>
                </li>
            );
        });
    }

    function handlePrevPage(currentPage: number) {
        if(currentPage > 1)
            dispatch(selectPage(currentPage - 1));
    }

    function handleNextPage(currentPage: number) {
        if(lastPage && currentPage < lastPage)
            dispatch(selectPage(currentPage + 1));
    }

    return (
        <nav>
            <ul className="flex gap-1">
                <li className="bg-cyprus rounded-md">
                    <a onClick={() => handlePrevPage(currentPage)} className={`px-2 py-1 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} text-sm font-semibold text-cloudy`}>Prev</a>
                </li>
                {getPages(currentPage, lastPage ?? 1)}
                <li className="bg-cyprus rounded-md">
                    <a onClick={() => handleNextPage(currentPage)} className={`px-2 py-1 ${currentPage === lastPage ? 'cursor-not-allowed' : 'cursor-pointer'} text-sm font-semibold text-cloudy`}>Next</a>
                </li>
            </ul>
        </nav>
    );
}