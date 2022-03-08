package pkg.School.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pkg.School.Management.model.Teachers;

@Repository
public interface TeacherRepository extends JpaRepository<Teachers, Long> {

    Teachers findById(long id);

}
