        import axios from "axios";
        import { useEffect, useState } from "react"
        export function Courses()
        {
        const [courses, setCourses] = useState([{title:'', rating:0, faculty:'', duration:'', start:'',
        image:''}]);
        useEffect(()=>{
        axios.get('courses.json')
        .then(response=>{
        setCourses(response.data);
        })
        },[])
        return(
        <div className="container-fluid">
        <main className="d-flex">
        {
        courses.map(course =>
        <div className="card p-2 m-2" key={course.title}>
        <img className="card-img-top" src={course.image} height="130" />
        <div className="card-header text-center">
        <div>{course.title}</div>
        </div>
        <div className="card-body">
        <div className="text-center">
        <span className="bi bi-star-fill text-warning"></span>
        <span className="bi bi-star-fill text-warning"></span>
        <span className="bi bi-star-fill text-warning"></span>
        <span className="bi bi-star-fill text-warning"></span>
        <span className="bi bi-star-fill text-warning"></span>
        <span>{course.rating}</span>
        </div>
        <dl className="row">
        <dt className="col-5">Start</dt>
        <dd className="col-7">{course.start}</dd>
        <dt className="col-5">Duration</dt>
        <dd className="col-7">{course.duration}</dd>
        <dt className="col-5">By</dt>
        <dt className="col-7">{course.faculty}</dt>
        </dl>
        </div>
        </div>
        )
        }
        </main>
        </div>
        )
        }