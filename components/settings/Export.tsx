import { exportToPdf } from "@/lib/utils";

import { Button } from "../ui/button";
import Link from "next/link";

const Export = () => (
  <div className='flex flex-col gap-3 px-5 mt-5 py-3'>
    <Button
      variant='outline'
      className='w-full border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black'
      onClick={exportToPdf}
    >
      Export as PDF
    </Button>
    <br />
    <p className="text-xs text-center justify-center items-center">v1.0.7</p>
    <Link className="text-xs text-center justify-center items-center" href={"https://chrisadams.io"}>ChrisAdams.io</Link>
  </div>
);

export default Export;