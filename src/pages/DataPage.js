import { CircularProgress, Typography } from "@mui/material";
import { ClassStudentsTable } from "../components/ClassStudentsTable";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";
import { useLoaderData, useNavigation } from "react-router-dom";

export const DataPage = () =>{
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <CircularProgress />;
  }
  return(
    <>
    <Typography>
      {data.Osztalyfonok}
    </Typography>
    <ClassStudentsTable students={data.Diakok}/>
    </>
  );
}

export const classLoader = async () => {
  const ref = doc(firestore, "Osztalyok", "11J");
  try {
    const oszyalySnap = await getDoc(ref);
    return oszyalySnap.data();
  } catch (err) {
    console.error(err);
    return null;
  }
  
  };