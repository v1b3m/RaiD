import { useBoolean } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useCallback, useMemo, useRef, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { getArrayItems } from "../../../utils/array";
import { data as tableData } from "./data";
import CustomTable from "./Table";

const Results = () => {
  const [pageCount, setPageCount] = useState(0);
  const [analysisData, setAnalysisData] = useState(
    getArrayItems(tableData, pageCount, pageCount + 10)
  );
  const [loading, setLoading] = useBoolean(false);
  const fetchIdRef = useRef(0);
  const { width } = useWindowSize();
  const isTinyScreen = useCallback(() => width < 480, [width]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Cell: ({ value }: { value: string }) => value.slice(0, 8),
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }: { value: Date }) =>
          dayjs(value).format("ddd Do MMM YYYY"),
      },
    ],
    []
  );

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setLoading.on();
    setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setAnalysisData(getArrayItems(tableData, startRow, endRow));
        setPageCount(Math.ceil(tableData.length / pageSize));
        setLoading.off();
      }
    }, 1000);
  }, []);

  return (
    <CustomTable
      columns={columns}
      data={analysisData}
      fetchData={fetchData}
      pageCount={pageCount}
      loading={loading}
    />
  );
};

export default Results;
