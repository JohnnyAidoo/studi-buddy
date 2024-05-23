"use client";
import { Input, Textarea } from "@material-tailwind/react";

function AppPage() {
  return (
    <section className="w-full min-h-screen">
      <div className="h-full w-1/2"></div>
      <div className="w-full absolute bottom-0 flex justify-center items-center">
        <div className="w-2/4 flex items-center h-fit border-secondary-50   border-2  px-10 rounded-md py-2">
          <input type="file" name="pdf" id="pdf" />
          <Textarea
            variant="static"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
      </div>
    </section>
  );
}

export default AppPage;
