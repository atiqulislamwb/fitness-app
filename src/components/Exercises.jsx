import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

import { Box, Typography, Stack, Pagination } from "@mui/material";
import ExerciseCard from "../components/ExerciseCard";
const Exercises = ({ setExercises, bodyPart, exercises }) => {
  console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  // if (!currentExercises.length) return <Loader />;
  return (
    <>
      <Box
        id="exercises"
        sx={{
          mt: { lg: "110px" },
        }}
        mt="50px"
        p="20px"
      >
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((item, i) => (
            <ExerciseCard exercise={item} key={i} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
          {exercises.length > 9 && (
            <>
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                counters={Math.ceil(exercises.length / exercisePerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Exercises;
