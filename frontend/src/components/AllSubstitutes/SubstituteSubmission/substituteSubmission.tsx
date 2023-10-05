import React, { useState } from "react";
import SubstituteService from "../../../services/substituteService";
import "../../AllSubstitutes/substitutes/substitutes.css";

//Defining the SubstituteSubmission component
const SubstituteSubmission: React.FC = () => {
  //State to manage the form input fields and submission status
  const [missingIngredient, setMissingIngredient] = useState("");
  const [solution, setSolution] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  //Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new Substitute object from the form inputs
    const newSubstitute = {
      missingIngredient,
      solution,
    };

    try {
      // Send new substitute to backend for instertion into the mongo database
      await SubstituteService.createSubstitute(newSubstitute);
      setSubmissionStatus("Submission successful!");

      // Clear the form input after a successful submission
      setMissingIngredient("");
      setSolution("");
    } catch (error) {
      console.error("Error submitting substitute:", error);
      setSubmissionStatus("Submission failed. Please try again later.");
    }
  };

  return (
    <div className="substitute-submission">
      <h2 className="sub-submission-header">
        Came up with your own substitute? Share it!
      </h2>
      <form className="substitute-submission-form" onSubmit={handleSubmit}>
        <input
          className="submission-input"
          type="text"
          placeholder="What did you replace?"
          value={missingIngredient}
          onChange={(e) => setMissingIngredient(e.target.value)}
          required
        />
        <textarea
          className="solution-text"
          placeholder="your solution?"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          required
        ></textarea>
        <button className="sub-submission-button" type="submit">
          Submit
        </button>
      </form>
      <p
        className="
      submission-status"
      >
        {submissionStatus}
      </p>
    </div>
  );
};

export default SubstituteSubmission;
