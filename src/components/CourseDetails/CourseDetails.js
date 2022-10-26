import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CourseDetails = () => {

    const courseInfo = useLoaderData();
    const { id, name, courseBanner, courseIntro, courseDetails, cost, about, instructor } = courseInfo;

    const generatePDF = () => {

        const input = document.getElementById('pdfContainer');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const bleedWidth = 100;

                const width = parseInt(canvas.style.width) + bleedWidth * 2;
                const height = parseInt(canvas.style.height) + bleedWidth;

                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [width, height]
                });

                const pageSize = pdf.internal.pageSize;
                const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

                const imgProps = pdf.getImageProperties(imgData);

                const pdfWidth = pageWidth - bleedWidth * 2;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, "PNG", bleedWidth, 50, pdfWidth, pdfHeight);
                pdf.save("download.pdf");
            });
    }

    return (
        <>
            <div className='m-10 p-10'>
                <div className='mr-2 flex justify-end'>
                    <button className='text-right btn btn-outline' onClick={generatePDF}>Download PDF</button>
                </div>

                <div id='pdfContainer'>
                    <div className='bg-sky-50 lg:flex justify-around'>
                        <div className='lg:w-3/5 p-2 lg:m-6'>
                            <div >
                                <h1 className='text-4xl font-extrabold	'>{name}</h1>
                                <h4 className='text-justify font-medium py-2'>{courseIntro}</h4>
                                <p className='text-justify pb-2'>{courseDetails}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='font-bold'>Course instructor</h1>
                                    <div className="flex items-center">

                                        <img className='h-8 w-8 rounded-full' src={instructor.image} />
                                        <div>
                                            <strong className='pl-1'>{instructor.name}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-extrabold'>${cost}</h1>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-2/5 p-2'>
                            <img className='w-full' src={courseBanner} alt="" />
                            <div className="flex gap-5">
                                <div className='text-2xl'>Time Left</div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 15 }}></span>
                                    </span>
                                    days
                                </div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 10 }}></span>
                                    </span>
                                    hours
                                </div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 24 }}></span>
                                    </span>
                                    min
                                </div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 43 }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                            <Link to={`/courses/${id}`}>
                                <button className="btn btn-outline btn-info w-full mt-3">Enroll Now</button></Link>
                        </div>
                    </div>
                    <div className='lg:mx-10 lg:px-10'>
                        <h3 className='text-2xl font-bold'>About</h3>
                        <h1 className='text-justify'>{about}</h1>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CourseDetails;