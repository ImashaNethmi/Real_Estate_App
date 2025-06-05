"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useUser } from "@clerk/nextjs";
import {
  Bath,
  BedDouble,
  MapPin,
  Ruler,
  Trash,
  View,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function UserListing() {
  const { user } = useUser();
  const [listing, setListing] = useState([]);

  useEffect(() => {
    user && GetUserListing();
  }, [user]);

  const GetUserListing = async () => {
    const { data, error } = await supabase
      .from("listing")
      .select(`*,listingimages(url,listing_id)`)
      .eq("createdBy", user?.primaryEmailAddress.emailAddress);

    if (error) console.error("Error fetching listings:", error);
    else setListing(data);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmed) return;

    const { error } = await supabase
      .from("listing")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting listing:", error);
      alert("Failed to delete listing.");
    } else {
      setListing((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Manage Your Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {listing &&
          listing.map((item, index) => (
            <div
              key={item.id}
              className="p-3 hover:border hover:border-primary cursor-pointer rounded-lg"
            >
              <h2 className="bg-primary m-1 rounded-lg text-white absolute px-2 text-sm p-1">
                {item.active ? "Published" : "Draft"}
              </h2>
              <Image
                src={
                  item?.listingimages[0]
                    ? item?.listingimages[0]?.url
                    : "/placeholder.jpg"
                }
                width={800}
                height={150}
                className="rounded-lg object-cover h-[170px]"
                alt="Listing Image"
              />
              <div className="flex mt-2 flex-col gap-2">
                <h2 className="font-bold text-xl">${item?.sellingPrice}</h2>
                <h2 className="flex gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {item.address}
                </h2>
                <div className="flex gap-2 mt-2 justify-between">
                  <h2 className="flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center">
                    <BedDouble className="h-4 w-4" />
                    {item?.bedroom}
                  </h2>
                  <h2 className="flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center">
                    <Bath className="h-4 w-4" />
                    {item?.bathroom}
                  </h2>
                  <h2 className="flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center">
                    <Ruler className="h-4 w-4" />
                    {item?.area}
                  </h2>
                </div>
                <div className="flex gap-2 justify-between">
                  <Link className="w-full" href={"/view-listing/" + item.id}>
                    <Button size="sm" className="w-full" variant="outline">
                      <View />
                      View
                    </Button>
                  </Link>

                  <Link className="w-full" href={"/edit-listing/" + item.id}>
                    <Button size="sm" className="w-full">Edit</Button>
                  </Link>

                  <Button
                    size="sm"
                    className="w-full"
                    variant="destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserListing;
