import { createClient } from "@/utils/supabase/server";
import { data } from "autoprefixer";

export default async function Page() {
  const supabase = createClient();
  // const { data: notes, error } = await supabase
  //   .from("notes")
  //   .select("id", "title");
  const { data: notes, error } = await supabase.from("notes").select();

  // const { error: error2 } = await supabase.from("notes").insert({
  //   title: "dddd",
  // });

  // console.log("ddddd", data);

  return (
    <>
      {/* -- origin */}
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      error
      <pre>{JSON.stringify(error, null, 2)}</pre>
      {/* <pre>{JSON.stringify(error2, null, 2)}</pre> */}
      <div className=""></div>왜 데이터가 안나오지??
    </>
  );
}
