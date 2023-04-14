import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupsPage = () => {
  const history = useHistory();

  const handleNewMeetup = (formData) => {
    fetch(
      "https://react-8675d-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onSubmit={handleNewMeetup} />
    </section>
  );
};

export default NewMeetupsPage;
