package pkg.School.Management.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pkg.School.Management.model.Teachers;
import pkg.School.Management.repository.TeacherRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    @Autowired
    TeacherRepository teacherRepository;

    @RequestMapping(value = "/save", method = {RequestMethod.POST, RequestMethod.PUT})
    public ResponseEntity<?> save(@RequestBody Teachers teacher){
        teacherRepository.save(teacher);

        if(teacher.getId()==0){
            return ResponseEntity.ok("Teacher has been created");
        } else {
            return ResponseEntity.ok("Teacher has been updated");
        }
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity<?> delete(@RequestParam(value = "id") Long id){
        if (teacherRepository.findById(id).isPresent()){
            teacherRepository.deleteById(id);
            return ResponseEntity.ok("Teacher deleted");
        } else {
            return ResponseEntity.ok("We didn't find any teacher with such ID");
        }
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<?> findAll(){
        List<Teachers> teachersList = teacherRepository.findAll();
        return ResponseEntity.ok().body(teachersList);
    }

}
