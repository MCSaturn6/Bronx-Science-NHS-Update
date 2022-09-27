import { useState } from "react";
import Outside from "../components/Outside.jsx";
import { useEffect } from 'react'

export default function OutsideOpportunities() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section class="page">
      <h1 class="heading">Outside Opportunities</h1>
      <section class="body-text">
        <br></br>
        <div class="page-body-text">
          <Outside
            name="Science for Bronx"
            description="Science for Bronx is a program where Bronx Science students go to a nearby middle school (around the reservoir) and tutor them for the SHSAT. Students tutor 6th-8th graders to prepare them for the SHSAT. The sessions will take place every Tuesday and Thursday from 3:30 PM to 5:30 PM."
            link="https://docs.google.com/forms/d/e/1FAIpQLSfWYwnBTt8ioqw0U3DEmz2wEpYIyJOrb6C3DA1ZIPcH0n7oTg/viewform"
          />
          <Outside
            name="New York City Service"
            description="This is the go-to web site for volunteering in New York City where you will find an abundance of opportunities in many different categories."
            link="https://www.nycservice.org"
          />
          <Outside
            name="The Leukemia & Lymphoma Society's School & Youth Program"
            description="The Leukemia & Lymphoma Society's School & Youth Programs are about just how powerful the youth in our schools can be! Programs like Pennies for Patients, Olive Garden's Pasta for Pennies, and HOP for Leukemia, involve kids by teaching them about community and helping others by joining in the fight against blood cancers."
            link="https://www.lls.org/volunteer"
          />
          <Outside
            name="Holy Apostles Soup Kitchen"
            description="Help to feed the hungry and comfort those in need."
            link="https://holyapostlesnyc.org"
          />
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
