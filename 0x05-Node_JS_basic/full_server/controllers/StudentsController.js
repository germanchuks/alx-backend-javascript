import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.params.path);
      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(data)
      .sort((a, b) => a.toLowerCase()
      .localeCompare(b.toLowerCase()));
      
      sortedFields.forEach((field) => {
        const students = data[field];
        const count = students.length;
        output += `Number of students in ${field}: ${count}. `;
        output += `List: ${students.join(', ')}\n`;
      });
      
      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
  
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const data = await readDatabase(req.params.path);
      const students = data[major] || [];
      const output = `List: ${students.join(', ')}`;
      
      res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;