import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-8675d-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setMeetups(meetups);
        setLoading(false);
      });
  }, [meetups]);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <MeetupList meetups={meetups} />;
};

export default AllMeetupsPage;
