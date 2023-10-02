'use client'

import React, { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function Hasil() {
  const [voting, setVoting] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: votingData, error } = await supabase
          .from("voting")
          .select("*");

        if (error) {
          console.error("Error fetching data:", error);
        } else {
          console.log("Fetched data:", votingData);
          // setVoting(votingData); // Set the initial data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

     fetchData();

   
  }, []);
  

  //  const channel = supabase.channel("db_voting");

  //  channel.on(
  //    "postgres_changes",
  //    {
  //      event: "INSERT",
  //      schema: "public",
  //      table: "voting",
  //    },
  //    (payload) => {
  //      setVoting((prevData) => [...prevData, payload.data]);
  //    }
  //  );

  //  channel.subscribe(async (status) => {
  //    if (status === "SUBSCRIBED") {
  //      try {
  //        const { data: votingData, error } = await supabase
  //          .from("voting")
  //          .select("id");

  //        if (error) {
  //          console.error("Error fetching data:", error);
  //        } else {
  //          setVoting(votingData);
  //        }
  //      } catch (error) {
  //        console.error("Error fetching data:", error);
  //      }
  //    }
  //  });


     const channel = supabase.channel("db-voting");

     channel.on(
       "postgres_changes",
       {
         event: "INSERT",
         schema: "public",
         table: "voting",
       },
       (payload) => setVoting(payload.data)
     );

     channel.subscribe(async (status) => {
       if (status === "SUBSCRIBED") {
         const res = await supabase
           .from("voting")
           .select(
             "*"
           )
         setVoting(res.data);
       }
     });

   // Clean up subscriptions when component is unmounted
 

  console.log('data',voting);

  return (
    <div>
        {voting.map((vote) => (
          <div key={vote.id}>
            {vote.nama_pemilih}
          </div>
        ))}
    </div>
  );
}
