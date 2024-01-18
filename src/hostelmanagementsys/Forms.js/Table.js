import { Button } from '@mui/material';
import React, { useState } from 'react';
import { StepperContext } from './StepperContext';
import {useContext} from 'react';
import { Input } from 'reactstrap';

const GradeCalculator = () => {
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState([]);
  const [subjectInput, setSubjectInput] = useState('');
  const [marksInput, setMarksInput] = useState('');
  const [totalMarks, setTotalMarks] = useState(0);
  const [average, setAverage] = useState(0);

  const { post, setPost,isSubmitted, setIsSubmitted}=useContext(StepperContext);

  const fieldChanged=(event)=>{
   
    setPost({...post,[event.target.name]:event.target.value})

  }

  const handleAddSubject = () => {
    if (!subjectInput || !marksInput) {
      alert('Please enter both subject name and marks.');
      return;
    }

    const mark = parseFloat(marksInput) || 0;

    setSubjects([...subjects, subjectInput]);
    setMarks([...marks, mark]);

    // Calculate total marks and average
    const newTotalMarks = totalMarks + mark;
    const newAverage = newTotalMarks / (subjects.length + 1);

    setTotalMarks(newTotalMarks);
    setAverage(newAverage);

    // Clear input fields
    setSubjectInput('');
    setMarksInput('');
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter subject name"
          value={subjectInput}
          onChange={(e) => setSubjectInput(e.target.value)}
          className="mr-2 px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Enter marks"
          value={marksInput}
          onChange={(e) => setMarksInput(e.target.value)}
          className="mr-2 px-4 py-2 border rounded"
        />
        <Button variant='contained'  color='error'
          className=''
          onClick={handleAddSubject}
        >
          Add Subject
        </Button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4  font-blod py-2 bg-gray-50 text-gray-400 text-xs leading-8 uppercase">Subject ( பாடப்பிரிவு )</th>
            <th className="border px-4  font-blod py-2 bg-gray-50 text-gray-400 text-xs leading-8 uppercase">Marks ( மதிப்பெண்கள் )</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td className="border font-blod  text-gray-500 text-xs leading-8 uppercase ">
                <Input
                id='subject'
                name='subject'
                onChange={fieldChanged}
                value= {subjects}
                />
               </td>
              <td className="border font-blod py-1  text-gray-500 text-xs leading-8 uppercase ">
              <Input
                id='marks'
                name='marks'
                onChange={fieldChanged}
                value= {marks[index]}
                />
                </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th className="border px-4  font-blod py-2 text-gray-400 text-xs leading-8 uppercase">Total Marks ( மொத்தம் ) </th>
            <th className="border px-4  font-blod py-2 text-gray-400 text-xs leading-8 uppercase">{totalMarks}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th className="border px-4  font-blod py-2 text-gray-400 text-xs leading-8 uppercase">Average  ( சராசரி ) </th>
            <th className="border px-4  font-blod py-2 text-gray-400 text-xs leading-8 uppercase">{average.toFixed(2)}</th>
          </tr>
        </thead>

      </table>

    </div>
  );
};

export default GradeCalculator;
