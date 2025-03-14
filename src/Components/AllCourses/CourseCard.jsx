import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function CourseCard({course}){
  console.log(course)
  const {course_name,course_image,category,level,price,duration,instructor} = course;
  return (
    <div className="border-[1px] border-TealGreen ">
    <div className="h-52 overflow-hidden">
        <img src={course_image} alt="" className="w-full h-52 hover:scale-125 transition-all duration-300"/>
    </div>
      <div className="p-5">
      <div className="flex items-center justify-between">
          <h2 className="text-TealGreen font-medium text-xl">{category}</h2>
          <p className="text-LightTeal">{level}</p>
      </div>
       <div className="text-gray-500 ">
        <h3 className="my-2">{course_name}</h3>
        <p className="mb-2">Price : ${price}</p>
        <p>Duration : {duration}</p>
          <p className="text-lg font-medium my-3 text-TealGreen">Instructor</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
          <img src={instructor?.instructor_image} alt="" className="w-10 h-10 object-cover rounded-full"/>
          <p className=" text-sm">{instructor.name}</p>
        </div>
        <FaArrowUpRightFromSquare className="text-TealGreen text-2xl cursor-pointer"/>
        </div>
       </div>
         
      </div>


    </div>
  )
}
