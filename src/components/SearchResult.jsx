import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchdatafromapi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fectchSearchResult();
  }, [searchQuery]);

  const fectchSearchResult = () => {
    setLoading(true);
    fetchdatafromapi(`search/?q=${searchQuery}`).then((res) => {
      // console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };
  return (
    <div className="h-[calc(100% - 56px)] flex flex-row">
      <LeftNav />
      <div className="grow w-[calc(100% - 240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item?.video;
            return <SearchResultVideoCard key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
