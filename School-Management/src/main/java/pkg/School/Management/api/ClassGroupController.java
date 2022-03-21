package pkg.School.Management.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pkg.School.Management.model.ClassGroups;
import pkg.School.Management.repository.ClassGroupRepository;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/classGroup")
public class ClassGroupController {

    @Autowired
    ClassGroupRepository classGroupRepository;

    @RequestMapping(value = "/save", method = {RequestMethod.POST, RequestMethod.PUT})
    public ResponseEntity<?> save(@RequestBody ClassGroups classGroup){

        List<ClassGroups> classGroupsList = classGroupRepository.findAll();
        List<String> classGroupNamesList = new LinkedList<>();
        for (ClassGroups classGroups: classGroupsList)   classGroupNamesList.add(classGroups.getName());

        if (classGroupNamesList.lastIndexOf(classGroup.getName())==-1){
            classGroupRepository.save(classGroup);
            if(classGroup.getId()==0){
                return ResponseEntity.ok("Class has been created");
            } else {
                return ResponseEntity.ok("Class has been updated");
            }
        }else{
            return ResponseEntity.ok("A class with such name already exists!");
        }
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity<?> delete(@RequestParam(value = "id") Long id){
        if(classGroupRepository.findById(id).isPresent()){
            classGroupRepository.deleteById(id);
            return ResponseEntity.ok("Class deleted");
        } else {
            return ResponseEntity.ok("We didn't find any class with such Id");
        }
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<?> findAll(){
        List<ClassGroups> classGroupsList = classGroupRepository.findAll();
        return ResponseEntity.ok().body(classGroupsList);
    }

    @GetMapping(value = "/findByName")
    public ResponseEntity<?> findByName(@RequestParam(value = "name") String name){
        ClassGroups classGroups = classGroupRepository.findByName(name);
        return ResponseEntity.ok().body(classGroups);
    }
}
