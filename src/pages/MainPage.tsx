import coursesApi from "../api/courses_api";
import Header from "../components/Common/Header";

export default function MainPage() {
  console.log(coursesApi());
  return <Header/>;
}
