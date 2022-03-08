package pkg.School.Management.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "classGroups")
public class ClassGroups {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "groupName")
    private String name;

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = false)
    private Teachers teacher;

    public void setId(long id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setTeacher(Teachers teacher) {
        this.teacher = teacher;
    }

    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Teachers getTeacher() {
        return teacher;
    }
}
