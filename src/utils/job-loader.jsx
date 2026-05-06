import React from "react";
import { useParams } from "react-router";

const JobLoader = async ({ job }) => {
  const { id } = useParams();
  const res = await fetch(`/api/jobs/${job.id}`);
  const data = await res.json();

  return data;
};

export { JobLoader };
