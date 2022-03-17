package pkg.School.Management.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pkg.School.Management.model.ClassGroups;
import pkg.School.Management.model.Students;
import pkg.School.Management.repository.StudentRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @RequestMapping(value = "/save", method = {RequestMethod.POST, RequestMethod.PUT})
    public ResponseEntity<?> save(@RequestBody Students student){
        studentRepository.save(student);

        if(student.getId() == 0){
            return ResponseEntity.ok("student has been created");
        } else {
            return ResponseEntity.ok("Student has been updated");
        }
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity<?> delete(@RequestParam(value = "id") Long id) {

        if (studentRepository.findById(id) != null){
            studentRepository.deleteById(id);
            return ResponseEntity.ok("Student deleted");
        } else {
            return ResponseEntity.ok("We didn't find any student with such ID");
        }
    }

    @GetMapping(value = "/findAllByClassGroup")
    public ResponseEntity<?> findAllByClassGroup(@RequestParam (value = "classGroupId") long classGroupId){
        List<Students> studentsList = studentRepository.findAllByClassGroup(classGroupId);
        return ResponseEntity.ok().body(studentsList);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<?> findAll(){
        List<Students> studentList = studentRepository.findAll();
        return ResponseEntity.ok().body(studentList);
    }

}
