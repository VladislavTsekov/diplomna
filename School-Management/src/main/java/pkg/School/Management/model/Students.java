package pkg.School.Management.model;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Students {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "group_id", nullable = false)
    private ClassGroups classGroup;

    public ClassGroups getClassGroup() {
        return classGroup;
    }
    public long getId() {
        return id;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }

    public void setClassGroup(ClassGroups classGroup) {
        this.classGroup = classGroup;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setId(long id) {
        this.id = id;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
