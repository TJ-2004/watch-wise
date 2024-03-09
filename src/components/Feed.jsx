import React, {useContext , useEffect} from 'react'
import {Context} from "../context/contextApi"
import LeftNav from "./LeftNav"
const Feed = () => {
  return (
    <div className="flex flex-row  h-[1160px]">
      <LeftNav />
    </div>
  )
}

export default Feed
