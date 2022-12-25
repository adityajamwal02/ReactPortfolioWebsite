import React from 'react'
import { ResumeContainer, Heading} from './ResumeElements';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = ({id, headline}) => {
  return (
    <ResumeContainer id={id}>
        <Heading>{headline}</Heading>

        <VerticalTimeline lineColor='black'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'linear-gradient(rgb(23, 228, 226) 12.9%, rgb(0, 187, 180) 77.6%, rgb(255, 255, 255) 125.9%)', color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
              date="Work Experience (2021)"
              iconStyle={{ background: 'radial-gradient(circle at 10% 20%, rgb(39, 199, 171) 0%, rgb(70, 143, 197) 90%)' , color: '#000' }}
            >
              <h3 className="vertical-timeline-element-title">The Sparks Foundation </h3>
              <h4 className="vertical-timeline-element-subtitle"><i>Data Science & Business Analytic Intern</i></h4>
              <p >
              Task-1 : Supervised Learning: Mean Regression<br/>
              Task-2 : Unsupervised Learning: K-Means Clustering<br/>
              Task-3 : Exploratory Data Analysis & Dataset Visualization
              </p>
            </VerticalTimelineElement>
           
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'linear-gradient(0deg, rgb(211, 211, 211) 0%, rgb(111, 111, 112) 100%)' , color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  grey' }}
              date="Skills"
              iconStyle={{ background: 'linear-gradient(-180deg, rgba(255,255,255) 0%, rgba(0,0,0.5) 100%)', color: '#000' }}
            > 
              <h3 className="vertical-timeline-element-title">Skills </h3>                   
              <h4 className="vertical-timeline-element-subtitle"><i>Technical</i></h4>
              <p>
                C/C++, Data Structures & Algorithms, Python, HTML, CSS, JavaScript, React, SQL, GraphQL, Data Science, Machine Learning, Git, Linux, AWS/GCP
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Achievement"
              contentStyle={{ background: 'linear-gradient(rgb(23, 228, 226) 12.9%, rgb(0, 187, 180) 77.6%, rgb(255, 255, 255) 125.9%)', color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'radial-gradient(circle at 10% 20%, rgb(39, 199, 171) 0%, rgb(70, 143, 197) 90%)' , color: '#000' }}
            >
              <h3 className="vertical-timeline-element-title">Microsoft Cloud Skills Challenge 2022</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>Certification</i></h4>
              <p>
              Design, build, test, and maintain applications using Microsoft 365 platform.

              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'linear-gradient(0deg, rgb(211, 211, 211) 0%, rgb(111, 111, 112) 100%)' , color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  grey' }}
              date="Achievement"
              iconStyle={{ background: 'linear-gradient(-180deg, rgba(255,255,255) 0%, rgba(0,0,0.5) 100%)', color: '#000' }}          
            >
              <h3 className="vertical-timeline-element-title">Google Cloud Skills Challenge 2021</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>Certification</i></h4>
              <p>
              Managing cloud infrastructure, build dockers, pipelines, instances and buckets on qwiklabs
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'linear-gradient(rgb(23, 228, 226) 12.9%, rgb(0, 187, 180) 77.6%, rgb(255, 255, 255) 125.9%)', color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
              date="Online Course"
              iconStyle={{ background: 'radial-gradient(circle at 10% 20%, rgb(39, 199, 171) 0%, rgb(70, 143, 197) 90%)' , color: '#000' }}
            >
              <h3 className="vertical-timeline-element-title">Big Data & Machine Learning Fundamentals</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>May 2022</i></h4>
              <p>
                <b>Skills:</b> Google Cloud, TensorFlow, BigQuery, Cloud Computing, Vertex AI
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'linear-gradient(0deg, rgb(211, 211, 211) 0%, rgb(111, 111, 112) 100%)' , color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  grey' }}
              date="Online Course"
              iconStyle={{ background: 'linear-gradient(-180deg, rgba(255,255,255) 0%, rgba(0,0,0.5) 100%)', color: '#000' }}                
            >
              <h3 className="vertical-timeline-element-title">Machine Learning Training</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>07-08/2021</i></h4>
              <p>
                <b>Skills: </b> Exploratory Data Analysis, Supervised Models, Dimensionality Reduction, Feature Engineering and Unsupervised Models.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'linear-gradient(rgb(23, 228, 226) 12.9%, rgb(0, 187, 180) 77.6%, rgb(255, 255, 255) 125.9%)', color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
              date="Education (B.Tech CSE)"
              iconStyle={{ background: 'radial-gradient(circle at 10% 20%, rgb(39, 199, 171) 0%, rgb(70, 143, 197) 90%)' , color: '#000' }}
              >
              <h3 className="vertical-timeline-element-title">Jaypee Institute of Information Technology</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>2020 - Present</i></h4>
              <p>
                <b>Subjects</b> <br/>
                Data Structures & Algorithms, Database Management System, Operating System, Computer Networks, Computer Architecture & Organization
                
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'linear-gradient(0deg, rgb(211, 211, 211) 0%, rgb(111, 111, 112) 100%)' , color: '#000' }}
              contentArrowStyle={{ borderRight: '8px solid  grey' }}
              date="Education (CBSE)"
              iconStyle={{ background: 'linear-gradient(-180deg, rgba(255,255,255) 0%, rgba(0,0,0.5) 100%)', color: '#000' }}          
            >
              <h3 className="vertical-timeline-element-title">Cambridge School Indirapuram</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>2006-2020</i></h4>
              <p>
                <b>XII :  94.6% &emsp; X : 96%  </b> <br/>
                (2020) &emsp; &ensp; &ensp; (2018)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'linear-gradient(rgb(23, 228, 226) 12.9%, rgb(0, 187, 180) 77.6%, rgb(255, 255, 255) 125.9%)', color: '#000' }}
                contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
                date="Linguistics"
                iconStyle={{ background: 'radial-gradient(circle at 10% 20%, rgb(39, 199, 171) 0%, rgb(70, 143, 197) 90%)' , color: '#000' }}
                >
                <h3 className="vertical-timeline-element-title">Languages</h3><br/>
                <h4 className="vertical-timeline-element-subtitle">English : <i>&emsp;(Full Professional Proficiency)</i></h4>
                <h4 className="vertical-timeline-element-subtitle">Hindi&emsp; : <i>&emsp;(Full Professional Proficiency)</i></h4>
                <h4 className="vertical-timeline-element-subtitle">French&nbsp; : <i>&emsp;(Elementary Proficiency)</i></h4>               
              </VerticalTimelineElement>
            </VerticalTimeline>
    </ResumeContainer>
  )
}

export default Resume