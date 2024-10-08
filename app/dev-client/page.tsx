"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

export default function Page() {
  const supabase = createClient();

  useEffect(() => {
    async function ttt() {
      console.log("222222");
      const { data: notes } = await supabase.from("notes").select();
      console.log("3333  ", notes);
    }

    console.log("1111");
    ttt();
  }, []);

  return <div>2222</div>;
}
