package pkg.School.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pkg.School.Management.model.ClassGroups;
import pkg.School.Management.model.Teachers;

import java.util.List;

@Repository
public interface ClassGroupRepository extends JpaRepository<ClassGroups, Long> {

ClassGroups findById(long id);
ClassGroups findAllByTeacher(Teachers teacher);
ClassGroups findByName(String name);

}
