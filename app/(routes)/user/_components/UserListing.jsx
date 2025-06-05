import React, {useEffect} from 'react'
import  {supabase} from '@/utils/supabase/client'
import {useUser} from '@clerk/nextjs'

function UserListing() {
    const {user}= useUser();

    useEffect(() => {
        user&&GetUserListing();
    }, [user])

    const GetUserListing=async()=>{
        const {data, error}= await supabase
        .from('listing')
        .select(`*,listingimages(url,listing_id)`)
        .eq('createdBy',user?.primaryEmailAddress.emailAddress);

        console.log(data);
    }
  return (
    <div>UserListing</div>
  )
}

export default UserListing