import { Suspense } from "react";
import VenuesClient from "./VenuesClient";

export default function VenuesPage(): React.ReactElement {
  return (
    <Suspense fallback={<div className="venues-page" />}>
      <VenuesClient />
    </Suspense>
  );
}
