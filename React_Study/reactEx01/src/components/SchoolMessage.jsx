import { SubSchool } from "./SubSchool";

const SchoolMessage = (props) => {
  const { name, school } = props; //분할 대입

  return (
    <>
      <p>{name}</p>
      <p>{school}</p>
      <p>{props.children}</p>
      <SubSchool
        name={props.name}
        school={props.school}
        score="100"
      ></SubSchool>
    </>
  );
};

export default SchoolMessage;
