package pkg.School.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pkg.School.Management.model.ClassGroups;
import pkg.School.Management.model.Students;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Students, Long> {

    Students findById(long id);
    Students findTopByFirstNameContains(String firstName);
    Students findTopByLastNameContains(String lastName);
//    List<Students> findAllByClassGroup(long classGroupId);
    List<Students> findAllByClassGroupName(String classGroupName);
    Students findFirstByClassGroupName(String classGroupName);

}
