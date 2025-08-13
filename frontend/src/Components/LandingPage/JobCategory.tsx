import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { jobCategory } from '../../Data/Data';

const JobCategory = () => {
    return (
        <>
            <div className="text-5xl pt-8 pb-4 text-center font-bold capitalize [&>span]:text-blue-700">find your <span>job</span> category</div>
            <div className='text-lg pb-6 text-center mx-auto w-1/2'>Discover opportunities tailored to your skills and passion.
Browse through various industries, from IT to creative arts, and choose the path that fits you best.
Start exploring today and take the first step toward your dream career.</div>

            <Carousel slideSize="22%" align="start" slideGap="md" loop draggable={false}>
                {
                    jobCategory.map((job, idx) => {
                        return (
                          
                                <Carousel.Slide key={idx} className='pt-3'>
                                    <div className="pt-3 flex flex-col items-center w-64 border border-gray-300 rounded-xl hover:cursor-pointer hover:shadow-lg">
                                        <div className="p-2 bg-gray-200 rounded-full">
                                            <img className="h-8 w-8" src={`/Category/${job.name}.png`} alt={job.name} />
                                        </div>
                                        <div className="text-lg font-semibold">{job.name}</div>
                                        <div className="text-sm text-center">{job.desc}</div>
                                        <div className="text-gray-400 capitalize">{job.jobs}k+ new job posted</div>
                                    </div>
                                </Carousel.Slide>
                         
                        )
                    })
                }
            </Carousel>


        </>
    )
}

export default JobCategory;