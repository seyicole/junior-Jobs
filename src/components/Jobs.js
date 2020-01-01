import React from 'react';
import './Jobs.css';
import { Card } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { timeDifferenceForDate } from '../Utils';


const Jobs = ({jobs, loading}) => {
	if(loading){
		return <div class="d-flex mx-auto justify-content-center align-content-*-center">
                    <Spinner class="" animation="border" variant="info" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
	}
	return (
		<ul>
			{jobs.map(job =>(
				<Container>
	<li>
	<Card>
	  <Card.Body>
	  
		<a href={job.url} target="_blank" rel="noopener noreferrer" >
		<div className='d-flex justify-content-between'>
			<p><span className='font-weight-bold'>
				{job.company}
				</span>  is hiring - junior <span className='font-weight-bold'>
				{job.title}
				</span>
			</p>
		</div>	
		<div className="d-flex justify-content-between text-muted">	
			<p>{job.type}</p>
			<p>{job.location}</p>
			<p>{timeDifferenceForDate(job.created)}</p>
			<i className="fa fa-external-link-square" style={{fontSize:'24px',color:'#17a2b8'}}></i>
		</div>	
			
			
			
		
		

		</a>
		
	  </Card.Body>
	</Card>
	</li>
	 </Container>
				))

			}
		</ul>

	)
}

export default Jobs;