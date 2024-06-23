import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
function SideBanners() {
    const [sideBannerList,setSideBannerList]=useState();
    useEffect(()=>{
        getSideBanners();
    },[])
    const getSideBanners=()=>{
        GlobalApi.getSideBanner().then(resp=>{
            console.log(resp);
        })
    }
  return (
    <div>
        {/* {sideBannerList.map((item,index)=>(
            <div key={index}>
                <Image src={item.banner.url} alt='banner'
                width={500}
                height={300} />
            </div>
        ))} */}
        SideBanner
    </div>
  )
}

export default SideBanners